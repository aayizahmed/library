'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, PlusCircle, Book, Hash, Layers, MapPin, Barcode, Loader2 } from 'lucide-react';
import { registerNewBook } from '@/lib/supabase/client';
import { useToast } from '@/context/ToastContext';
import { Book as BookType, RegistrationLog } from '@/lib/types';

interface RegisterBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (newBook: BookType, newLog: RegistrationLog) => void;
}

const CATEGORIES = [
  'Malayalam',
  'Fiction',
  'Non-Fiction',
  'Science',
  'Technology',
  'Mathematics',
  'History',
  'Reference',
  'Literature',
  'Arts',
  'General',
];

export function RegisterBookModal({ isOpen, onClose, onSuccess }: RegisterBookModalProps) {
  const { showToast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    category: 'Fiction',
    publisher: '',
    edition: '1st Edition',
    total_copies: '1',
    available_copies: '1',
    shelf_location: '',
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.author.trim()) {
      showToast('Validation Error', 'Title and Author are required fields.', 'error');
      return;
    }

    const total = parseInt(formData.total_copies, 10) || 1;
    const available = parseInt(formData.available_copies, 10) || total;

    if (available > total) {
      showToast('Invalid Copy Count', 'Available copies cannot exceed total copies.', 'error');
      return;
    }

    setSubmitting(true);
    try {
      const result = await registerNewBook({
        title: formData.title.trim(),
        author: formData.author.trim(),
        isbn: formData.isbn.trim() || undefined,
        category: formData.category,
        publisher: formData.publisher.trim() || undefined,
        edition: formData.edition.trim() || undefined,
        total_copies: total,
        available_copies: available,
        shelf_location: formData.shelf_location.trim() || undefined,
      });

      showToast(
        'Book Registered Successfully!',
        `Assigned Registration Number: ${result.book.registration_number}`,
        'success'
      );
      onSuccess(result.book, result.log);
      onClose();
      // Reset form
      setFormData({
        title: '',
        author: '',
        isbn: '',
        category: 'Fiction',
        publisher: '',
        edition: '1st Edition',
        total_copies: '1',
        available_copies: '1',
        shelf_location: '',
      });
    } catch (err: any) {
      showToast('Registration Failed', err.message || 'Error inserting book into database', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 p-0.5 shadow-md shadow-amber-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-amber-400">
                  <PlusCircle className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  Register New Library Acquisition
                </h2>
                <p className="text-xs text-slate-400">Database triggers will auto-generate the unique registration ID.</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Registration Number Preview Banner */}
          <div className="my-5 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Registration Number Format:</span>
            </div>
            <span className="font-mono text-xs font-bold px-3 py-1 rounded-lg bg-amber-500/20 text-amber-200 border border-amber-500/40">
              LIB-{new Date().getFullYear()}-AUTO_GEN
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Title */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Book Title <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <Book className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. To Kill a Mockingbird"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                  />
                </div>
              </div>

              {/* Author */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Author <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Harper Lee"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* ISBN */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">ISBN Number</label>
                <div className="relative">
                  <Barcode className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    placeholder="978-0061120084"
                    value={formData.isbn}
                    onChange={(e) => setFormData({ ...formData, isbn: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors font-mono"
                  />
                </div>
              </div>

              {/* Publisher */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Publisher</label>
                <input
                  type="text"
                  placeholder="e.g. Penguin Classics"
                  value={formData.publisher}
                  onChange={(e) => setFormData({ ...formData, publisher: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                />
              </div>

              {/* Edition */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Edition</label>
                <input
                  type="text"
                  placeholder="e.g. 1st Edition"
                  value={formData.edition}
                  onChange={(e) => setFormData({ ...formData, edition: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                />
              </div>

              {/* Single Copy Policy Banner */}
              <div className="sm:col-span-2 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span>Copy Policy: <strong className="text-amber-400 font-semibold">Single Copy Acquisition (1 Copy)</strong></span>
                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">1 Copy</span>
              </div>
            </div>


            {/* Actions */}
            <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-800">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Registering...
                  </>
                ) : (
                  <>
                    <PlusCircle className="w-4 h-4" /> Register & Auto-Generate ID
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
