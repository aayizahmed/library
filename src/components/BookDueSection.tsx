'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  AlertTriangle,
  DollarSign,
  UserCheck,
  CheckCircle2,
  Search,
  Filter,
  RefreshCw,
  PlusCircle,
  Bell,
  RotateCcw,
  Sparkles,
  BookOpen,
  Calendar,
  GraduationCap,
  ShieldAlert,
  ArrowUpRight,
  X,
} from 'lucide-react';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { BorrowRecord } from '@/lib/types';
import {
  fetchBorrowRecords,
  returnBorrowRecord,
  payBorrowFine,
  simulateOverdueRecord,
} from '@/lib/supabase/client';
import { useToast } from '@/context/ToastContext';

interface BookDueSectionProps {
  onDataChange?: () => void;
}

export function BookDueSection({ onDataChange }: BookDueSectionProps) {
  const { isAdmin } = useAuth();
  const { showToast } = useToast();
  const [borrows, setBorrows] = useState<BorrowRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  // Admin Verification Return Modal State
  const [verifyingBorrow, setVerifyingBorrow] = useState<BorrowRecord | null>(null);
  const [returnCondition, setReturnCondition] = useState<'good' | 'damaged' | 'lost'>('good');

  // Filters
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'overdue' | 'active' | 'returned'>('overdue');
  const [selectedClass, setSelectedClass] = useState('ALL');

  const loadBorrows = async () => {
    setLoading(true);
    try {
      const data = await fetchBorrowRecords();
      setBorrows(data);
    } catch (e) {
      console.error('Failed to load borrow records:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBorrows();
  }, []);

  const handleConfirmAdminReturn = async () => {
    if (!verifyingBorrow) return;
    setActionLoading(verifyingBorrow.id);

    try {
      const { borrow, book, log } = await returnBorrowRecord(
        verifyingBorrow.id,
        returnCondition
      );

      showToast(
        'Book Return Verified & Executed',
        `"${verifyingBorrow.book_title}" returned by ${verifyingBorrow.student_name}. Condition logged as [${returnCondition.toUpperCase()}]. Logged to backlog.`,
        'success'
      );

      setVerifyingBorrow(null);
      await loadBorrows();
      if (onDataChange) onDataChange();
    } catch (e: any) {
      showToast('Error Returning Book', e.message || 'Operation failed', 'error');
    } finally {
      setActionLoading(null);
    }
  };

  const handlePayFine = async (borrowId: string, studentName: string, amount: number) => {
    setActionLoading(borrowId);
    try {
      await payBorrowFine(borrowId);
      showToast(
        'Fine Settled by Librarian',
        `Fine of $${amount.toFixed(2)} for student ${studentName} marked as PAID by Admin.`,
        'success'
      );
      await loadBorrows();
    } catch (e: any) {
      showToast('Error Settling Fine', e.message || 'Operation failed', 'error');
    } finally {
      setActionLoading(null);
    }
  };

  const handleSimulateOverdue = async () => {
    setActionLoading('simulating');
    try {
      const record = await simulateOverdueRecord();
      showToast(
        'Simulated 7+ Days Overdue Record!',
        `Generated overdue record for "${record.book_title}" registered to ${record.student_name} (${record.fine_amount.toFixed(2)} fine impounded).`,
        'info'
      );
      await loadBorrows();
      if (onDataChange) onDataChange();
    } catch (e: any) {
      showToast('Simulation Failed', e.message || 'Operation failed', 'error');
    } finally {
      setActionLoading(null);
    }
  };


  const handleSendNotice = (studentName: string, email?: string, bookTitle?: string) => {
    showToast(
      'Overdue Notice Sent!',
      `Official return reminder & fine warning dispatched to ${studentName} (${email || 'school email'}).`,
      'info'
    );
  };

  // Metrics
  const overdueRecords = useMemo(
    () => borrows.filter((b) => b.status === 'overdue'),
    [borrows]
  );

  const totalImpoundedFine = useMemo(
    () => overdueRecords.reduce((acc, b) => acc + b.fine_amount, 0),
    [overdueRecords]
  );

  const affectedStudentsCount = useMemo(
    () => new Set(overdueRecords.map((b) => b.student_id)).size,
    [overdueRecords]
  );

  const classList = useMemo(() => {
    const set = new Set(borrows.map((b) => b.student_class));
    return Array.from(set);
  }, [borrows]);

  // Filtered List
  const filteredBorrows = useMemo(() => {
    return borrows.filter((b) => {
      const q = search.toLowerCase();
      const matchesSearch =
        b.book_title.toLowerCase().includes(q) ||
        b.registration_number.toLowerCase().includes(q) ||
        b.student_name.toLowerCase().includes(q) ||
        b.student_id.toLowerCase().includes(q) ||
        (b.roll_number && b.roll_number.toLowerCase().includes(q));

      const matchesStatus =
        filterStatus === 'all' || b.status === filterStatus;

      const matchesClass =
        selectedClass === 'ALL' || b.student_class === selectedClass;

      return matchesSearch && matchesStatus && matchesClass;
    });
  }, [borrows, search, filterStatus, selectedClass]);

  const calculateDaysOverdue = (dueDateStr: string) => {
    const due = new Date(dueDateStr);
    const now = new Date();
    const diff = Math.floor((now.getTime() - due.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  };

  return (
    <div className="space-y-6">
      {/* Top Section Banner */}
      <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-rose-950/40 via-slate-900 to-amber-950/30 border border-rose-900/40 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-xs font-semibold border border-rose-500/20 mb-3">
              <ShieldAlert className="w-3.5 h-3.5" /> 7-Day Loan Policy Enforced
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-2">
              Book Due &amp; Impounded Student Fines
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
              Books not returned within the standard 7-day loan window automatically move to the 
              <strong className="text-amber-400 font-semibold"> Section Book Due</strong>. Impounded fines ($1.00/day) are levied on registered students until the book is returned or settled.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {isAdmin ? (
              <button
                onClick={handleSimulateOverdue}
                disabled={actionLoading === 'simulating'}
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-rose-500 to-amber-600 hover:from-rose-400 hover:to-amber-500 text-white shadow-lg shadow-rose-500/20 transition-all flex items-center gap-2"
              >
                {actionLoading === 'simulating' ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <PlusCircle className="w-4 h-4" />
                )}
                <span>Simulate 7+ Days Overdue</span>
              </button>
            ) : (
              <Link
                href="/admin/login"
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
              >
                <UserCheck className="w-4 h-4" /> Librarian Login
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Non-Admin Front-Desk Notice Banner */}
      {!isAdmin && (
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-amber-300">Librarian Front-Desk Verification Policy</p>
              <p className="text-[11px] text-slate-300 mt-0.5">
                Book returns and impounded fine settlements must be physically verified and processed by an authorized librarian at the front desk in the <strong className="text-white">Admin Control Dashboard</strong>.
              </p>
            </div>
          </div>
          <Link
            href="/admin/login"
            className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors whitespace-nowrap shrink-0"
          >
            Librarian Admin Login →
          </Link>
        </div>
      )}

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Overdue Books Count */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Overdue Books (&gt;7 Days)
            </span>
            <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <p className="text-3xl font-extrabold text-white tracking-tight mb-1">
            {overdueRecords.length}
          </p>
          <p className="text-xs text-rose-400 font-medium flex items-center gap-1">
            <AlertTriangle className="w-3 h-3" /> Exceeded 7-day return limit
          </p>
        </div>

        {/* Total Impounded Fines */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Total Impounded Fines
            </span>
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <p className="text-3xl font-extrabold text-amber-400 tracking-tight mb-1">
            ${totalImpoundedFine.toFixed(2)}
          </p>
          <p className="text-xs text-slate-400 font-medium">
            Accruing at $1.00 / day
          </p>
        </div>

        {/* Affected Students */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Registered Students
            </span>
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <UserCheck className="w-4 h-4" />
            </div>
          </div>
          <p className="text-3xl font-extrabold text-white tracking-tight mb-1">
            {affectedStudentsCount}
          </p>
          <p className="text-xs text-slate-400 font-medium">
            With active / overdue loans
          </p>
        </div>

        {/* Loan Policy */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Standard Loan Window
            </span>
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <p className="text-3xl font-extrabold text-emerald-400 tracking-tight mb-1">
            7 Days
          </p>
          <p className="text-xs text-slate-400 font-medium">
            Mandatory desk return
          </p>
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search student, book, registration #..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Status Filter */}
            <div className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5">
              <Filter className="w-3.5 h-3.5 text-amber-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as any)}
                className="bg-transparent text-xs text-slate-300 focus:outline-none cursor-pointer"
              >
                <option value="overdue" className="bg-slate-900">
                  Section Book Due (Overdue &amp; Fines)
                </option>
                <option value="all" className="bg-slate-900">
                  All Borrowing Records
                </option>
                <option value="active" className="bg-slate-900">
                  Active Loans (&lt;7 Days)
                </option>
                <option value="returned" className="bg-slate-900">
                  Returned &amp; Settled
                </option>
              </select>
            </div>

            {/* Class Filter */}
            <div className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="bg-transparent text-xs text-slate-300 focus:outline-none cursor-pointer"
              >
                <option value="ALL" className="bg-slate-900">
                  All Student Classes
                </option>
                {classList.map((cls) => (
                  <option key={cls} value={cls} className="bg-slate-900">
                    {cls}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Overdue Borrowing Records Table */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl overflow-hidden">
        {loading ? (
          <div className="py-16 text-center text-slate-400 flex flex-col items-center justify-center">
            <RefreshCw className="w-8 h-8 animate-spin text-amber-400 mb-3" />
            <p className="text-xs">Fetching borrow records and fine calculations...</p>
          </div>
        ) : filteredBorrows.length > 0 ? (
          <div className="overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950 text-slate-400 uppercase font-semibold text-[11px] border-b border-slate-800">
                <tr>
                  <th className="px-4 py-3.5">Loan Status</th>
                  <th className="px-4 py-3.5">Registered Student</th>
                  <th className="px-4 py-3.5">Book Details</th>
                  <th className="px-4 py-3.5">Issue Date</th>
                  <th className="px-4 py-3.5">Due Date</th>
                  <th className="px-4 py-3.5">Overdue Days</th>
                  <th className="px-4 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredBorrows.map((b) => {
                  const daysOverdue = calculateDaysOverdue(b.due_date);
                  const isLoading = actionLoading === b.id;

                  return (
                    <tr key={b.id} className="hover:bg-slate-800/40 transition-colors">
                      {/* Status badge */}
                      <td className="px-4 py-4 whitespace-nowrap">
                        {b.status === 'overdue' ? (
                          <div className="flex flex-col gap-1">
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-rose-500/10 text-rose-400 border border-rose-500/30">
                              <AlertTriangle className="w-3 h-3" /> Section Book Due
                            </span>
                            {b.fine_amount > 0 && (
                              <span className="text-[10px] font-mono text-amber-300 pl-1 font-semibold">
                                Fine Impounded: ${b.fine_amount.toFixed(2)} ({b.fine_status.toUpperCase()})
                              </span>
                            )}
                          </div>
                        ) : b.status === 'returned' ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                            <CheckCircle2 className="w-3 h-3" /> Returned &amp; Cleared
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                            <Clock className="w-3 h-3" /> Active (In 7 Days)
                          </span>
                        )}
                      </td>

                      {/* Registered Student */}
                      <td className="px-4 py-4">
                        <div className="font-semibold text-white text-sm">{b.student_name}</div>
                        <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono mt-0.5">
                          <span className="text-amber-400">{b.student_id}</span>
                          <span>•</span>
                          <span>{b.student_class}</span>
                        </div>
                      </td>

                      {/* Book Details */}
                      <td className="px-4 py-4 max-w-xs">
                        <div className="font-bold text-white text-xs truncate">{b.book_title}</div>
                        <div className="text-[11px] font-mono text-amber-300 flex items-center gap-1.5 mt-0.5">
                          <span>{b.registration_number}</span>
                        </div>
                      </td>

                      {/* Issue Date */}
                      <td className="px-4 py-4 font-mono text-slate-300 whitespace-nowrap text-xs">
                        {new Date(b.issued_at).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </td>

                      {/* Due Date */}
                      <td className="px-4 py-4 font-mono text-amber-300 whitespace-nowrap text-xs">
                        {new Date(b.due_date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </td>

                      {/* Days Overdue */}
                      <td className="px-4 py-4 font-mono whitespace-nowrap">
                        {b.status === 'overdue' ? (
                          <span className="text-xs font-bold text-rose-400 bg-rose-500/10 px-2 py-1 rounded border border-rose-500/20">
                            +{daysOverdue} Days
                          </span>
                        ) : (
                          <span className="text-slate-500 text-xs">—</span>
                        )}
                      </td>

                      {/* Actions Column (Restricted to Admin) */}
                      <td className="px-4 py-4 text-right whitespace-nowrap">
                        {b.status === 'returned' ? (
                          <span className="text-[11px] text-slate-500 italic">No Action Needed</span>
                        ) : isAdmin ? (
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => setVerifyingBorrow(b)}
                              disabled={isLoading}
                              className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 transition-colors flex items-center gap-1"
                              title="Verify Book & Return"
                            >
                              {isLoading ? (
                                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                              ) : (
                                <RotateCcw className="w-3.5 h-3.5" />
                              )}
                              <span>Verify &amp; Return</span>
                            </button>

                            {b.status === 'overdue' && b.fine_status === 'pending' && (
                              <button
                                onClick={() =>
                                  handlePayFine(b.id, b.student_name, b.fine_amount)
                                }
                                disabled={isLoading}
                                className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition-colors flex items-center gap-1"
                                title="Pay Impounded Fine"
                              >
                                <DollarSign className="w-3.5 h-3.5" />
                                <span>Pay Fine</span>
                              </button>
                            )}

                            {b.status === 'overdue' && (
                              <button
                                onClick={() =>
                                  handleSendNotice(b.student_name, b.email, b.book_title)
                                }
                                className="p-1.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-amber-400 border border-slate-800 transition-colors"
                                title="Send Return Warning Notice"
                              >
                                <Bell className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                        ) : (
                          <span className="text-[11px] text-amber-400/80 font-semibold bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800 inline-flex items-center gap-1.5">
                            <UserCheck className="w-3.5 h-3.5 text-amber-400" /> Front-Desk Verification Required
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="py-16 text-center max-w-md mx-auto">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white mb-1">No Matching Overdue Books</h3>
            <p className="text-xs text-slate-400 mb-6">
              All physical registered books are currently returned or within their standard 7-day loan window.
            </p>
            {isAdmin && (
              <button
                onClick={handleSimulateOverdue}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-rose-500 text-white hover:bg-rose-600 transition-colors"
              >
                Simulate 7+ Days Overdue Book
              </button>
            )}
          </div>
        )}
      </div>

      {/* Admin Verification Modal for Returning Books */}
      {verifyingBorrow && (
        <AnimatePresence>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-amber-400" /> Librarian Return Verification
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">Reg #: {verifyingBorrow.registration_number}</p>
                </div>
                <button onClick={() => setVerifyingBorrow(null)} className="p-1 text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between"><span className="text-slate-400">Book Title:</span><span className="font-bold text-white">{verifyingBorrow.book_title}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Registered Student:</span><span className="font-semibold text-amber-300">{verifyingBorrow.student_name} ({verifyingBorrow.student_class})</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Student ID / Roll:</span><span className="font-mono text-slate-300">{verifyingBorrow.student_id} [Roll: {verifyingBorrow.roll_number || 'N/A'}]</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Impounded Fine:</span><span className="font-bold text-rose-400">${verifyingBorrow.fine_amount.toFixed(2)}</span></div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Inspected Physical Book Condition</label>
                <select
                  value={returnCondition}
                  onChange={(e) => setReturnCondition(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-400 cursor-pointer"
                >
                  <option value="good">Good Condition (Standard Return &amp; Restock)</option>
                  <option value="damaged">Damaged (Flag for Library Repair)</option>
                  <option value="lost">Lost / Missing Copy</option>
                </select>
              </div>

              <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-800">
                <button
                  onClick={() => setVerifyingBorrow(null)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmAdminReturn}
                  disabled={actionLoading === verifyingBorrow.id}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20 flex items-center gap-2 transition-all"
                >
                  {actionLoading === verifyingBorrow.id ? <RefreshCw className="w-4 h-4 animate-spin" /> : <RotateCcw className="w-4 h-4" />}
                  Confirm Admin Return &amp; Log Backlog
                </button>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      )}
    </div>
  );
}
