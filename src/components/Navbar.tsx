'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, ShieldCheck, LogOut, Library, Sparkles, Clock, AlertTriangle } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { fetchBorrowRecords } from '@/lib/supabase/client';

export function Navbar() {
  const pathname = usePathname();
  const { user, isAdmin, signOut } = useAuth();
  const [overdueCount, setOverdueCount] = useState(0);

  useEffect(() => {
    fetchBorrowRecords().then((borrows) => {
      const overdues = borrows.filter((b) => b.status === 'overdue');
      setOverdueCount(overdues.length);
    }).catch(() => {});
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Library className="w-5 h-5 text-amber-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-white tracking-tight group-hover:text-amber-400 transition-colors">
                Oakridge Library
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-full border border-amber-500/20">
                <Sparkles className="w-2.5 h-2.5" /> Official System
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium hidden sm:block">Physical Book Registration & Catalog</p>
          </div>
        </Link>

        {/* Navigation Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 ${
              pathname === '/'
                ? 'bg-slate-800 text-amber-400 border border-slate-700'
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Public Catalog</span>
          </Link>

          <Link
            href="/due-books"
            className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 relative ${
              pathname === '/due-books'
                ? 'bg-rose-950/60 text-rose-300 border border-rose-800'
                : 'text-slate-300 hover:text-rose-300 hover:bg-rose-950/30'
            }`}
          >
            <Clock className="w-4 h-4 text-rose-400" />
            <span>Book Due</span>
            {overdueCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-extrabold bg-rose-500 text-white animate-pulse">
                {overdueCount}
              </span>
            )}
          </Link>

          {isAdmin ? (
            <div className="flex items-center gap-2">
              <Link
                href="/admin/dashboard"
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${
                  pathname === '/admin/dashboard'
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:bg-amber-500/20'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Admin Dashboard</span>
              </Link>
              <button
                onClick={() => signOut()}
                className="p-2 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
                title="Log Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <Link
              href="/admin/login"
              className="px-3.5 py-2 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 transition-all flex items-center gap-2 shadow-sm"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Admin Login</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

