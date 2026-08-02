'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, Filter, BookOpen, Layers, QrCode, UserCheck, RefreshCw, GraduationCap, LogOut, ChevronLeft, ChevronRight, Hash } from 'lucide-react';
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
  'Malayalam',
  'Fiction',
  'Non-Fiction',
];

const HM_RANGES = [
  { label: 'All IDs', value: 'ALL' },
  { label: 'HM 01 - 50', value: '1-50' },
  { label: 'HM 51 - 100', value: '51-100' },
  { label: 'HM 101 - 200', value: '101-200' },
  { label: 'HM 201 - 315', value: '201-315' },
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
  const [selectedRange, setSelectedRange] = useState<string>('ALL');
  const [sortBy, setSortBy] = useState<'title' | 'author' | 'registration_number' | 'created_at'>('registration_number');
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(24);

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

    const saved = localStorage.getItem('school_lib_active_student');
    if (saved) {
      try {
        setStudent(JSON.parse(saved));
      } catch {
        // ignore
      }
    }
  }, []);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedCategory, selectedStatus, selectedRange, sortBy, itemsPerPage]);

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

        const matchesCategory =
          selectedCategory === 'ALL' ||
          book.category === selectedCategory ||
          (selectedCategory === 'Fiction' && (book.category === 'Fiction' || !!book.description?.includes('Genre: Fiction'))) ||
          (selectedCategory === 'Non-Fiction' && (book.category === 'Non-Fiction' || !!book.description?.includes('Genre: Non-Fiction')));
        
        const matchesStatus = selectedStatus === 'ALL' || book.status === selectedStatus;

        let matchesRange = true;
        if (selectedRange !== 'ALL') {
          const digits = book.registration_number.replace(/\D/g, '');
          if (digits) {
            const val = parseInt(digits, 10);
            if (selectedRange === '1-50') matchesRange = val >= 1 && val <= 50;
            else if (selectedRange === '51-100') matchesRange = val >= 51 && val <= 100;
            else if (selectedRange === '101-200') matchesRange = val >= 101 && val <= 200;
            else if (selectedRange === '201-315') matchesRange = val >= 201 && val <= 315;
          }
        }

        return matchesSearch && matchesCategory && matchesStatus && matchesRange;
      })
      .sort((a, b) => {
        if (sortBy === 'registration_number') {
          const numA = parseInt(a.registration_number.replace(/\D/g, '') || '0', 10);
          const numB = parseInt(b.registration_number.replace(/\D/g, '') || '0', 10);
          return numA - numB;
        }
        let valA = a[sortBy] || '';
        let valB = b[sortBy] || '';
        if (typeof valA === 'string') valA = valA.toLowerCase();
        if (typeof valB === 'string') valB = valB.toLowerCase();
        if (valA < valB) return -1;
        if (valA > valB) return 1;
        return 0;
      });
  }, [books, search, selectedCategory, selectedStatus, selectedRange, sortBy]);

  // Pagination calculation
  const totalPages = itemsPerPage > 0 ? Math.ceil(filteredBooks.length / itemsPerPage) || 1 : 1;
  const paginatedBooks = useMemo(() => {
    if (itemsPerPage <= 0) return filteredBooks;
    const start = (currentPage - 1) * itemsPerPage;
    return filteredBooks.slice(start, start + itemsPerPage);
  }, [filteredBooks, currentPage, itemsPerPage]);

  return (
    <div className="min-h-screen flex flex-col bg-[#050814]">
      <Navbar />

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
              <Sparkles className="w-3.5 h-3.5" /> Oakridge Malayalam Library Catalog
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Explore 315+ Malayalam Books &amp; Literature
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Search our complete inventory of physical library acquisitions (HM 01 to HM 315). Track shelf locations, availability, registration codes, and metadata in real-time.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl">
              <Search className="w-5 h-5 text-amber-400 absolute left-4 top-3.5 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by title, author, reg # (e.g. HM 01, HM 160, HM 315), or category..."
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

        {/* Quick Range Jump Bar */}
        <div className="mb-6 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Hash className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">Quick Reg # Range Jump:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {HM_RANGES.map((r) => (
              <button
                key={r.value}
                onClick={() => setSelectedRange(r.value)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                  selectedRange === r.value
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
                }`}
              >
                {r.label}
              </button>
            ))}
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

          {/* Status Filter, Sort & Display Count */}
          <div className="flex flex-wrap items-center gap-3">
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

            <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5">
              <span className="text-xs text-slate-400 font-medium">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-xs text-slate-300 focus:outline-none cursor-pointer"
              >
                <option value="registration_number" className="bg-slate-900">Reg # (HM 01 - HM 315)</option>
                <option value="title" className="bg-slate-900">Title (A-Z)</option>
                <option value="author" className="bg-slate-900">Author (A-Z)</option>
                <option value="created_at" className="bg-slate-900">Newest First</option>
              </select>
            </div>

            <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5">
              <span className="text-xs text-slate-400 font-medium">Show:</span>
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="bg-transparent text-xs text-slate-300 focus:outline-none cursor-pointer"
              >
                <option value={24} className="bg-slate-900">24 / page</option>
                <option value={48} className="bg-slate-900">48 / page</option>
                <option value={96} className="bg-slate-900">96 / page</option>
                <option value={-1} className="bg-slate-900">All ({filteredBooks.length})</option>
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
            Showing <span className="text-amber-400 font-bold">{paginatedBooks.length}</span> of <span className="text-white font-bold">{filteredBooks.length}</span> matching books
          </p>

          {totalPages > 1 && itemsPerPage > 0 && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 disabled:opacity-40 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-semibold text-slate-300 font-mono">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 disabled:opacity-40 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
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
        ) : paginatedBooks.length > 0 ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8"
            >
              {paginatedBooks.map((book) => (
                <BookCard key={book.id} book={book} onSelect={setSelectedBook} />
              ))}
            </motion.div>

            {/* Pagination Controls Footer */}
            {totalPages > 1 && itemsPerPage > 0 && (
              <div className="flex items-center justify-center gap-3 pt-6 border-t border-slate-800">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-amber-400 disabled:opacity-40 transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>

                <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-400 font-mono">
                  <span>Page <strong className="text-amber-400">{currentPage}</strong> of <strong className="text-white">{totalPages}</strong></span>
                </div>

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-amber-400 disabled:opacity-40 transition-colors flex items-center gap-1"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
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
                setSelectedRange('ALL');
              }}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </main>

      <StudentIdentifyModal
        isOpen={isStudentModalOpen}
        onClose={() => setIsStudentModalOpen(false)}
        onIdentify={handleIdentifyStudent}
        currentStudent={student}
      />

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
