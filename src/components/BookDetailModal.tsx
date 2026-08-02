'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Book as BookIcon, MapPin, Hash, Barcode, Building2, Bookmark, Layers, Calendar, CheckCircle2, Clock, AlertTriangle, XCircle, UserCheck, QrCode, ArrowRight, Loader2, FileCheck, Star, MessageSquare, Plus } from 'lucide-react';
import { Book, BookStatus, Review } from '@/lib/types';
import { StudentInfo } from './StudentIdentifyModal';
import { registerBookToStudent } from '@/lib/supabase/client';
import { useToast } from '@/context/ToastContext';

interface BookDetailModalProps {
  book: Book | null;
  onClose: () => void;
  student: StudentInfo | null;
  onOpenStudentModal: () => void;
  onBookUpdated?: (updatedBook: Book) => void;
}

export function BookDetailModal({
  book,
  onClose,
  student,
  onOpenStudentModal,
  onBookUpdated,
}: BookDetailModalProps) {
  const { showToast } = useToast();
  const [registering, setRegistering] = useState(false);
  const [imgError, setImgError] = useState(false);

  // New review state
  const [newReviewer, setNewReviewer] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [showAddReview, setShowAddReview] = useState(false);

  if (!book) return null;

  const handleStudentBookRegister = async () => {
    if (!student) {
      onOpenStudentModal();
      return;
    }

    if (book.available_copies <= 0 || book.status !== 'available') {
      showToast('Book Unavailable', 'There are currently no available copies for registration.', 'error');
      return;
    }

    setRegistering(true);
    try {
      const result = await registerBookToStudent({
        bookId: book.id,
        studentName: student.name,
        studentId: student.studentId,
        studentClass: student.studentClass,
        rollNumber: student.rollNumber,
      });

      showToast(
        'Registration Logged to Backlog!',
        `Book ${book.registration_number} registered to student ${student.name} (${student.studentClass}) [${student.rollNumber}]`,
        'success'
      );

      if (onBookUpdated) {
        onBookUpdated(result.book);
      }
      onClose();
    } catch (e: any) {
      showToast('Registration Failed', e.message || 'Error processing student registration', 'error');
    } finally {
      setRegistering(false);
    }
  };

  const handleAddReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewer.trim() || !newComment.trim()) {
      showToast('Incomplete Review', 'Please enter your name and review comment.', 'error');
      return;
    }

    const createdRev: Review = {
      id: `rev-${Date.now()}`,
      reviewer_name: newReviewer.trim(),
      rating: newRating,
      comment: newComment.trim(),
      created_at: new Date().toISOString(),
    };

    const updatedReviews = [createdRev, ...(book.reviews || [])];
    const avgRating = Number(
      (updatedReviews.reduce((sum, r) => sum + r.rating, 0) / updatedReviews.length).toFixed(1)
    );

    const updatedBook: Book = {
      ...book,
      rating: avgRating,
      reviews: updatedReviews,
    };

    if (onBookUpdated) {
      onBookUpdated(updatedBook);
    }

    showToast('Review Submitted', 'Your review has been added to this book!', 'success');
    setNewReviewer('');
    setNewComment('');
    setShowAddReview(false);
  };

  const renderStatus = (status: BookStatus) => {
    switch (status) {
      case 'available':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-4 h-4" /> Available for Registration
          </span>
        );
      case 'checked_out':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <Clock className="w-4 h-4" /> Issued / Checked Out
          </span>
        );
      case 'damaged':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/30">
            <AlertTriangle className="w-4 h-4" /> Marked Damaged
          </span>
        );
      case 'lost':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-950 text-rose-400 border border-rose-800">
            <XCircle className="w-4 h-4" /> Missing / Lost
          </span>
        );
      case 'retired':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-400 border border-slate-700">
            Retired from Circulation
          </span>
        );
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Student Status Bar */}
          <div className="mb-6 p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
            {student ? (
              <div className="flex items-center gap-2 text-xs text-amber-300">
                <UserCheck className="w-4 h-4 text-emerald-400" />
                <span>
                  Registering for: <strong className="text-white">{student.name}</strong> ({student.studentClass}) [Roll: {student.rollNumber}]
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <QrCode className="w-4 h-4 text-amber-400" />
                <span>Select student profile (160 Roster / QR) to register this book to backlog</span>
              </div>
            )}

            <button
              onClick={onOpenStudentModal}
              className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1 shrink-0"
            >
              {student ? 'Switch Student' : 'Select Student'} <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Header Area */}
          <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
            <div className="w-32 h-44 rounded-2xl overflow-hidden border border-slate-800 shrink-0 relative bg-slate-950 shadow-lg">
              {book.cover_url && !imgError ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={book.cover_url}
                  alt={book.title}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-amber-500/20 via-amber-600/10 to-slate-800 flex flex-col items-center justify-center p-3 text-amber-400">
                  <BookIcon className="w-10 h-10 mb-2" />
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1">
                  <Hash className="w-3 h-3" /> {book.registration_number}
                </span>
                {renderStatus(book.status)}
              </div>

              <h2 className="text-2xl font-bold text-white tracking-tight leading-snug mb-1">
                {book.title}
              </h2>
              <p className="text-sm font-medium text-slate-400 mb-3">
                Author: <span className="text-slate-200">{book.author}</span>
              </p>

              {book.rating && (
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center text-amber-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= Math.round(book.rating || 0)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-700'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-amber-300">{book.rating.toFixed(1)}</span>
                  <span className="text-xs text-slate-500 font-medium">
                    ({book.reviews?.length || 0} reviews)
                  </span>
                </div>
              )}

              <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                {book.description || `Official catalog entry for "${book.title}" by ${book.author}.`}
              </p>
            </div>
          </div>

          {/* Detailed Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-amber-400">
                <Barcode className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">ISBN</p>
                <p className="text-sm font-mono text-slate-200">{book.isbn || 'Not specified'}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-amber-400">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Publisher</p>
                <p className="text-sm font-medium text-slate-200">{book.publisher || 'N/A'}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-amber-400">
                <Bookmark className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Category</p>
                <p className="text-sm font-medium text-slate-200">{book.category}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-amber-400">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Acquisition Inventory</p>
                <p className="text-sm font-semibold text-slate-200">
                  <span className={book.available_copies > 0 ? 'text-emerald-400' : 'text-rose-400'}>
                    {book.available_copies > 0 ? '1 Copy Available' : '0 Copies (Checked Out)'}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-amber-400">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Acquisition Date</p>
                <p className="text-sm font-medium text-slate-300">
                  {new Date(book.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>


          {/* Readers Reviews Section */}
          <div className="mb-6 border-t border-slate-800 pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-amber-400" /> Reader Reviews &amp; Ratings
              </h3>
              <button
                onClick={() => setShowAddReview(!showAddReview)}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 border border-amber-500/30 transition-colors flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" /> {showAddReview ? 'Cancel' : 'Write Review'}
              </button>
            </div>

            {/* Add Review Form */}
            {showAddReview && (
              <form
                onSubmit={handleAddReviewSubmit}
                className="mb-4 p-4 rounded-2xl bg-slate-950 border border-amber-500/30 space-y-3"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-slate-400 uppercase font-semibold">Your Name / Grade</label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Smith (Grade 11)"
                      value={newReviewer}
                      onChange={(e) => setNewReviewer(e.target.value)}
                      className="w-full mt-1 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-slate-400 uppercase font-semibold">Rating (1 to 5 Stars)</label>
                    <select
                      value={newRating}
                      onChange={(e) => setNewRating(Number(e.target.value))}
                      className="w-full mt-1 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value={5}>5 Stars - Outstanding</option>
                      <option value={4}>4 Stars - Great Read</option>
                      <option value={3}>3 Stars - Good</option>
                      <option value={2}>2 Stars - Average</option>
                      <option value={1}>1 Star - Poor</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-[11px] text-slate-400 uppercase font-semibold">Comment</label>
                  <textarea
                    placeholder="Write your review comments about this book..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full mt-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 h-20"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors"
                >
                  Submit Review
                </button>
              </form>
            )}

            {/* List of Reviews */}
            {book.reviews && book.reviews.length > 0 ? (
              <div className="space-y-3">
                {book.reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 text-xs"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-semibold text-white">{rev.reviewer_name}</span>
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-slate-300 text-xs leading-relaxed">{rev.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500 italic">No reviews submitted yet for this acquisition.</p>
            )}
          </div>

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800 pt-4">
            <span className="text-xs text-slate-500">
              Registration #: <code className="text-amber-400 font-mono font-bold">{book.registration_number}</code>
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
              >
                Close
              </button>

              <button
                onClick={handleStudentBookRegister}
                disabled={registering || book.available_copies <= 0 || book.status !== 'available'}
                className="px-6 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
              >
                {registering ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Logging Registration...
                  </>
                ) : (
                  <>
                    <FileCheck className="w-4 h-4" /> Register Book to Backlog
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

