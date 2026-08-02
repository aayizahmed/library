'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, QrCode, UserCheck, Search, Camera, CheckCircle2, User, GraduationCap, RefreshCw, Hash, BookOpen } from 'lucide-react';
import { SCHOOL_ROSTER, StudentProfile } from '@/lib/studentRoster';

export interface StudentInfo {
  name: string;
  studentClass: string;
  studentId: string;
  rollNumber: string;
  scannedAt: string;
}

interface StudentIdentifyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onIdentify: (info: StudentInfo) => void;
  currentStudent: StudentInfo | null;
}

export function StudentIdentifyModal({
  isOpen,
  onClose,
  onIdentify,
  currentStudent,
}: StudentIdentifyModalProps) {
  const [activeTab, setActiveTab] = useState<'roster' | 'qr' | 'manual'>('roster');
  const [rosterSearch, setRosterSearch] = useState('');
  const [scanning, setScanning] = useState(false);
  const [scanSuccess, setScanSuccess] = useState(false);

  // Manual Form Fields
  const [name, setName] = useState('');
  const [studentClass, setStudentClass] = useState('Grade 10-A');
  const [rollNumber, setRollNumber] = useState('');

  // Filter 160 students roster
  const filteredRoster = useMemo(() => {
    if (!rosterSearch.trim()) return SCHOOL_ROSTER.slice(0, 10);
    const q = rosterSearch.toLowerCase();
    return SCHOOL_ROSTER.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.studentId.toLowerCase().includes(q) ||
        s.rollNumber.toLowerCase().includes(q) ||
        s.studentClass.toLowerCase().includes(q)
    ).slice(0, 10);
  }, [rosterSearch]);

  if (!isOpen) return null;

  const handleSelectFromRoster = (profile: StudentProfile) => {
    onIdentify({
      name: profile.name,
      studentClass: profile.studentClass,
      studentId: profile.studentId,
      rollNumber: profile.rollNumber,
      scannedAt: new Date().toISOString(),
    });
    onClose();
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const info: StudentInfo = {
      name: name.trim(),
      studentClass: studentClass.trim(),
      studentId: `STU-2026-${Math.floor(100 + Math.random() * 900)}`,
      rollNumber: rollNumber.trim() || `R-${1000 + Math.floor(Math.random() * 900)}`,
      scannedAt: new Date().toISOString(),
    };

    onIdentify(info);
    onClose();
  };

  const handleSimulatedQRScan = () => {
    setScanning(true);
    setScanSuccess(false);

    setTimeout(() => {
      setScanning(false);
      setScanSuccess(true);

      const randomStudent = SCHOOL_ROSTER[Math.floor(Math.random() * SCHOOL_ROSTER.length)];

      setTimeout(() => {
        onIdentify({
          name: randomStudent.name,
          studentClass: randomStudent.studentClass,
          studentId: randomStudent.studentId,
          rollNumber: randomStudent.rollNumber,
          scannedAt: new Date().toISOString(),
        });
        setScanSuccess(false);
        onClose();
      }, 600);
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight">Student Identity &amp; Registration</h2>
                <p className="text-xs text-slate-400">Search 160-Student Roster, Scan QR, or Enter Details</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mode Switch Tabs */}
          <div className="grid grid-cols-3 gap-1.5 p-1.5 bg-slate-950 rounded-2xl border border-slate-800 my-5 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('roster')}
              className={`py-2 px-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'roster'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Search className="w-3.5 h-3.5" /> Roster (160)
            </button>
            <button
              onClick={() => setActiveTab('qr')}
              className={`py-2 px-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'qr'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <QrCode className="w-3.5 h-3.5" /> Scan QR
            </button>
            <button
              onClick={() => setActiveTab('manual')}
              className={`py-2 px-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'manual'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <User className="w-3.5 h-3.5" /> Custom
            </button>
          </div>

          {/* TAB 1: 160-Student Roster Search */}
          {activeTab === 'roster' && (
            <div className="space-y-4">
              <div className="relative">
                <Search className="w-4 h-4 text-amber-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="Search among 160 students by name, class, or roll #..."
                  value={rosterSearch}
                  onChange={(e) => setRosterSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="max-h-64 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                {filteredRoster.map((studentProfile) => (
                  <button
                    key={studentProfile.studentId}
                    onClick={() => handleSelectFromRoster(studentProfile)}
                    className="w-full p-3 rounded-2xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800 text-left transition-all group flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold text-xs text-white group-hover:text-amber-400 transition-colors">
                        {studentProfile.name}
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                        <span className="text-amber-300">{studentProfile.studentClass}</span>
                        <span>• Roll: {studentProfile.rollNumber}</span>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800 group-hover:border-amber-500/30">
                      {studentProfile.studentId}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: QR Code Scanner */}
          {activeTab === 'qr' && (
            <div className="space-y-4 text-center">
              <div className="relative w-full h-44 rounded-2xl bg-slate-950 border-2 border-dashed border-slate-800 flex flex-col items-center justify-center p-4 overflow-hidden">
                {scanning && (
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, 150, 0] }}
                    transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
                    className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_15px_#f59e0b]"
                  />
                )}

                {scanSuccess ? (
                  <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-emerald-400">
                    <CheckCircle2 className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-xs font-bold">QR Verified with Roster!</p>
                  </motion.div>
                ) : scanning ? (
                  <div className="text-amber-400 space-y-2">
                    <Camera className="w-10 h-10 mx-auto animate-pulse" />
                    <p className="text-xs font-semibold">Scanning Student Barcode / QR Card...</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <QrCode className="w-12 h-12 text-slate-600 mx-auto" />
                    <p className="text-xs text-slate-400 max-w-xs mx-auto">
                      Hold personal student QR card to camera or trigger instant scan below.
                    </p>
                  </div>
                )}
              </div>

              <button
                onClick={handleSimulatedQRScan}
                disabled={scanning}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
              >
                {scanning ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" /> Verifying Student Badge...
                  </>
                ) : (
                  <>
                    <Camera className="w-4 h-4" /> Trigger Roster Student QR Scan
                  </>
                )}
              </button>
            </div>
          )}

          {/* TAB 3: Manual Custom Student Form */}
          {activeTab === 'manual' && (
            <form onSubmit={handleManualSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Student Full Name <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Liam Vance"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Class / Grade Level <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <GraduationCap className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Grade 10-A"
                    value={studentClass}
                    onChange={(e) => setStudentClass(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Roll / Admission Number</label>
                <div className="relative">
                  <Hash className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    placeholder="e.g. R-1042"
                    value={rollNumber}
                    onChange={(e) => setRollNumber(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 font-mono"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors flex items-center justify-center gap-2 shadow-md shadow-amber-500/20"
                >
                  <UserCheck className="w-4 h-4" /> Confirm Student Registration Profile
                </button>
              </div>
            </form>
          )}

          {/* Active Student Badge Info */}
          {currentStudent && (
            <div className="mt-5 p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-emerald-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Active: <strong>{currentStudent.name}</strong> ({currentStudent.studentClass}) [{currentStudent.rollNumber}]</span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
