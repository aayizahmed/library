'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, Filter, BookOpen, Layers, QrCode, UserCheck, RefreshCw, GraduationCap, LogOut, ChevronLeft, ChevronRight, Hash } from 'lucide-react';

import { HillsinaiNavbar } from '@/components/HillsinaiNavbar';
import { HillsinaiHero } from '@/components/HillsinaiHero';
import { HillsinaiFeatureBar } from '@/components/HillsinaiFeatureBar';
import { HillsinaiAboutSection } from '@/components/HillsinaiAboutSection';
import { HillsinaiFooter } from '@/components/HillsinaiFooter';

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

const REG_RANGES = [
  { label: 'All IDs', value: 'ALL' },
  { label: 'HM 01 - 50', value: 'HM-1-50' },
  { label: 'HM 51 - 100', value: 'HM-51-100' },
  { label: 'HM 101 - 200', value: 'HM-101-200' },
  { label: 'HM 201 - 315', value: 'HM-201-315' },
  { label: 'HE 001 - 100', value: 'HE-1-100' },
  { label: 'HE 101 - 238', value: 'HE-101-238' },
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
          const isHM = book.registration_number.startsWith('HM');
          const isHE = book.registration_number.startsWith('HE');
          const digits = book.registration_number.replace(/\D/g, '');
          if (digits) {
            const val = parseInt(digits, 10);
            if (selectedRange === 'HM-1-50') matchesRange = isHM && val >= 1 && val <= 50;
            else if (selectedRange === 'HM-51-100') matchesRange = isHM && val >= 51 && val <= 100;
            else if (selectedRange === 'HM-101-200') matchesRange = isHM && val >= 101 && val <= 200;
            else if (selectedRange === 'HM-201-315') matchesRange = isHM && val >= 201 && val <= 315;
            else if (selectedRange === 'HE-1-100') matchesRange = isHE && val >= 1 && val <= 100;
            else if (selectedRange === 'HE-101-238') matchesRange = isHE && val >= 101 && val <= 238;
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
    <div className="min-h-screen flex flex-col bg-[#F9F6F0]">
      {/* Hillsinai Custom Navbar matching Screenshot */}
      <HillsinaiNavbar />

      {/* Hillsinai Custom Hero Banner matching Screenshot */}
      <HillsinaiHero />

      {/* Hillsinai 4 Pillars Feature Bar matching Screenshot */}
      <HillsinaiFeatureBar />

      {/* Hillsinai About Section */}
      <HillsinaiAboutSection />

      {/* Main Library Catalog Section */}
      <main id="catalog" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2D5C3] text-[#8A6539] text-xs font-sans-hillsinai font-bold border border-[#D4C4B0] mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Physical Acquisitions Catalog
          </div>
          <h2 className="font-serif-hillsinai text-3xl sm:text-5xl font-bold text-[#2B1D15] tracking-tight">
            Search Our Complete Collection
          </h2>
          <p className="font-sans-hillsinai text-xs sm:text-sm text-[#6E5A4C] mt-2">
            Explore 550+ physical book acquisitions (English HE001-HE238 &amp; Malayalam HM 01-HM 315). Check shelf locations, copy status, and log registrations.
          </p>
        </div>

        {/* Student Check-In Banner Bar */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-[#2A1D17] text-white border border-[#453228] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          {student ? (
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold shadow-inner">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-sm">{student.name}</span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    <GraduationCap className="w-3 h-3" /> {student.studentClass}
                  </span>
                </div>
                <p className="text-xs text-amber-200/70 font-mono mt-0.5">
                  ID: <span className="text-emerald-400 font-semibold">{student.studentId}</span> • Student Checked In
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#3D2B22] border border-[#523C30] text-amber-300 flex items-center justify-center font-bold">
                <QrCode className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-amber-100 text-sm">Student Identification Check-In</h3>
                <p className="text-xs text-amber-200/70">Scan card QR or enter Name &amp; Class to register book loans.</p>
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            {student ? (
              <>
                <button
                  onClick={() => setIsStudentModalOpen(true)}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#3D2B22] hover:bg-[#4D3A2F] text-amber-100 border border-[#523C30] transition-colors"
                >
                  Switch Student
                </button>
                <button
                  onClick={handleClearStudent}
                  className="p-2 rounded-xl text-amber-200/70 hover:text-rose-400 hover:bg-rose-950/40 transition-colors"
                  title="Clear Check-In"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsStudentModalOpen(true)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#967144] hover:bg-[#805D34] text-white shadow-lg transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <QrCode className="w-4 h-4" /> Scan QR / Check-In Student
              </button>
            )}
          </div>
        </div>

        {/* Search Bar Container */}
        <div className="relative max-w-3xl mx-auto mb-8">
          <Search className="w-5 h-5 text-[#8A6539] absolute left-4 top-4 pointer-events-none" />
          <input
            type="text"
            placeholder="Search by title, author, reg # (e.g. HE001, HM 01, HM 160), or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-[#D8C6B0] text-sm sm:text-base text-[#2B1D15] placeholder-[#8A786A] focus:outline-none focus:border-[#8A6539] focus:ring-2 focus:ring-[#8A6539]/20 shadow-md transition-all font-sans-hillsinai"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3.5 top-3.5 text-xs text-[#6E5A4C] hover:text-[#2B1D15] px-2 py-1 bg-[#EFE8DC] rounded-lg"
            >
              Clear
            </button>
          )}
        </div>

        {/* Quick Range Jump Bar */}
        <div className="mb-6 p-4 rounded-2xl bg-white border border-[#E2D5C3] shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Hash className="w-4 h-4 text-[#8A6539]" />
            <span className="text-xs font-bold text-[#2B1D15] uppercase tracking-wider font-sans-hillsinai">Quick Reg # Range Jump:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {REG_RANGES.map((r) => (
              <button
                key={r.value}
                onClick={() => setSelectedRange(r.value)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all font-sans-hillsinai ${
                  selectedRange === r.value
                    ? 'bg-[#8A6539] text-white font-bold shadow-md'
                    : 'bg-[#F4EDE2] hover:bg-[#E8DCCB] text-[#4E3D32] border border-[#D8C6B0]'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-[#E2D5C3]">
          {/* Category Pill Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
            <span className="text-xs font-semibold text-[#6E5A4C] uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1 font-sans-hillsinai">
              <Layers className="w-3.5 h-3.5 text-[#8A6539]" /> Categories:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all font-sans-hillsinai ${
                  selectedCategory === cat
                    ? 'bg-[#8A6539] text-white font-bold shadow-md'
                    : 'bg-white hover:bg-[#F4EDE2] text-[#4E3D32] border border-[#D8C6B0]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Status Filter, Sort & Display Count */}
          <div className="flex flex-wrap items-center gap-3 font-sans-hillsinai">
            <div className="flex items-center gap-1.5 bg-white border border-[#D8C6B0] rounded-xl px-3 py-1.5">
              <Filter className="w-3.5 h-3.5 text-[#8A6539]" />
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="bg-transparent text-xs text-[#2B1D15] focus:outline-none cursor-pointer font-medium"
              >
                <option value="ALL">All Statuses</option>
                <option value="available">Available</option>
                <option value="checked_out">Checked Out</option>
                <option value="damaged">Damaged</option>
                <option value="lost">Lost</option>
              </select>
            </div>

            <div className="flex items-center gap-1.5 bg-white border border-[#D8C6B0] rounded-xl px-3 py-1.5">
              <span className="text-xs text-[#6E5A4C] font-medium">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-xs text-[#2B1D15] focus:outline-none cursor-pointer font-medium"
              >
                <option value="registration_number">Reg # (HE/HM Sequence)</option>
                <option value="title">Title (A-Z)</option>
                <option value="author">Author (A-Z)</option>
                <option value="created_at">Newest First</option>
              </select>
            </div>

            <div className="flex items-center gap-1.5 bg-white border border-[#D8C6B0] rounded-xl px-3 py-1.5">
              <span className="text-xs text-[#6E5A4C] font-medium">Show:</span>
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="bg-transparent text-xs text-[#2B1D15] focus:outline-none cursor-pointer font-medium"
              >
                <option value={24}>24 / page</option>
                <option value={48}>48 / page</option>
                <option value={96}>96 / page</option>
                <option value={-1}>All ({filteredBooks.length})</option>
              </select>
            </div>

            <button
              onClick={loadCatalog}
              className="p-2 rounded-xl bg-white hover:bg-[#F4EDE2] text-[#6E5A4C] hover:text-[#8A6539] border border-[#D8C6B0] transition-colors"
              title="Refresh Catalog"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Results Header Count */}
        <div className="flex items-center justify-between mb-6 font-sans-hillsinai">
          <p className="text-xs font-medium text-[#6E5A4C]">
            Showing <span className="text-[#8A6539] font-bold">{paginatedBooks.length}</span> of <span className="text-[#2B1D15] font-bold">{filteredBooks.length}</span> matching acquisitions
          </p>

          {totalPages > 1 && itemsPerPage > 0 && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-1.5 rounded-lg bg-white border border-[#D8C6B0] text-[#2B1D15] hover:text-[#8A6539] disabled:opacity-40 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-semibold text-[#2B1D15] font-mono">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-1.5 rounded-lg bg-white border border-[#D8C6B0] text-[#2B1D15] hover:text-[#8A6539] disabled:opacity-40 transition-colors"
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
              <div key={n} className="bg-white rounded-2xl p-5 border border-[#E2D5C3] flex flex-col justify-between h-72">
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
              <div className="flex items-center justify-center gap-3 pt-8 border-t border-[#E2D5C3] font-sans-hillsinai">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-xl bg-white border border-[#D8C6B0] text-xs font-semibold text-[#2B1D15] hover:text-[#8A6539] disabled:opacity-40 transition-colors flex items-center gap-1 shadow-sm"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>

                <div className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white rounded-xl border border-[#D8C6B0] text-xs text-[#5D4A3E] font-mono shadow-sm">
                  <span>Page <strong className="text-[#8A6539]">{currentPage}</strong> of <strong className="text-[#2B1D15]">{totalPages}</strong></span>
                </div>

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-xl bg-white border border-[#D8C6B0] text-xs font-semibold text-[#2B1D15] hover:text-[#8A6539] disabled:opacity-40 transition-colors flex items-center gap-1 shadow-sm"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="bg-white border border-[#E2D5C3] rounded-3xl p-12 text-center max-w-lg mx-auto my-12 shadow-sm font-sans-hillsinai">
            <BookOpen className="w-12 h-12 text-[#8A786A] mx-auto mb-4" />
            <h3 className="text-lg font-bold text-[#2B1D15] mb-2 font-serif-hillsinai">No Matching Books Found</h3>
            <p className="text-xs text-[#6E5A4C] mb-6">
              We couldn't find any books matching your search filters. Try adjusting your query or resetting filters.
            </p>
            <button
              onClick={() => {
                setSearch('');
                setSelectedCategory('ALL');
                setSelectedStatus('ALL');
                setSelectedRange('ALL');
              }}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#8A6539] text-white hover:bg-[#775830] transition-colors shadow-md"
            >
              Reset All Filters
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

      {/* Hillsinai Custom Footer */}
      <HillsinaiFooter />
    </div>
  );
}
