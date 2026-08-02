'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  BookOpen,
  History,
  PlusCircle,
  LogOut,
  ShieldCheck,
  BookMarked,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Sparkles,
  RefreshCw,
  FileSpreadsheet,
  Users,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { StatsCard } from '@/components/StatsCard';
import { BookTable } from '@/components/BookTable';
import { ActivityLogTable } from '@/components/ActivityLogTable';
import { StudentRosterTable } from '@/components/StudentRosterTable';
import { BookDueSection } from '@/components/BookDueSection';
import { RegisterBookModal } from '@/components/RegisterBookModal';
import { EditBookModal } from '@/components/EditBookModal';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/context/ToastContext';
import { fetchBooks, fetchRegistrationLogs } from '@/lib/supabase/client';
import { Book, RegistrationLog } from '@/lib/types';

export default function AdminDashboardPage() {
  const router = useRouter();
  const { user, profile, isAdmin, loading: authLoading, signOut } = useAuth();
  const { showToast } = useToast();

  const [activeTab, setActiveTab] = useState<'overview' | 'due' | 'manage' | 'backlog' | 'roster'>('overview');

  const [books, setBooks] = useState<Book[]>([]);
  const [logs, setLogs] = useState<RegistrationLog[]>([]);
  const [dataLoading, setDataLoading] = useState(true);

  // Modals state
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [editingBook, setEditingBook] = useState<Book | null>(null);

  // Auth Guard protection
  useEffect(() => {
    if (!authLoading && !isAdmin) {
      router.push('/admin/login');
    }
  }, [authLoading, isAdmin, router]);

  const loadData = async () => {
    setDataLoading(true);
    try {
      const [fetchedBooks, fetchedLogs] = await Promise.all([
        fetchBooks(),
        fetchRegistrationLogs(),
      ]);
      setBooks(fetchedBooks);
      setLogs(fetchedLogs);
    } catch (e) {
      console.error('Failed to load dashboard metrics:', e);
    } finally {
      setDataLoading(false);
    }
  };

  useEffect(() => {
    if (isAdmin) {
      loadData();
    }
  }, [isAdmin]);

  // Calculated Overview Metrics
  const totalBooks = books.length;
  const totalCopies = books.reduce((acc, b) => acc + b.total_copies, 0);
  const availableCopies = books.reduce((acc, b) => acc + b.available_copies, 0);
  const checkedOutCopies = books.reduce(
    (acc, b) => acc + (b.total_copies - b.available_copies),
    0
  );
  const damagedOrLost = books.filter(
    (b) => b.status === 'damaged' || b.status === 'lost'
  ).length;

  const studentRegistrationsCount = logs.filter(
    (l) => l.action === 'student_registration'
  ).length;

  const handleBookCreated = (newBook: Book, newLog: RegistrationLog) => {
    setBooks((prev) => [newBook, ...prev]);
    setLogs((prev) => [newLog, ...prev]);
  };

  const handleBookUpdated = (updatedBook: Book, newLog: RegistrationLog) => {
    setBooks((prev) => prev.map((b) => (b.id === updatedBook.id ? updatedBook : b)));
    setLogs((prev) => [newLog, ...prev]);
  };

  if (authLoading || (!isAdmin && authLoading)) {
    return (
      <div className="min-h-screen bg-[#050814] flex items-center justify-center text-slate-400">
        <RefreshCw className="w-6 h-6 animate-spin text-amber-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#050814]">
      <Navbar />

      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Admin Header Title & Quick Register Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Librarian Control Dashboard
              </h1>
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Admin Zone
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Logged in as <span className="text-white font-medium">{profile?.full_name || 'Chief Librarian'}</span> ({user?.email || 'admin@school.edu'})
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsRegisterOpen(true)}
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
            >
              <PlusCircle className="w-4 h-4" /> Register New Book
            </button>
          </div>
        </div>

        {/* Layout Grid: Sidebar Navigation + Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-3 space-y-4">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-4 shadow-xl">
              <nav className="space-y-1.5">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-semibold transition-all ${
                    activeTab === 'overview'
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Overview &amp; Metrics</span>
                </button>

                <button
                  onClick={() => setActiveTab('due')}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-semibold transition-all ${
                    activeTab === 'due'
                      ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-rose-400" />
                    <span>Book Due &amp; Fines</span>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] rounded-full bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30">
                    Overdue
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab('manage')}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-semibold transition-all ${
                    activeTab === 'manage'
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-4 h-4" />
                    <span>Manage Books</span>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] rounded-full bg-slate-950/40 text-current font-bold">
                    {totalBooks}
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab('backlog')}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-semibold transition-all ${
                    activeTab === 'backlog'
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <History className="w-4 h-4" />
                    <span>Backlog Activity Log</span>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] rounded-full bg-slate-950/40 text-current font-bold">
                    {logs.length}
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab('roster')}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-semibold transition-all ${
                    activeTab === 'roster'
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-purple-400" />
                    <span>Student Roster (160)</span>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] rounded-full bg-purple-500/20 text-purple-300 font-bold">
                    160
                  </span>
                </button>
              </nav>

              <div className="mt-6 pt-6 border-t border-slate-800 text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80 mb-3">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Student Registrations
                  </p>
                  <p className="text-amber-400 font-medium flex items-center gap-1.5 text-xs">
                    <Sparkles className="w-3.5 h-3.5" /> {studentRegistrationsCount} Logged to Backlog
                  </p>
                </div>
                <button
                  onClick={() => signOut()}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 transition-colors font-semibold"
                >
                  <LogOut className="w-4 h-4" /> End Session
                </button>
              </div>
            </div>
          </aside>

          {/* Main Tab Content */}
          <section className="lg:col-span-9 space-y-6">
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  {/* Overview Stats Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatsCard
                      title="Total Acquisitions"
                      value={totalBooks}
                      subtitle={`${totalCopies} Total Copies`}
                      icon={BookMarked}
                      iconColor="text-amber-400"
                      iconBg="bg-amber-500/10"
                      trend="+3 this week"
                    />

                    <StatsCard
                      title="Available Copies"
                      value={availableCopies}
                      subtitle="Ready for Checkout"
                      icon={CheckCircle2}
                      iconColor="text-emerald-400"
                      iconBg="bg-emerald-500/10"
                      trend="78% In Shelf"
                    />

                    <StatsCard
                      title="Checked Out"
                      value={checkedOutCopies}
                      subtitle="Issued to Students"
                      icon={Clock}
                      iconColor="text-amber-400"
                      iconBg="bg-amber-500/10"
                    />

                    <StatsCard
                      title="Student Registrations"
                      value={studentRegistrationsCount}
                      subtitle="Logged in Backlog"
                      icon={Users}
                      iconColor="text-purple-400"
                      iconBg="bg-purple-500/10"
                    />
                  </div>

                  {/* Quick Action & System Summary */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                          <History className="w-5 h-5 text-amber-400" /> Recent Backlog Activity
                        </h2>
                        <button
                          onClick={() => setActiveTab('backlog')}
                          className="text-xs text-amber-400 hover:underline font-semibold"
                        >
                          View Full History
                        </button>
                      </div>

                      <div className="space-y-3">
                        {logs.slice(0, 4).map((log) => (
                          <div
                            key={log.id}
                            className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-center justify-between text-xs"
                          >
                            <div className="flex items-center gap-3">
                              <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                              <div>
                                <p className="font-semibold text-white">
                                  {log.book?.title || log.details?.title || 'Book Action'}
                                </p>
                                <p className="text-[11px] text-slate-400">
                                  {log.details?.student_name ? (
                                    <span>
                                      Student:{' '}
                                      <strong className="text-amber-300">{log.details.student_name}</strong> ({log.details.student_class})
                                    </span>
                                  ) : (
                                    <span>
                                      Action: <span className="text-amber-300 font-mono">{log.action}</span>
                                    </span>
                                  )}
                                </p>
                              </div>
                            </div>
                            <span className="text-[11px] text-slate-500">
                              {new Date(log.created_at).toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit',
                              })}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Shortcuts Box */}
                    <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col justify-between">
                      <div>
                        <h2 className="text-lg font-bold text-white tracking-tight mb-2">Administrative Actions</h2>
                        <p className="text-xs text-slate-400 mb-6">Perform primary catalog maintenance tasks.</p>

                        <div className="space-y-3">
                          <button
                            onClick={() => setIsRegisterOpen(true)}
                            className="w-full py-3 px-4 rounded-2xl bg-slate-950 hover:bg-slate-800 text-white border border-slate-800 transition-colors text-xs font-semibold flex items-center justify-between"
                          >
                            <span className="flex items-center gap-2">
                              <PlusCircle className="w-4 h-4 text-amber-400" /> Register Acquisition
                            </span>
                            <span className="text-slate-500">→</span>
                          </button>

                          <button
                            onClick={() => setActiveTab('due')}
                            className="w-full py-3 px-4 rounded-2xl bg-rose-950/40 hover:bg-rose-950/70 text-rose-300 border border-rose-900/50 transition-colors text-xs font-semibold flex items-center justify-between"
                          >
                            <span className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-rose-400" /> Check Section Book Due
                            </span>
                            <span className="text-rose-400">→</span>
                          </button>

                          <button
                            onClick={() => setActiveTab('roster')}
                            className="w-full py-3 px-4 rounded-2xl bg-slate-950 hover:bg-slate-800 text-white border border-slate-800 transition-colors text-xs font-semibold flex items-center justify-between"
                          >
                            <span className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-purple-400" /> View 160-Student Roster
                            </span>
                            <span className="text-slate-500">→</span>
                          </button>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-500">
                        Supabase RLS Protection Active
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'due' && (
                <motion.div
                  key="due"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <BookDueSection onDataChange={loadData} />
                </motion.div>
              )}


              {activeTab === 'manage' && (
                <motion.div
                  key="manage"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <BookTable
                    books={books}
                    onEditBook={(book) => setEditingBook(book)}
                    onBookUpdated={handleBookUpdated}
                  />
                </motion.div>
              )}

              {activeTab === 'backlog' && (
                <motion.div
                  key="backlog"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <ActivityLogTable logs={logs} />
                </motion.div>
              )}

              {activeTab === 'roster' && (
                <motion.div
                  key="roster"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <StudentRosterTable logs={logs} />
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </div>
      </div>

      {/* Modals */}
      <RegisterBookModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onSuccess={handleBookCreated}
      />

      <EditBookModal
        book={editingBook}
        onClose={() => setEditingBook(null)}
        onSuccess={handleBookUpdated}
      />

      <Footer />
    </div>
  );
}
