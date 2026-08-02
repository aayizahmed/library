'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, History, Eye, Calendar, UserCheck, X, FileJson, CheckCircle2, Clock, AlertTriangle, Power, GraduationCap } from 'lucide-react';
import { RegistrationLog, ActionType } from '@/lib/types';

interface ActivityLogTableProps {
  logs: RegistrationLog[];
}

export function ActivityLogTable({ logs }: ActivityLogTableProps) {
  const [search, setSearch] = useState('');
  const [actionFilter, setActionFilter] = useState<string>('ALL');
  const [selectedLog, setSelectedLog] = useState<RegistrationLog | null>(null);

  const filteredLogs = useMemo(() => {
    return logs.filter((log) => {
      const bookTitle = log.book?.title || log.details?.title || '';
      const regNum = log.book?.registration_number || log.details?.registration_number || '';
      const author = log.book?.author || log.details?.author || '';

      const studentName = log.details?.student_name || '';
      const studentClass = log.details?.student_class || '';
      const studentId = log.details?.student_id || '';
      const rollNumber = log.details?.roll_number || '';

      const q = search.toLowerCase();
      const matchesSearch =
        bookTitle.toLowerCase().includes(q) ||
        regNum.toLowerCase().includes(q) ||
        author.toLowerCase().includes(q) ||
        studentName.toLowerCase().includes(q) ||
        studentClass.toLowerCase().includes(q) ||
        studentId.toLowerCase().includes(q) ||
        rollNumber.toLowerCase().includes(q);

      const matchesAction = actionFilter === 'ALL' || log.action === actionFilter;

      return matchesSearch && matchesAction;
    });
  }, [logs, search, actionFilter]);

  const getActionBadge = (action: ActionType) => {
    switch (action) {
      case 'student_registration':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/30">
            <UserCheck className="w-3.5 h-3.5 text-purple-400" /> Student Book Registration
          </span>
        );
      case 'registered':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5" /> Book Acquisition Registered
          </span>
        );
      case 'status_update':
      case 'status_changed':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <Clock className="w-3.5 h-3.5" /> Status Modified
          </span>
        );
      case 'updated':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/30">
            <AlertTriangle className="w-3.5 h-3.5" /> Metadata Updated
          </span>
        );
      case 'retired':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/30">
            <Power className="w-3.5 h-3.5" /> Book Retired
          </span>
        );
    }
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <History className="w-5 h-5 text-amber-400" /> Registration Backlog &amp; Activity Log
          </h2>
          <p className="text-xs text-slate-400">Review student book registrations, acquisitions, and inventory audit logs.</p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          {/* Search */}
          <div className="relative flex-1 md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search student name, roll #, book title, reg #..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Action Filter */}
          <div className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5">
            <Filter className="w-3.5 h-3.5 text-amber-400" />
            <select
              value={actionFilter}
              onChange={(e) => setActionFilter(e.target.value)}
              className="bg-transparent text-xs text-slate-300 focus:outline-none cursor-pointer"
            >
              <option value="ALL">All Event Types</option>
              <option value="student_registration" className="bg-slate-900">Student Book Registrations</option>
              <option value="registered" className="bg-slate-900">New Acquisitions</option>
              <option value="status_changed" className="bg-slate-900">Status Changes</option>
              <option value="updated" className="bg-slate-900">Metadata Updates</option>
              <option value="retired" className="bg-slate-900">Retired Books</option>
            </select>
          </div>
        </div>
      </div>

      {/* Logs Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800/80">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="bg-slate-950 text-slate-400 uppercase font-semibold text-[11px] border-b border-slate-800">
            <tr>
              <th className="px-4 py-3.5">Timestamp</th>
              <th className="px-4 py-3.5">Action Event</th>
              <th className="px-4 py-3.5">Book Reference</th>
              <th className="px-4 py-3.5">Student / Operator</th>
              <th className="px-4 py-3.5 text-right">Details Payload</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {filteredLogs.length > 0 ? (
              filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-800/50 transition-colors">
                  <td className="px-4 py-3.5 font-mono text-slate-400 whitespace-nowrap">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      {new Date(log.created_at).toLocaleString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap">{getActionBadge(log.action)}</td>
                  <td className="px-4 py-3.5">
                    <div className="font-semibold text-white">
                      {log.book?.title || log.details?.title || 'Book Title'}
                    </div>
                    <div className="text-[11px] font-mono text-amber-400">
                      {log.book?.registration_number || log.details?.registration_number || log.book_id}
                    </div>
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    {log.details?.student_name ? (
                      <div>
                        <div className="font-bold text-white flex items-center gap-1.5">
                          <UserCheck className="w-3.5 h-3.5 text-purple-400" />
                          {log.details.student_name}
                        </div>
                        <div className="text-[11px] text-amber-300 font-medium flex items-center gap-1">
                          <GraduationCap className="w-3 h-3 text-slate-400" />
                          {log.details.student_class} • Roll: {log.details.roll_number || 'N/A'}
                        </div>
                      </div>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-slate-400">
                        <UserCheck className="w-3.5 h-3.5 text-slate-500" />
                        {log.performed_by ? 'Admin Operator' : 'System Administrator'}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3.5 text-right whitespace-nowrap">
                    <button
                      onClick={() => setSelectedLog(log)}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-950 hover:bg-slate-800 text-amber-400 border border-slate-800 transition-colors inline-flex items-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" /> View Backlog Record
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-4 py-12 text-center text-slate-400">
                  No backlog entries matched your search criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Snapshot Modal */}
      <AnimatePresence>
        {selectedLog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                  <FileJson className="w-4 h-4" /> Registration Backlog Payload Detail
                </div>
                <button
                  onClick={() => setSelectedLog(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 space-y-3">
                <div className="text-xs text-slate-300">
                  <span className="font-semibold text-slate-400">Event Action:</span>{' '}
                  <span className="text-purple-300 font-bold">{selectedLog.action}</span>
                </div>
                <div className="text-xs text-slate-300">
                  <span className="font-semibold text-slate-400">Timestamp:</span>{' '}
                  {new Date(selectedLog.created_at).toLocaleString()}
                </div>

                {selectedLog.details?.student_name && (
                  <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-xs space-y-1">
                    <p className="font-bold text-white text-sm">Registered Student Details:</p>
                    <p className="text-slate-300">Name: <strong className="text-amber-300">{selectedLog.details.student_name}</strong></p>
                    <p className="text-slate-300">Class: {selectedLog.details.student_class}</p>
                    <p className="text-slate-300 font-mono">Student ID: {selectedLog.details.student_id}</p>
                    <p className="text-slate-300 font-mono">Roll Number: {selectedLog.details.roll_number}</p>
                  </div>
                )}

                <div className="mt-3">
                  <p className="text-xs font-semibold text-slate-400 mb-1">Full Backlog JSON Snapshot:</p>
                  <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-emerald-400 overflow-x-auto max-h-60 leading-relaxed">
                    {JSON.stringify(selectedLog.details, null, 2)}
                  </pre>
                </div>
              </div>

              <div className="mt-6 text-right">
                <button
                  onClick={() => setSelectedLog(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
