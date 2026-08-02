import { createBrowserClient } from '@supabase/ssr';
import { Book, RegistrationLog, BookStatus, BorrowRecord } from '../types';
import { INITIAL_BOOKS, INITIAL_LOGS, INITIAL_BORROWS } from '../mockData';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = () => {
  return (
    supabaseUrl !== '' &&
    supabaseAnonKey !== '' &&
    !supabaseUrl.includes('demo-school-library') &&
    !supabaseUrl.includes('your-supabase-project')
  );
};

export const createClient = () => {
  return createBrowserClient(
    supabaseUrl || 'https://placeholder.supabase.co',
    supabaseAnonKey || 'placeholder-anon-key'
  );
};

// ============================================================================
// Hybrid Data Access Layer (Supabase with LocalStorage Fallback)
// ============================================================================

const LOCAL_BOOKS_KEY = 'school_lib_books_v6_all553';
const LOCAL_LOGS_KEY = 'school_lib_logs_v6_all553';
const LOCAL_BORROWS_KEY = 'school_lib_borrows_v6_all553';

const getStoredBooks = (): Book[] => {
  if (typeof window === 'undefined') return INITIAL_BOOKS;
  const data = localStorage.getItem(LOCAL_BOOKS_KEY);
  if (!data) {
    localStorage.setItem(LOCAL_BOOKS_KEY, JSON.stringify(INITIAL_BOOKS));
    return INITIAL_BOOKS;
  }
  try {
    const parsed = JSON.parse(data);
    if (Array.isArray(parsed) && parsed.length > 0 && parsed.length < 500) {
      localStorage.setItem(LOCAL_BOOKS_KEY, JSON.stringify(INITIAL_BOOKS));
      return INITIAL_BOOKS;
    }
    return parsed;
  } catch {
    return INITIAL_BOOKS;
  }
};


const setStoredBooks = (books: Book[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(LOCAL_BOOKS_KEY, JSON.stringify(books));
  }
};

export const clearAllBookData = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(LOCAL_BOOKS_KEY);
    localStorage.removeItem(LOCAL_LOGS_KEY);
    localStorage.removeItem(LOCAL_BORROWS_KEY);
  }
};

const getStoredBorrows = (): BorrowRecord[] => {
  if (typeof window === 'undefined') return INITIAL_BORROWS;
  const data = localStorage.getItem(LOCAL_BORROWS_KEY);
  if (!data) {
    localStorage.setItem(LOCAL_BORROWS_KEY, JSON.stringify(INITIAL_BORROWS));
    return INITIAL_BORROWS;
  }
  try {
    return JSON.parse(data);
  } catch {
    return INITIAL_BORROWS;
  }
};

const setStoredBorrows = (borrows: BorrowRecord[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(LOCAL_BORROWS_KEY, JSON.stringify(borrows));
  }
};

const getStoredLogs = (): RegistrationLog[] => {
  if (typeof window === 'undefined') return INITIAL_LOGS;
  const data = localStorage.getItem(LOCAL_LOGS_KEY);
  if (!data) {
    localStorage.setItem(LOCAL_LOGS_KEY, JSON.stringify(INITIAL_LOGS));
    return INITIAL_LOGS;
  }
  try {
    return JSON.parse(data);
  } catch {
    return INITIAL_LOGS;
  }
};

const setStoredLogs = (logs: RegistrationLog[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(LOCAL_LOGS_KEY, JSON.stringify(logs));
  }
};

// Helper to auto-generate registration numbers locally (e.g. HM 316, HM 317...)
export const generateLocalRegistrationNumber = (booksList: Book[]): string => {
  const count = booksList.length + 1;
  return `HM ${count}`;
};


let memoryBooksCache: Book[] | null = null;
let memoryLogsCache: RegistrationLog[] | null = null;

export async function fetchBooks(): Promise<Book[]> {
  if (memoryBooksCache && memoryBooksCache.length > 0) {
    if (isSupabaseConfigured()) {
      Promise.resolve(
        createClient()
          .from('books')
          .select('*')
          .order('created_at', { ascending: false })
      )
        .then(({ data, error }) => {
          if (!error && data && data.length > 0) {
            memoryBooksCache = data as Book[];
            setStoredBooks(data as Book[]);
          }
        })
        .catch(() => {});
    }
    return memoryBooksCache;
  }

  const stored = getStoredBooks();
  memoryBooksCache = stored;

  if (isSupabaseConfigured()) {
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('books')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data && data.length > 0) {
        memoryBooksCache = data as Book[];
        setStoredBooks(data as Book[]);
        return data as Book[];
      }
    } catch (e) {
      console.warn('Falling back to local storage strategy:', e);
    }
  }
  return stored;
}

