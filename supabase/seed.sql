-- ============================================================================
-- School Library Book Registration System - Seed Data Script
-- Clean script ready for real library acquisitions
-- ============================================================================

-- Reset sequence to 1
SELECT setval('public.book_reg_seq', 1, false);

-- Clear existing data
TRUNCATE TABLE public.registration_log CASCADE;
TRUNCATE TABLE public.books CASCADE;

-- Insert real books here once provided
-- INSERT INTO public.books (title, author, category, isbn, total_copies, available_copies, shelf_location, publisher, edition)
-- VALUES ...
