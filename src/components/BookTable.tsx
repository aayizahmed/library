'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Edit3, ArrowUpDown, ChevronLeft, ChevronRight, CheckCircle2, Clock, AlertTriangle, XCircle, RotateCcw, Power } from 'lucide-react';
import { Book, BookStatus, RegistrationLog } from '@/lib/types';
import { updateBookStatus } from '@/lib/supabase/client';
import { useToast } from '@/context/ToastContext';

interface BookTableProps {
  books: Book[];
  onEditBook: (book: Book) => void;
  onBookUpdated: (updatedBook: Book, newLog: RegistrationLog) => void;
}

export function BookTable({ books, onEditBook, onBookUpdated }: BookTableProps) {
  const { showToast } = useToast();
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [sortField, setSortField] = useState<'title' | 'registration_number' | 'created_at'>('created_at');
  const [sortAsc, setSortAsc] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Filter & Sort Logic
  const filteredBooks = useMemo(() => {
    return books
      .filter((book) => {
        const matchesSearch =
          book.title.toLowerCase().includes(search.toLowerCase()) ||
          book.author.toLowerCase().includes(search.toLowerCase()) ||
          book.registration_number.toLowerCase().includes(search.toLowerCase()) ||
          (book.isbn && book.isbn.toLowerCase().includes(search.toLowerCase()));

        const matchesCategory =
          categoryFilter === 'ALL' ||
          book.category === categoryFilter ||
          (categoryFilter === 'Fiction' && (book.category === 'Fiction' || !!book.description?.includes('Genre: Fiction'))) ||
          (categoryFilter === 'Non-Fiction' && (book.category === 'Non-Fiction' || !!book.description?.includes('Genre: Non-Fiction')));
        const matchesStatus = statusFilter === 'ALL' || book.status === statusFilter;

        return matchesSearch && matchesCategory && matchesStatus;
      })
      .sort((a, b) => {
        let valA = a[sortField] || '';
        let valB = b[sortField] || '';
        if (typeof valA === 'string') valA = valA.toLowerCase();
        if (typeof valB === 'string') valB = valB.toLowerCase();

        if (valA < valB) return sortAsc ? -1 : 1;
        if (valA > valB) return sortAsc ? 1 : -1;
        return 0;
      });
  }, [books, search, categoryFilter, statusFilter, sortField, sortAsc]);

  // Pagination
  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage) || 1;
  const paginatedBooks = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredBooks.slice(start, start + itemsPerPage);
  }, [filteredBooks, currentPage]);

  const categories = Array.from(new Set(books.map((b) => b.category)));

  const handleQuickStatusToggle = async (book: Book, targetStatus: BookStatus) => {
    try {
      const result = await updateBookStatus(book.id, targetStatus);
      showToast(
        'Status Updated',
        `${book.registration_number} status changed to ${targetStatus}`,
        'success'
      );
      onBookUpdated(result.book, result.log);
    } catch (e: any) {
      showToast('Error Updating Status', e.message || 'Failed', 'error');
    }
  };

  const getStatusBadge = (status: BookStatus) => {
    switch (status) {
      case 'available':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 className="w-3 h-3" /> Available
          </span>
        );
      case 'checked_out':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Clock className="w-3 h-3" /> Checked Out
          </span>
        );
      case 'damaged':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <AlertTriangle className="w-3 h-3" /> Damaged
          </span>
        );
      case 'lost':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-950 text-rose-400 border border-rose-800">
            <XCircle className="w-3 h-3" /> Lost
          </span>
        );
      case 'retired':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-800 text-slate-400 border border-slate-700">
            Retired
          </span>
        );
    }
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl">
      {/* Table Toolbar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search title, author, registration #..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5">
            <Filter className="w-3.5 h-3.5 text-amber-400" />
            <select
              value={categoryFilter}
              onChange={(e) => {
                setCategoryFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-transparent text-xs text-slate-300 focus:outline-none cursor-pointer"
            >
              <option value="ALL">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat} className="bg-slate-900">
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5">
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-transparent text-xs text-slate-300 focus:outline-none cursor-pointer"
            >
              <option value="ALL">All Statuses</option>
              <option value="available" className="bg-slate-900">Available</option>
              <option value="checked_out" className="bg-slate-900">Checked Out</option>
              <option value="damaged" className="bg-slate-900">Damaged</option>
              <option value="lost" className="bg-slate-900">Lost</option>
              <option value="retired" className="bg-slate-900">Retired</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800/80">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="bg-slate-950 text-slate-400 uppercase font-semibold text-[11px] border-b border-slate-800">
            <tr>
              <th className="px-4 py-3.5">
                <button
                  onClick={() => {
                    setSortField('registration_number');
                    setSortAsc(!sortAsc);
                  }}
                  className="flex items-center gap-1 hover:text-amber-400 transition-colors"
                >
                  Reg # <ArrowUpDown className="w-3 h-3" />
                </button>
              </th>
              <th className="px-4 py-3.5">
                <button
                  onClick={() => {
                    setSortField('title');
                    setSortAsc(!sortAsc);
                  }}
                  className="flex items-center gap-1 hover:text-amber-400 transition-colors"
                >
                  Book Info <ArrowUpDown className="w-3 h-3" />
                </button>
              </th>
              <th className="px-4 py-3.5">Category</th>
              <th className="px-4 py-3.5">Status</th>
              <th className="px-4 py-3.5">Inventory</th>
              <th className="px-4 py-3.5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            <AnimatePresence>
              {paginatedBooks.length > 0 ? (
                paginatedBooks.map((book) => (
                  <motion.tr
                    key={book.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="hover:bg-slate-800/50 transition-colors group"
                  >
                    <td className="px-4 py-3.5 font-mono text-amber-400 font-bold whitespace-nowrap">
                      {book.registration_number}
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="font-semibold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                        {book.title}
                      </div>
                      <div className="text-[11px] text-slate-400">by {book.author}</div>
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">
                        {book.category}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap">{getStatusBadge(book.status)}</td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <span className={book.available_copies > 0 ? 'text-emerald-400 font-semibold' : 'text-rose-400 font-semibold'}>
                        {book.available_copies > 0 ? '1 Copy' : '0 Copies'}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => onEditBook(book)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-colors"
                          title="Edit Book"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>

                        {book.status === 'available' ? (
                          <button
                            onClick={() => handleQuickStatusToggle(book, 'checked_out')}
                            className="px-2 py-1 rounded-lg text-[11px] font-semibold bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 border border-amber-500/20 transition-colors"
                          >
                            Check Out
                          </button>
                        ) : (
                          <button
                            onClick={() => handleQuickStatusToggle(book, 'available')}
                            className="px-2 py-1 rounded-lg text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/20 transition-colors"
                          >
                            Return
                          </button>
                        )}

                        {book.status !== 'retired' && (
                          <button
                            onClick={() => handleQuickStatusToggle(book, 'retired')}
                            className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                            title="Retire Book"
                          >
                            <Power className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-slate-400">
                    No books matched your criteria.
                  </td>
                </tr>
              )}
            </AnimatePresence>
          </tbody>
        </table>
      </div>


      {/* Pagination Footer */}
      <div className="flex items-center justify-between mt-5 text-xs text-slate-400">
        <div>
          Showing {filteredBooks.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} to{' '}
          {Math.min(currentPage * itemsPerPage, filteredBooks.length)} of {filteredBooks.length} records
        </div>
        <div className="flex items-center gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="p-2 rounded-xl bg-slate-950 border border-slate-800 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-semibold text-slate-200">
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="p-2 rounded-xl bg-slate-950 border border-slate-800 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
