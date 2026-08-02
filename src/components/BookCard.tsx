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
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Available
          </span>
        );
      case 'checked_out':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-200">
            <Clock className="w-3 h-3 text-amber-700" /> Checked Out
          </span>
        );
      case 'damaged':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-rose-50 text-rose-700 border border-rose-200">
            <AlertTriangle className="w-3 h-3 text-rose-600" /> Damaged
          </span>
        );
      case 'lost':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-900 text-slate-100 border border-slate-700">
            <XCircle className="w-3 h-3 text-rose-400" /> Lost
          </span>
        );
      case 'retired':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-600 border border-slate-200">
            Retired
          </span>
        );
    }
  };

  const getCategoryGradient = (category: string) => {
    switch (category.toLowerCase()) {
      case 'malayalam':
        return 'from-[#8A6539] to-[#6E5A4C] border-[#A88252]';
      case 'fiction':
        return 'from-[#74532B] to-[#5C3E1B] border-[#967144]';
      case 'non-fiction':
        return 'from-[#805D34] to-[#634522] border-[#A88252]';
      default:
        return 'from-[#5C4537] to-[#3D2B22] border-[#705646]';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.2, ease: 'easeOut' } }}
      onClick={() => onSelect(book)}
      className="group relative bg-white hover:bg-[#FDFBF7] rounded-2xl p-5 border border-[#E2D5C3] hover:border-[#8A6539] shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      <div>
        {/* Top bar: Category badge & Status */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1 text-[11px] font-sans-hillsinai font-medium px-2.5 py-1 rounded-lg bg-[#F4EDE2] text-[#6E5A4C] border border-[#D8C6B0]">
            <Tag className="w-3 h-3 text-[#8A6539]" />
            {book.category}
          </span>
          {getStatusBadge(book.status)}
        </div>

        {/* Cover photo or styled fallback cover graphic */}
        <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4 border border-[#E2D5C3] group-hover:scale-[1.01] transition-transform duration-300">
          {book.cover_url && !imgError ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={book.cover_url}
              alt={book.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${getCategoryGradient(book.category)} flex flex-col items-center justify-center p-4 text-white text-center`}>
              <BookIcon className="w-10 h-10 text-amber-200/80 mb-2 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-[10px] font-sans-hillsinai font-bold uppercase tracking-widest text-amber-200/90">{book.category}</span>
            </div>
          )}

          {/* Registration tag overlay */}
          <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-md bg-[#2A1D17]/90 text-amber-300 text-[10px] font-mono font-bold border border-[#523C30] backdrop-blur-md shadow">
            {book.registration_number}
          </div>

          {/* Rating badge overlay */}
          {book.rating && (
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-[#2A1D17]/90 text-amber-300 text-[10px] font-bold border border-[#523C30] backdrop-blur-md flex items-center gap-1">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{book.rating.toFixed(1)}</span>
            </div>
          )}
        </div>

        {/* Title & Author */}
        <h3 className="font-serif-hillsinai font-bold text-lg text-[#2B1D15] group-hover:text-[#8A6539] transition-colors line-clamp-2 mb-1 leading-snug">
          {book.title}
        </h3>
        <p className="font-sans-hillsinai text-xs text-[#6E5A4C] font-medium mb-3 line-clamp-1">
          by <span className="text-[#3A291E] font-semibold">{book.author}</span>
        </p>
      </div>

      {/* Card Footer Info */}
      <div className="pt-3 border-t border-[#E8DCCB] flex items-center justify-between text-xs text-[#6E5A4C] font-sans-hillsinai">
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#F4EDE2] text-[#6E5A4C] border border-[#D8C6B0]">
            {book.shelf_location || 'Single Copy'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {book.reviews && book.reviews.length > 0 && (
            <span className="flex items-center gap-1 text-[11px] text-[#6E5A4C]">
              <MessageSquare className="w-3 h-3 text-[#8A6539]" />
              {book.reviews.length}
            </span>
          )}

          <div className="font-medium">
            <span className={book.available_copies > 0 ? 'text-emerald-700 font-semibold' : 'text-rose-700 font-semibold'}>
              {book.available_copies > 0 ? '1 Copy Available' : '0 Copies'}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