export async function fetchRegistrationLogs(): Promise<RegistrationLog[]> {
  if (memoryLogsCache && memoryLogsCache.length > 0) {
    if (isSupabaseConfigured()) {
      Promise.resolve(
        createClient()
          .from('registration_log')
          .select('*, book:books(title, registration_number, author)')
          .order('created_at', { ascending: false })
      )
        .then(({ data, error }) => {
          if (!error && data && data.length > 0) {
            memoryLogsCache = data as RegistrationLog[];
            setStoredLogs(data as RegistrationLog[]);
          }
        })
        .catch(() => {});
    }
    return memoryLogsCache;
  }

  const stored = getStoredLogs();
  memoryLogsCache = stored;

  if (isSupabaseConfigured()) {
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('registration_log')
        .select('*, book:books(title, registration_number, author)')
        .order('created_at', { ascending: false });

      if (!error && data && data.length > 0) {
        memoryLogsCache = data as RegistrationLog[];
        setStoredLogs(data as RegistrationLog[]);
        return data as RegistrationLog[];
      }
    } catch (e) {
      console.warn('Falling back to local storage strategy for logs:', e);
    }
  }
  return stored;
}

export async function fetchBorrowRecords(): Promise<BorrowRecord[]> {
  const borrows = getStoredBorrows();
  const now = new Date();

  // Dynamically compute status, days overdue, and impounded fines ($1.00/day after 7 days)
  const updatedBorrows: BorrowRecord[] = borrows.map((b) => {
    if (b.status === 'returned') return b;

    const dueDate = new Date(b.due_date);
    const diffMs = now.getTime() - dueDate.getTime();
    const overdueDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (overdueDays > 0) {
      const fine = overdueDays * 1.00; // $1 per overdue day
      return {
        ...b,
        status: 'overdue' as const,
        fine_amount: fine,
        fine_status: b.fine_status === 'paid' ? 'paid' : 'pending',
      };
    }
    return {
      ...b,
      status: 'active' as const,
      fine_amount: 0,
      fine_status: 'none',
    };
  });

  setStoredBorrows(updatedBorrows);
  return updatedBorrows;
}


export async function returnBorrowRecord(
  borrowId: string,
  condition: 'good' | 'damaged' | 'lost' = 'good'
): Promise<{ borrow: BorrowRecord; book: Book; log: RegistrationLog }> {
  const currentBorrows = getStoredBorrows();
  const currentBooks = getStoredBooks();
  const currentLogs = getStoredLogs();

  const borrowIndex = currentBorrows.findIndex((b) => b.id === borrowId);
  if (borrowIndex === -1) throw new Error('Borrow record not found');

  const targetBorrow = currentBorrows[borrowIndex];

  // Update borrow status to returned
  const updatedBorrow: BorrowRecord = {
    ...targetBorrow,
    status: 'returned',
    returned_at: new Date().toISOString(),
    fine_status: targetBorrow.fine_amount > 0 ? 'paid' : 'none',
  };

  currentBorrows[borrowIndex] = updatedBorrow;
  setStoredBorrows(currentBorrows);

  // Return copy to available pool for the book
  const bookIndex = currentBooks.findIndex((b) => b.id === targetBorrow.book_id);
  let updatedBook = currentBooks[0];

  if (bookIndex !== -1) {
    const oldBook = currentBooks[bookIndex];
    let newStatus: BookStatus = 'available';
    let newAvailable = oldBook.total_copies;

    if (condition === 'damaged') {
      newStatus = 'damaged';
      newAvailable = 0;
    } else if (condition === 'lost') {
      newStatus = 'lost';
      newAvailable = 0;
    }

    updatedBook = {
      ...oldBook,
      available_copies: newAvailable,
      status: newStatus,
      updated_at: new Date().toISOString(),
    };

    currentBooks[bookIndex] = updatedBook;
    setStoredBooks(currentBooks);
  }

  // Create backlog log
  const newLog: RegistrationLog = {
    id: `log-${Date.now()}`,
    book_id: targetBorrow.book_id,
    action: 'status_update',
    details: {
      action: 'admin_book_return',
      book_title: targetBorrow.book_title,
      registration_number: targetBorrow.registration_number,
      student_name: targetBorrow.student_name,
      student_id: targetBorrow.student_id,
      student_class: targetBorrow.student_class,
      condition,
      returned_at: new Date().toISOString(),
      performed_by: 'Chief Librarian (Admin)',
    },
    created_at: new Date().toISOString(),
  };

  const updatedLogs = [newLog, ...currentLogs];
  setStoredLogs(updatedLogs);

  return { borrow: updatedBorrow, book: updatedBook, log: newLog };
}


