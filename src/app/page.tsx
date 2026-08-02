'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, Filter, BookOpen, Layers, QrCode, UserCheck, RefreshCw, GraduationCap, LogOut } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BookCard } from '@/components/BookCard';
import { BookDetailModal } from '@/components/BookDetailModal';
import { StudentIdentifyModal, StudentInfo } from '@/components/StudentIdentifyModal';
import { fetchBooks } from '@/lib/supabase/client';
import { Book } from '@/lib/types';
import { useToast } from '@/context/ToastContext';

const CATEGORIES = [
  'ALL',
  'Fiction',
  'Non-Fiction',
];


export default function PublicCatalogPage() {
  const { showToast } = useToast();
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  // Active student check-in state
  const [student, setStudent] = useState<StudentInfo | null>(null);
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  // Search & Filters
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [sortBy, setSortBy] = useState<'title' | 'author' | 'created_at'>('created_at');

  const loadCatalog = async () => {
    setLoading(true);
    try {
      const data = await fetchBooks();
      setBooks(data);
    } catch (err) {
      console.error('Error fetching catalog:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCatalog();

    // Check if student is saved in localStorage
    const saved = localStorage.getItem('school_lib_active_student');
    if (saved) {
      try {
        setStudent(JSON.parse(saved));
      } catch {
        // ignore
      }
    }
  }, []);

  const handleIdentifyStudent = (info: StudentInfo) => {
    setStudent(info);
    localStorage.setItem('school_lib_active_student', JSON.stringify(info));
    showToast(
      'Student Identified!',
      `Checked in as ${info.name} (${info.studentClass}) [${info.studentId}]`,
      'success'
    );
  };

  const handleClearStudent = () => {
    setStudent(null);
    localStorage.removeItem('school_lib_active_student');
    showToast('Student Logged Out', 'Cleared student check-in details.', 'info');
  };

  // Filtered & Sorted Catalog
  const filteredBooks = useMemo(() => {
    return books
      .filter((book) => {
        const matchesSearch =
          book.title.toLowerCase().includes(search.toLowerCase()) ||
          book.author.toLowerCase().includes(search.toLowerCase()) ||
          book.registration_number.toLowerCase().includes(search.toLowerCase()) ||
          (book.isbn && book.isbn.toLowerCase().includes(search.toLowerCase()));

        const matchesCategory = selectedCategory === 'ALL' || book.category === selectedCategory;
        const matchesStatus = selectedStatus === 'ALL' || book.status === selectedStatus;

        return matchesSearch && matchesCategory && matchesStatus;
      })
      .sort((a, b) => {
        let valA = a[sortBy] || '';
        let valB = b[sortBy] || '';
        if (typeof valA === 'string') valA = valA.toLowerCase();
        if (typeof valB === 'string') valB = valB.toLowerCase();
        if (valA < valB) return -1;
        if (valA > valB) return 1;
        return 0;
      });
  }, [books, search, selectedCategory, selectedStatus, sortBy]);

  return (
    <div className="min-h-screen flex flex-col bg-[#050814]">
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Student Check-In Banner Bar */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          {student ? (
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold shadow-inner">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-sm">{student.name}</span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <GraduationCap className="w-3 h-3" /> {student.studentClass}
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  ID: <span className="text-emerald-400 font-semibold">{student.studentId}</span> • Checked In
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold">
                <QrCode className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Identify Student for Borrowing</h3>
                <p className="text-xs text-slate-400">Scan student card QR or enter Name &amp; Class to request books.</p>
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            {student ? (
              <>
                <button
                  onClick={() => setIsStudentModalOpen(true)}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                >
                  Switch Student
                </button>
                <button
                  onClick={handleClearStudent}
                  className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                  title="Clear Check-In"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsStudentModalOpen(true)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <QrCode className="w-4 h-4" /> Scan QR / Enter Name &amp; Class
              </button>
            )}
          </div>
        </div>

        {/* Hero Banner */}
        <div className="relative rounded-3xl p-8 sm:p-12 mb-10 overflow-hidden bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/30 border border-slate-800 shadow-2xl">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold border border-amber-500/20 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Oakridge Public Library Catalog
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Explore Physical Books &amp; Digital Registrations
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Search our complete inventory of physical library acquisitions. Track shelf locations, availability, registration codes, and metadata in real-time.
            </p>

            {/* Front & Center Search Bar */}
            <div className="relative max-w-2xl">
              <Search className="w-5 h-5 text-amber-400 absolute left-4 top-3.5 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by title, author, category, ISBN, or registration # (e.g. LIB-2026-000101)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-950/90 border border-slate-700/80 text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 shadow-xl transition-all"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3.5 top-3.5 text-xs text-slate-400 hover:text-white px-2 py-1 bg-slate-800 rounded-lg"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-800/80">
          {/* Category Pill Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-amber-400" /> Categories:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Status Filter & Sort Dropdown */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Status Filter */}
            <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5">
              <Filter className="w-3.5 h-3.5 text-amber-400" />
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="bg-transparent text-xs text-slate-300 focus:outline-none cursor-pointer"
              >
                <option value="ALL" className="bg-slate-900">All Statuses</option>
                <option value="available" className="bg-slate-900">Available</option>
                <option value="checked_out" className="bg-slate-900">Checked Out</option>
                <option value="damaged" className="bg-slate-900">Damaged</option>
                <option value="lost" className="bg-slate-900">Lost</option>
              </select>
            </div>

            {/* Sort By */}
            <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5">
              <span className="text-xs text-slate-400 font-medium">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-xs text-slate-300 focus:outline-none cursor-pointer"
              >
                <option value="created_at" className="bg-slate-900">Newest First</option>
                <option value="title" className="bg-slate-900">Title (A-Z)</option>
                <option value="author" className="bg-slate-900">Author (A-Z)</option>
              </select>
            </div>

            <button
              onClick={loadCatalog}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-amber-400 border border-slate-800 transition-colors"
              title="Refresh Catalog"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Results Header Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs font-medium text-slate-400">
            Showing <span className="text-amber-400 font-bold">{filteredBooks.length}</span> physical books in catalog
          </p>
        </div>

        {/* Catalog Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div key={n} className="bg-slate-900 rounded-2xl p-5 border border-slate-800 flex flex-col justify-between h-72">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="w-20 h-5 skeleton rounded-lg" />
                    <div className="w-24 h-5 skeleton rounded-full" />
                  </div>
                  <div className="w-full h-28 skeleton rounded-xl mb-4" />
                  <div className="w-3/4 h-5 skeleton rounded mb-2" />
                  <div className="w-1/2 h-4 skeleton rounded" />
                </div>
                <div className="w-full h-5 skeleton rounded pt-3" />
              </div>
            ))}
          </div>
        ) : filteredBooks.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} onSelect={setSelectedBook} />
            ))}
          </motion.div>
        ) : (
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-12 text-center max-w-lg mx-auto my-12">
            <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">No Matching Books Found</h3>
            <p className="text-xs text-slate-400 mb-6">
              We couldn't find any books matching your search filters. Try adjusting your query or resetting category filters.
            </p>
            <button
              onClick={() => {
                setSearch('');
                setSelectedCategory('ALL');
                setSelectedStatus('ALL');
              }}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      {/* Student Check-In Modal */}
      <StudentIdentifyModal
        isOpen={isStudentModalOpen}
        onClose={() => setIsStudentModalOpen(false)}
        onIdentify={handleIdentifyStudent}
        currentStudent={student}
      />

      {/* Book Metadata & Borrowing Detail Modal */}
      <BookDetailModal
        book={selectedBook}
        onClose={() => setSelectedBook(null)}
        student={student}
        onOpenStudentModal={() => setIsStudentModalOpen(true)}
        onBookUpdated={(updated) => {
          setBooks((prev) => prev.map((b) => (b.id === updated.id ? updated : b)));
        }}
      />

      <Footer />
    </div>
  );
}
