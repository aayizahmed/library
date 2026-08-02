export type BookStatus = 'available' | 'checked_out' | 'lost' | 'damaged' | 'retired';

export type BookCategory = 
  | 'Fiction' 
  | 'Science' 
  | 'Technology' 
  | 'Mathematics' 
  | 'History' 
  | 'Reference' 
  | 'Literature' 
  | 'Arts' 
  | 'General';

export interface Review {
  id: string;
  reviewer_name: string;
  rating: number;
  comment: string;
  created_at: string;
}

export interface Book {
  id: string;
  registration_number: string;
  title: string;
  author: string;
  isbn?: string | null;
  category: string;
  publisher?: string | null;
  edition?: string | null;
  total_copies: number;
  available_copies: number;
  status: BookStatus;
  shelf_location?: string | null;
  cover_url?: string | null;
  description?: string | null;
  rating?: number;
  reviews?: Review[];
  added_by?: string | null;
  created_at: string;
  updated_at: string;
}

export type ActionType = 'registered' | 'updated' | 'status_changed' | 'retired' | 'student_registration' | 'status_update';

export interface RegistrationLog {
  id: string;
  book_id: string;
  action: ActionType;
  details: Record<string, any>;
  performed_by?: string | null;
  created_at: string;
  // Joined relation for display
  book?: {
    title: string;
    registration_number: string;
    author: string;
  } | null;
}

export interface Profile {
  id: string;
  full_name: string | null;
  role: 'admin' | 'librarian';
  created_at: string;
}

export interface BookFilters {
  search: string;
  category: string;
  status: string;
  sortBy: 'title' | 'author' | 'created_at' | 'available_copies';
  sortOrder: 'asc' | 'desc';
}

export type FineStatus = 'pending' | 'paid' | 'waived' | 'none';

export interface BorrowRecord {
  id: string;
  book_id: string;
  book_title: string;
  registration_number: string;
  author: string;
  shelf_location?: string;
  student_id: string;
  student_name: string;
  student_class: string;
  roll_number?: string;
  email?: string;
  issued_at: string;
  due_date: string; // Set to 7 days from issued_at
  returned_at?: string | null;
  fine_amount: number; // $1.00 per day after 7 days
  fine_status: FineStatus;
  status: 'active' | 'overdue' | 'returned';
}

