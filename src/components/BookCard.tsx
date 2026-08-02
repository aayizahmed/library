'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book as BookIcon, MapPin, CheckCircle2, Clock, AlertTriangle, XCircle, Tag, Star, MessageSquare } from 'lucide-react';
import { Book, BookStatus } from '@/lib/types';

interface BookCardProps {
  book: Book;
  onSelect: (book: Book) => void;
}

export function BookCard({ book, onSelect }: BookCardProps) {
  const [imgError, setImgError] = useState(false);

  const getStatusBadge = (status: BookStatus) => {
    switch (status) {
      case 'available':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 className="w-3.5 h-3.5" /> Available
          </span>
        );
      case 'checked_out':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Clock className="w-3.5 h-3.5" /> Checked Out
          </span>
        );
      case 'damaged':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <AlertTriangle className="w-3.5 h-3.5" /> Damaged
          </span>
        );
      case 'lost':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-950 text-rose-400 border border-rose-800">
            <XCircle className="w-3.5 h-3.5" /> Lost
          </span>
        );
      case 'retired':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-400 border border-slate-700">
            Retired
          </span>
        );
    }
  };

  const getCategoryGradient = (category: string) => {
    switch (category.toLowerCase()) {
      case 'malayalam':
        return 'from-emerald-600/30 to-teal-500/20 border-emerald-500/30';
      case 'fiction':
        return 'from-purple-600/30 to-indigo-500/20 border-purple-500/30';
      case 'non-fiction':
        return 'from-amber-600/30 to-yellow-500/20 border-amber-500/30';
      default:
        return 'from-slate-700/30 to-slate-800/20 border-slate-700/30';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.2, ease: 'easeOut' } }}
      onClick={() => onSelect(book)}
      className="group relative bg-slate-900/80 hover:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-800 hover:border-amber-500/40 shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 cursor-pointer transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      {/* Background hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div>
        {/* Top bar: Category badge & Status */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700/60">
            <Tag className="w-3 h-3 text-amber-400" />
            {book.category}
          </span>
          {getStatusBadge(book.status)}
        </div>

        {/* Cover photo or styled fallback cover graphic */}
        <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4 border border-slate-800/80 group-hover:scale-[1.02] transition-transform duration-300">
          {book.cover_url && !imgError ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={book.cover_url}
              alt={book.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${getCategoryGradient(book.category)} flex flex-col items-center justify-center p-4`}>
              <BookIcon className="w-10 h-10 text-white/70 mb-2 group-hover:scale-110 transition-transform duration-300" />
            </div>
          )}

          {/* Registration tag overlay */}
          <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-slate-950/90 text-amber-400 text-[10px] font-mono font-bold border border-amber-500/30 backdrop-blur-md shadow">
            {book.registration_number}
          </div>

          {/* Rating badge overlay */}
          {book.rating && (
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-slate-950/90 text-amber-300 text-[10px] font-bold border border-amber-500/30 backdrop-blur-md flex items-center gap-1">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{book.rating.toFixed(1)}</span>
            </div>
          )}
        </div>

        {/* Title & Author */}
        <h3 className="font-bold text-base text-white group-hover:text-amber-400 transition-colors line-clamp-2 mb-1 leading-snug">
          {book.title}
        </h3>
        <p className="text-xs text-slate-400 font-medium mb-3 line-clamp-1">
          by <span className="text-slate-300">{book.author}</span>
        </p>
      </div>

      {/* Card Footer Info */}
      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-1.5 text-slate-400">
          <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
            Single Copy
          </span>
        </div>

        <div className="flex items-center gap-2">
          {book.reviews && book.reviews.length > 0 && (
            <span className="flex items-center gap-1 text-[11px] text-slate-400">
              <MessageSquare className="w-3 h-3 text-amber-400" />
              {book.reviews.length}
            </span>
          )}

          <div className="font-medium">
            <span className={book.available_copies > 0 ? 'text-emerald-400 font-semibold' : 'text-rose-400 font-semibold'}>
              {book.available_copies > 0 ? '1 Copy Available' : '0 Copies (Checked Out)'}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}


