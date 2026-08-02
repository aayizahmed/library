import React from 'react';
import { BookOpen, ShieldCheck, Database, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-800/60 bg-slate-950 text-slate-400 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-slate-800/60">
          <div>
            <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-400" />
              Oakridge School Library
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Official physical book registration system and searchable digital catalog. Empowering students and faculty with seamless library access.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
              <Database className="w-4 h-4 text-emerald-400" />
              System Architecture
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Powered by Next.js 14, Tailwind CSS, Framer Motion, and Supabase Postgres database with automated activity logging triggers & RLS.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              Librarian Portal
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Authorized administrators can register new acquisitions, track inventory copies, update condition statuses, and review activity history log backlogs.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Oakridge School Library Management System. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Built with precision & style for school libraries</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