export async function payBorrowFine(borrowId: string): Promise<BorrowRecord> {
  const currentBorrows = getStoredBorrows();
  const index = currentBorrows.findIndex((b) => b.id === borrowId);
  if (index === -1) throw new Error('Borrow record not found');

  const updated: BorrowRecord = {
    ...currentBorrows[index],
    fine_status: 'paid',
  };

  currentBorrows[index] = updated;
  setStoredBorrows(currentBorrows);
  return updated;
}

export async function simulateOverdueRecord(): Promise<BorrowRecord> {
  const currentBorrows = getStoredBorrows();
  const currentBooks = getStoredBooks();

  const randomBook = currentBooks[Math.floor(Math.random() * currentBooks.length)];
  const DAY_MS = 24 * 60 * 60 * 1000;
  const daysAgo = Math.floor(Math.random() * 5) + 10; // 10 to 14 days ago
  const issuedAt = new Date(Date.now() - daysAgo * DAY_MS);
  const dueDate = new Date(issuedAt.getTime() + 7 * DAY_MS); // 7 days return due
  const overdueDays = daysAgo - 7;
  const fine = overdueDays * 1.00;

  const mockNames = ['Jordan Vance', 'Taylor Reed', 'Morgan Chase', 'Riley Cooper', 'Casey Skylar'];
  const name = mockNames[Math.floor(Math.random() * mockNames.length)];
  const stuId = `STU-2026-${Math.floor(Math.random() * 900 + 100)}`;

  const newBorrow: BorrowRecord = {
    id: `borrow-sim-${Date.now()}`,
    book_id: randomBook.id,
    book_title: randomBook.title,
    registration_number: randomBook.registration_number,
    author: randomBook.author,
    shelf_location: randomBook.shelf_location || 'General Stacks',
    student_id: stuId,
    student_name: name,
    student_class: 'Grade 11-Science',
    roll_number: `R-${Math.floor(Math.random() * 800 + 1000)}`,
    email: `${name.toLowerCase().replace(' ', '.')}@oakridge.edu`,
    issued_at: issuedAt.toISOString(),
    due_date: dueDate.toISOString(),
    returned_at: null,
    fine_amount: fine,
    fine_status: 'pending',
    status: 'overdue',
  };

  const updatedBorrows = [newBorrow, ...currentBorrows];
  setStoredBorrows(updatedBorrows);
  return newBorrow;
}

