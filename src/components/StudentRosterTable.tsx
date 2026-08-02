'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Search, Users, GraduationCap, Hash, BookOpen, CheckCircle2, AlertTriangle, Clock } from 'lucide-react';
import { SCHOOL_ROSTER, StudentProfile } from '@/lib/studentRoster';
import { RegistrationLog, BorrowRecord } from '@/lib/types';
import { fetchBorrowRecords } from '@/lib/supabase/client';

interface StudentRosterTableProps {
  logs: RegistrationLog[];
}

export function StudentRosterTable({ logs }: StudentRosterTableProps) {
  const [search, setSearch] = useState('');
  const [classFilter, setClassFilter] = useState('ALL');
  const [borrows, setBorrows] = useState<BorrowRecord[]>([]);

  useEffect(() => {
    fetchBorrowRecords().then((data) => setBorrows(data)).catch(() => {});
  }, []);

  // Compute registered books & overdue fine stats for each of the 160 students
  const studentStats = useMemo(() => {
    const map = new Map<
      string,
      {
        count: number;
        overdueCount: number;
        fineTotal: number;
        books: { title: string; regNum: string; date: string }[];
      }
    >();

    // Standard log registrations
    logs.forEach((log) => {
      if (log.action === 'student_registration' && log.details?.student_name) {
        const key = log.details.student_id || log.details.student_name;
        const current = map.get(key) || { count: 0, overdueCount: 0, fineTotal: 0, books: [] };
        current.count += 1;
        current.books.push({
          title: log.details.title || log.book?.title || 'Unknown Title',
          regNum: log.details.registration_number || log.book?.registration_number || 'LIB-2026',
          date: log.created_at,
        });
        map.set(key, current);
      }
    });

    // Borrow record fine tracking
    borrows.forEach((b) => {
      const key = b.student_id || b.student_name;
      const current = map.get(key) || { count: 0, overdueCount: 0, fineTotal: 0, books: [] };
      if (b.status === 'overdue') {
        current.overdueCount += 1;
        current.fineTotal += b.fine_amount;
      }
      map.set(key, current);
    });

    return map;
  }, [logs, borrows]);

  const classesList = Array.from(new Set(SCHOOL_ROSTER.map((s) => s.studentClass)));

  const filteredRoster = useMemo(() => {
    return SCHOOL_ROSTER.filter((s) => {
      const q = search.toLowerCase();
      const matchesSearch =
        s.name.toLowerCase().includes(q) ||
        s.studentId.toLowerCase().includes(q) ||
        s.rollNumber.toLowerCase().includes(q) ||
        s.studentClass.toLowerCase().includes(q);

      const matchesClass = classFilter === 'ALL' || s.studentClass === classFilter;

      return matchesSearch && matchesClass;
    });
  }, [search, classFilter]);

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Users className="w-5 h-5 text-amber-400" /> Student Directory &amp; Registration Ledger (160 Students)
          </h2>
          <p className="text-xs text-slate-400">Directory of school cohort students, registered library acquisitions, and 7-day overdue fine statuses.</p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search 160 students by name, ID, class..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5">
            <select
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
              className="bg-transparent text-xs text-slate-300 focus:outline-none cursor-pointer"
            >
              <option value="ALL">All Classes (160 Students)</option>
              {classesList.map((cls) => (
                <option key={cls} value={cls} className="bg-slate-900">
                  {cls}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Roster Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800/80">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="bg-slate-950 text-slate-400 uppercase font-semibold text-[11px] border-b border-slate-800">
            <tr>
              <th className="px-4 py-3.5">Student ID</th>
              <th className="px-4 py-3.5">Student Name</th>
              <th className="px-4 py-3.5">Class / Grade</th>
              <th className="px-4 py-3.5">Roll Number</th>
              <th className="px-4 py-3.5">Registered Acquisitions &amp; Overdue Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {filteredRoster.map((s) => {
              const stats = studentStats.get(s.studentId) || studentStats.get(s.name) || { count: 0, overdueCount: 0, fineTotal: 0, books: [] };
              const hasOverdue = stats.overdueCount > 0;

              return (
                <tr
                  key={s.studentId}
                  className={`hover:bg-slate-800/50 transition-colors ${
                    hasOverdue ? 'bg-rose-950/10' : ''
                  }`}
                >
                  <td className="px-4 py-3.5 font-mono text-amber-400 font-bold whitespace-nowrap">
                    {s.studentId}
                  </td>
                  <td className="px-4 py-3.5 font-semibold text-white">
                    <div className="flex items-center gap-2">
                      <span>{s.name}</span>
                      {hasOverdue && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/20">
                          <AlertTriangle className="w-3 h-3" /> FINE IMPOUNDED (${stats.fineTotal.toFixed(2)})
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono">{s.email}</div>
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-800 text-amber-300 border border-slate-700">
                      <GraduationCap className="w-3 h-3" /> {s.studentClass}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 font-mono text-slate-300 whitespace-nowrap">
                    {s.rollNumber}
                  </td>
                  <td className="px-4 py-3.5">
                    {stats.count > 0 || hasOverdue ? (
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          {stats.count > 0 && (
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                              <CheckCircle2 className="w-3 h-3" /> {stats.count} Book(s) Registered
                            </span>
                          )}
                          {hasOverdue && (
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                              <Clock className="w-3 h-3" /> {stats.overdueCount} Overdue (&gt;7 Days)
                            </span>
                          )}
                        </div>
                        {stats.books.length > 0 && (
                          <div className="text-[11px] text-slate-400 truncate max-w-xs">
                            {stats.books.map((b) => b.title).join(', ')}
                          </div>
                        )}
                      </div>
                    ) : (
                      <span className="text-slate-500 italic">No active registrations</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

