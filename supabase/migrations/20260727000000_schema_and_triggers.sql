-- ============================================================================
-- School Library Book Registration System - Database Migration
-- Supabase / Postgres Schema, Triggers, Sequence, and RLS Policies
-- ============================================================================

-- 1. Create Profiles Table (Linked to Supabase Auth)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT,
    role TEXT DEFAULT 'admin' CHECK (role IN ('admin', 'librarian')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create Sequence for Registration Numbers
CREATE SEQUENCE IF NOT EXISTS public.book_reg_seq START WITH 1;

-- 3. Create Books Table
CREATE TABLE IF NOT EXISTS public.books (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    registration_number TEXT UNIQUE,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    isbn TEXT,
    category TEXT DEFAULT 'General',
    publisher TEXT,
    edition TEXT,
    total_copies INT NOT NULL DEFAULT 1 CHECK (total_copies >= 0),
    available_copies INT NOT NULL DEFAULT 1 CHECK (available_copies >= 0),
    status TEXT NOT NULL DEFAULT 'available' CHECK (status IN ('available', 'checked_out', 'lost', 'damaged', 'retired')),
    shelf_location TEXT,
    cover_url TEXT,
    added_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Create Registration Log Table (Backlog / Audit Log)
CREATE TABLE IF NOT EXISTS public.registration_log (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    book_id UUID REFERENCES public.books(id) ON DELETE CASCADE,
    action TEXT NOT NULL CHECK (action IN ('registered', 'updated', 'status_changed', 'retired')),
    details JSONB,
    performed_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexing for performance
CREATE INDEX IF NOT EXISTS idx_books_registration_number ON public.books(registration_number);
CREATE INDEX IF NOT EXISTS idx_books_category ON public.books(category);
CREATE INDEX IF NOT EXISTS idx_books_status ON public.books(status);
CREATE INDEX IF NOT EXISTS idx_books_title_author ON public.books(title, author);
CREATE INDEX IF NOT EXISTS idx_registration_log_book_id ON public.registration_log(book_id);
CREATE INDEX IF NOT EXISTS idx_registration_log_created_at ON public.registration_log(created_at DESC);

-- ============================================================================
-- DB TRIGGERS & FUNCTIONS
-- ============================================================================

-- Function 1: Auto-generate Registration Number (Format: LIB-YYYY-XXXXXX)
CREATE OR REPLACE FUNCTION public.generate_registration_number()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.registration_number IS NULL OR NEW.registration_number = '' THEN
        NEW.registration_number := 'LIB-' || to_char(CURRENT_DATE, 'YYYY') || '-' || lpad(nextval('public.book_reg_seq')::text, 6, '0');
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_generate_registration_number ON public.books;
CREATE TRIGGER trg_generate_registration_number
    BEFORE INSERT ON public.books
    FOR EACH ROW
    EXECUTE FUNCTION public.generate_registration_number();

-- Function 2: Auto-update updated_at timestamp on books
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at := NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_books_updated_at ON public.books;
CREATE TRIGGER trg_books_updated_at
    BEFORE UPDATE ON public.books
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Function 3: Automatic Logging into registration_log whenever a book is inserted or updated
CREATE OR REPLACE FUNCTION public.log_book_activity()
RETURNS TRIGGER AS $$
DECLARE
    log_action TEXT;
    details_json JSONB;
    current_user_id UUID;
BEGIN
    -- Extract active user from context if available
    current_user_id := auth.uid();

    IF (TG_OP = 'INSERT') THEN
        log_action := 'registered';
        details_json := jsonb_build_object(
            'registration_number', NEW.registration_number,
            'title', NEW.title,
            'author', NEW.author,
            'category', NEW.category,
            'total_copies', NEW.total_copies,
            'shelf_location', NEW.shelf_location,
            'status', NEW.status
        );
        INSERT INTO public.registration_log (book_id, action, details, performed_by)
        VALUES (NEW.id, log_action, details_json, COALESCE(NEW.added_by, current_user_id));

    ELSIF (TG_OP = 'UPDATE') THEN
        IF (OLD.status IS DISTINCT FROM NEW.status) THEN
            IF NEW.status = 'retired' THEN
                log_action := 'retired';
            ELSE
                log_action := 'status_changed';
            END IF;
        ELSE
            log_action := 'updated';
        END IF;

        details_json := jsonb_build_object(
            'old_status', OLD.status,
            'new_status', NEW.status,
            'old_available_copies', OLD.available_copies,
            'new_available_copies', NEW.available_copies,
            'title', NEW.title,
            'changes', jsonb_strip_nulls(jsonb_build_object(
                'title', CASE WHEN OLD.title IS DISTINCT FROM NEW.title THEN NEW.title ELSE NULL END,
                'author', CASE WHEN OLD.author IS DISTINCT FROM NEW.author THEN NEW.author ELSE NULL END,
                'category', CASE WHEN OLD.category IS DISTINCT FROM NEW.category THEN NEW.category ELSE NULL END,
                'shelf_location', CASE WHEN OLD.shelf_location IS DISTINCT FROM NEW.shelf_location THEN NEW.shelf_location ELSE NULL END
            ))
        );

        INSERT INTO public.registration_log (book_id, action, details, performed_by)
        VALUES (NEW.id, log_action, details_json, current_user_id);
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS trg_log_book_activity ON public.books;
CREATE TRIGGER trg_log_book_activity
    AFTER INSERT OR UPDATE ON public.books
    FOR EACH ROW
    EXECUTE FUNCTION public.log_book_activity();

-- Function 4: Auto-create profile on auth.users sign up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, full_name, role)
    VALUES (
        NEW.id,
        COALESCE(NEW.raw_user_meta_data->>'full_name', 'Library Administrator'),
        'admin'
    )
    ON CONFLICT (id) DO NOTHING;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS trg_on_auth_user_created ON auth.users;
CREATE TRIGGER trg_on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_new_user();

-- ============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.books ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.registration_log ENABLE ROW LEVEL SECURITY;

-- Profiles Policies
CREATE POLICY "Public profile read" ON public.profiles
    FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

-- Books Policies
-- 1. Anyone (public/students/teachers) can view the book catalog
CREATE POLICY "Public catalog SELECT access" ON public.books
    FOR SELECT USING (true);

-- 2. Only authenticated admins/librarians can INSERT books
CREATE POLICY "Admins can INSERT books" ON public.books
    FOR INSERT WITH CHECK (
        auth.role() = 'authenticated'
    );

-- 3. Only authenticated admins/librarians can UPDATE books
CREATE POLICY "Admins can UPDATE books" ON public.books
    FOR UPDATE USING (
        auth.role() = 'authenticated'
    );

-- 4. Only authenticated admins/librarians can DELETE books
CREATE POLICY "Admins can DELETE books" ON public.books
    FOR DELETE USING (
        auth.role() = 'authenticated'
    );

-- Registration Log Policies
-- 1. Only authenticated admins can SELECT activity logs
CREATE POLICY "Admins can SELECT registration_log" ON public.registration_log
    FOR SELECT USING (
        auth.role() = 'authenticated'
    );

-- 2. Allow system / triggers and authenticated users to INSERT logs
CREATE POLICY "Admins and triggers can INSERT registration_log" ON public.registration_log
    FOR INSERT WITH CHECK (
        auth.role() = 'authenticated' OR auth.role() = 'service_role'
    );