export async function registerNewBook(bookData: {
  title: string;
  author: string;
  isbn?: string;
  category: string;
  publisher?: string;
  edition?: string;
  total_copies: number;
  available_copies: number;
  shelf_location?: string;
  added_by?: string;
}): Promise<{ book: Book; log: RegistrationLog }> {
  if (isSupabaseConfigured()) {
    try {
      const supabase = createClient();
      const { data: newBook, error: insertError } = await supabase
        .from('books')
        .insert([bookData])
        .select()
        .single();

      if (!insertError && newBook) {
        const { data: logs } = await supabase
          .from('registration_log')
          .select('*, book:books(title, registration_number, author)')
          .eq('book_id', newBook.id)
          .order('created_at', { ascending: false })
          .limit(1);

        const createdLog = logs && logs[0] ? (logs[0] as RegistrationLog) : {
          id: `log-${Date.now()}`,
          book_id: newBook.id,
          action: 'registered' as const,
          details: newBook,
          created_at: new Date().toISOString(),
          book: {
            title: newBook.title,
            registration_number: newBook.registration_number,
            author: newBook.author,
          }
        };

        return { book: newBook as Book, log: createdLog };
      }
    } catch (e) {
      console.warn('Supabase insert failed, executing local operation fallback:', e);
    }
  }

  // Local Storage Fallback
  const currentBooks = getStoredBooks();
  const currentLogs = getStoredLogs();

  const regNum = generateLocalRegistrationNumber(currentBooks);
  const newBook: Book = {
    id: crypto.randomUUID(),
    registration_number: regNum,
    title: bookData.title,
    author: bookData.author,
    isbn: bookData.isbn || null,
    category: bookData.category,
    publisher: bookData.publisher || null,
    edition: bookData.edition || null,
    total_copies: Number(bookData.total_copies),
    available_copies: Number(bookData.available_copies),
    status: 'available',
    shelf_location: bookData.shelf_location || null,
    added_by: bookData.added_by || null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  const newLog: RegistrationLog = {
    id: crypto.randomUUID(),
    book_id: newBook.id,
    action: 'registered',
    details: {
      registration_number: newBook.registration_number,
      title: newBook.title,
      author: newBook.author,
      category: newBook.category,
      total_copies: newBook.total_copies,
      shelf_location: newBook.shelf_location || undefined,
      status: newBook.status
    },
    created_at: new Date().toISOString(),
    book: {
      title: newBook.title,
      registration_number: newBook.registration_number,
      author: newBook.author
    }
  };

  const updatedBooks = [newBook, ...currentBooks];
  const updatedLogs = [newLog, ...currentLogs];

  setStoredBooks(updatedBooks);
  setStoredLogs(updatedLogs);

  return { book: newBook, log: newLog };
}

export async function registerBookToStudent(payload: {
  bookId: string;
  studentName: string;
  studentId: string;
  studentClass: string;
  rollNumber?: string;
}): Promise<{ book: Book; log: RegistrationLog; borrow: BorrowRecord }> {
  const now = new Date();
  const DAY_MS = 24 * 60 * 60 * 1000;
  const dueDate = new Date(now.getTime() + 7 * DAY_MS); // 7 Days loan period

  if (isSupabaseConfigured()) {
    try {
      const supabase = createClient();
      const { data: current } = await supabase.from('books').select('*').eq('id', payload.bookId).single();
      if (current) {
        const newAvailable = Math.max(0, current.available_copies - 1);
        const newStatus = newAvailable === 0 ? 'checked_out' : current.status;

        const { data: updated, error } = await supabase
          .from('books')
          .update({
            available_copies: newAvailable,
            status: newStatus,
            updated_at: new Date().toISOString(),
          })
          .eq('id', payload.bookId)
          .select()
          .single();

        if (!error && updated) {
          const logPayload = {
            book_id: payload.bookId,
            action: 'student_registration',
            details: {
              student_id: payload.studentId,
              student_name: payload.studentName,
              student_class: payload.studentClass,
              roll_number: payload.rollNumber || 'N/A',
              registration_number: updated.registration_number,
              title: updated.title,
              author: updated.author,
              shelf_location: updated.shelf_location,
              registered_at: now.toISOString(),
              due_date: dueDate.toISOString(),
            }
          };

          const { data: newLog } = await supabase
            .from('registration_log')
            .insert([logPayload])
            .select('*, book:books(title, registration_number, author)')
            .single();

          // Save borrow record locally as well for 7-day tracking
          const currentBorrows = getStoredBorrows();
          const newBorrow: BorrowRecord = {
            id: `borrow-${Date.now()}`,
            book_id: updated.id,
            book_title: updated.title,
            registration_number: updated.registration_number,
            author: updated.author,
            shelf_location: updated.shelf_location || undefined,
            student_id: payload.studentId,
            student_name: payload.studentName,
            student_class: payload.studentClass,
            roll_number: payload.rollNumber || 'N/A',
            issued_at: now.toISOString(),
            due_date: dueDate.toISOString(),
            returned_at: null,
            fine_amount: 0,
            fine_status: 'none',
            status: 'active',
          };
          setStoredBorrows([newBorrow, ...currentBorrows]);

          return {
            book: updated as Book,
            log: (newLog as RegistrationLog) || {
              id: `log-${Date.now()}`,
              book_id: updated.id,
              action: 'student_registration',
              details: logPayload.details,
              created_at: now.toISOString(),
              book: { title: updated.title, registration_number: updated.registration_number, author: updated.author }
            },
            borrow: newBorrow,
          };
        }
      }
    } catch (e) {
      console.warn('Supabase student registration failed, executing fallback:', e);
    }
  }

  // Local Storage Fallback
  const currentBooks = getStoredBooks();
  const currentLogs = getStoredLogs();
  const currentBorrows = getStoredBorrows();

  const targetIndex = currentBooks.findIndex((b) => b.id === payload.bookId);
  if (targetIndex === -1) throw new Error('Book not found');

  const oldBook = currentBooks[targetIndex];
  const newAvailable = Math.max(0, oldBook.available_copies - 1);
  const newStatus = newAvailable === 0 ? 'checked_out' : oldBook.status;

  const updatedBook: Book = {
    ...oldBook,
    available_copies: newAvailable,
    status: newStatus,
    updated_at: now.toISOString(),
  };

  const newLog: RegistrationLog = {
    id: crypto.randomUUID(),
    book_id: updatedBook.id,
    action: 'student_registration',
    details: {
      student_id: payload.studentId,
      student_name: payload.studentName,
      student_class: payload.studentClass,
      roll_number: payload.rollNumber || 'N/A',
      registration_number: updatedBook.registration_number,
      title: updatedBook.title,
      author: updatedBook.author,
      shelf_location: updatedBook.shelf_location || undefined,
      registered_at: now.toISOString(),
      due_date: dueDate.toISOString(),
    },
    created_at: now.toISOString(),
    book: {
      title: updatedBook.title,
      registration_number: updatedBook.registration_number,
      author: updatedBook.author
    }
  };

  const newBorrow: BorrowRecord = {
    id: crypto.randomUUID(),
    book_id: updatedBook.id,
    book_title: updatedBook.title,
    registration_number: updatedBook.registration_number,
    author: updatedBook.author,
    shelf_location: updatedBook.shelf_location || undefined,
    student_id: payload.studentId,
    student_name: payload.studentName,
    student_class: payload.studentClass,
    roll_number: payload.rollNumber || 'N/A',
    issued_at: now.toISOString(),
    due_date: dueDate.toISOString(),
    returned_at: null,
    fine_amount: 0,
    fine_status: 'none',
    status: 'active',
  };

  const updatedBooks = [...currentBooks];
  updatedBooks[targetIndex] = updatedBook;
  const updatedLogs = [newLog, ...currentLogs];
  const updatedBorrows = [newBorrow, ...currentBorrows];

  setStoredBooks(updatedBooks);
  setStoredLogs(updatedLogs);
  setStoredBorrows(updatedBorrows);

  return { book: updatedBook, log: newLog, borrow: newBorrow };
}


export async function updateBookStatus(
  bookId: string,
  newStatus: BookStatus,
  availableCopiesDelta?: number
): Promise<{ book: Book; log: RegistrationLog }> {
  if (isSupabaseConfigured()) {
    try {
      const supabase = createClient();
      const { data: current } = await supabase.from('books').select('*').eq('id', bookId).single();
      if (current) {
        let newAvailable = current.available_copies;
        if (availableCopiesDelta !== undefined) {
          newAvailable = Math.max(0, Math.min(current.total_copies, current.available_copies + availableCopiesDelta));
        } else if (newStatus === 'checked_out') {
          newAvailable = Math.max(0, current.available_copies - 1);
        } else if (newStatus === 'available' && current.status === 'checked_out') {
          newAvailable = Math.min(current.total_copies, current.available_copies + 1);
        }

        const { data: updated, error } = await supabase
          .from('books')
          .update({
            status: newStatus,
            available_copies: newAvailable,
            updated_at: new Date().toISOString(),
          })
          .eq('id', bookId)
          .select()
          .single();

        if (!error && updated) {
          const { data: logs } = await supabase
            .from('registration_log')
            .select('*, book:books(title, registration_number, author)')
            .eq('book_id', bookId)
            .order('created_at', { ascending: false })
            .limit(1);

          return {
            book: updated as Book,
            log: logs && logs[0] ? (logs[0] as RegistrationLog) : {
              id: `log-${Date.now()}`,
              book_id: updated.id,
              action: newStatus === 'retired' ? 'retired' : 'status_changed',
              details: { old_status: current.status, new_status: newStatus },
              created_at: new Date().toISOString(),
              book: { title: updated.title, registration_number: updated.registration_number, author: updated.author }
            }
          };
        }
      }
    } catch (e) {
      console.warn('Supabase update status failed, executing fallback:', e);
    }
  }

  // Local Storage Fallback
  const currentBooks = getStoredBooks();
  const currentLogs = getStoredLogs();

  const targetIndex = currentBooks.findIndex((b) => b.id === bookId);
  if (targetIndex === -1) throw new Error('Book not found');

  const oldBook = currentBooks[targetIndex];
  let newAvailable = oldBook.available_copies;
  if (availableCopiesDelta !== undefined) {
    newAvailable = Math.max(0, Math.min(oldBook.total_copies, oldBook.available_copies + availableCopiesDelta));
  } else if (newStatus === 'checked_out') {
    newAvailable = Math.max(0, oldBook.available_copies - 1);
  } else if (newStatus === 'available' && oldBook.status === 'checked_out') {
    newAvailable = Math.min(oldBook.total_copies, oldBook.available_copies + 1);
  }

  const updatedBook: Book = {
    ...oldBook,
    status: newStatus,
    available_copies: newAvailable,
    updated_at: new Date().toISOString(),
  };

  const actionType = newStatus === 'retired' ? 'retired' : 'status_changed';
  const newLog: RegistrationLog = {
    id: crypto.randomUUID(),
    book_id: updatedBook.id,
    action: actionType,
    details: {
      old_status: oldBook.status,
      new_status: newStatus,
      old_available_copies: oldBook.available_copies,
      new_available_copies: newAvailable,
      title: updatedBook.title
    },
    created_at: new Date().toISOString(),
    book: {
      title: updatedBook.title,
      registration_number: updatedBook.registration_number,
      author: updatedBook.author
    }
  };

  const updatedBooks = [...currentBooks];
  updatedBooks[targetIndex] = updatedBook;
  const updatedLogs = [newLog, ...currentLogs];

  setStoredBooks(updatedBooks);
  setStoredLogs(updatedLogs);

  return { book: updatedBook, log: newLog };
}

export async function updateBookDetails(
  bookId: string,
  updatedFields: Partial<Book>
): Promise<{ book: Book; log: RegistrationLog }> {
  if (isSupabaseConfigured()) {
    try {
      const supabase = createClient();
      const { data: updated, error } = await supabase
        .from('books')
        .update({
          ...updatedFields,
          updated_at: new Date().toISOString(),
        })
        .eq('id', bookId)
        .select()
        .single();

      if (!error && updated) {
        const { data: logs } = await supabase
          .from('registration_log')
          .select('*, book:books(title, registration_number, author)')
          .eq('book_id', bookId)
          .order('created_at', { ascending: false })
          .limit(1);

        return {
          book: updated as Book,
          log: logs && logs[0] ? (logs[0] as RegistrationLog) : {
            id: `log-${Date.now()}`,
            book_id: updated.id,
            action: 'updated',
            details: updatedFields,
            created_at: new Date().toISOString(),
            book: { title: updated.title, registration_number: updated.registration_number, author: updated.author }
          }
        };
      }
    } catch (e) {
      console.warn('Supabase update book details failed, executing fallback:', e);
    }
  }

  // Local Storage Fallback
  const currentBooks = getStoredBooks();
  const currentLogs = getStoredLogs();

  const targetIndex = currentBooks.findIndex((b) => b.id === bookId);
  if (targetIndex === -1) throw new Error('Book not found');

  const oldBook = currentBooks[targetIndex];
  const updatedBook: Book = {
    ...oldBook,
    ...updatedFields,
    updated_at: new Date().toISOString(),
  };

  const newLog: RegistrationLog = {
    id: crypto.randomUUID(),
    book_id: updatedBook.id,
    action: 'updated',
    details: {
      updated_fields: updatedFields,
      title: updatedBook.title
    },
    created_at: new Date().toISOString(),
    book: {
      title: updatedBook.title,
      registration_number: updatedBook.registration_number,
      author: updatedBook.author
    }
  };

  const updatedBooks = [...currentBooks];
  updatedBooks[targetIndex] = updatedBook;
  const updatedLogs = [newLog, ...currentLogs];

  setStoredBooks(updatedBooks);
  setStoredLogs(updatedLogs);

  return { book: updatedBook, log: newLog };
}
