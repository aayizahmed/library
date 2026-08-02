'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Sparkles, ShieldCheck, GraduationCap } from 'lucide-react';

interface SplashScreenProps {
  onFinish?: () => void;
  minimumDuration?: number; // ms
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  onFinish,
  minimumDuration = 2200,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if splash screen was already shown in this session
    const hasSeenSplash = sessionStorage.getItem('oakridge_lib_splash_seen');
    if (hasSeenSplash) {
      setIsVisible(false);
      if (onFinish) onFinish();
      return;
    }

    // Animate progress bar smoothly over the minimum duration
    const intervalTime = 30;
    const increment = 100 / (minimumDuration / intervalTime);
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    const finishTimer = setTimeout(() => {
      sessionStorage.setItem('oakridge_lib_splash_seen', 'true');
      setIsVisible(false);
      if (onFinish) onFinish();
    }, minimumDuration);

    return () => {
      clearInterval(timer);
      clearTimeout(finishTimer);
    };
  }, [minimumDuration, onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050814] text-white overflow-hidden select-none"
        >
          {/* Glowing Ambient Background Lights */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/20 via-indigo-600/20 to-cyan-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
          <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-amber-500/15 rounded-full blur-[100px] pointer-events-none" />

          {/* Main Glassmorphic Card */}
          <div className="relative z-10 flex flex-col items-center max-w-md px-8 py-10 rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-2xl shadow-2xl text-center">
            
            {/* Animated Logo Emblem */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotate: -15 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative mb-6"
            >
              {/* Outer pulsing ring */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-300 opacity-30 blur-md animate-pulse" />
              
              <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 via-amber-600 to-indigo-700 flex items-center justify-center shadow-xl border border-amber-300/30">
                <BookOpen className="w-10 h-10 text-slate-950 stroke-[2.2]" />
              </div>
            </motion.div>

            {/* School Title & Subtitle */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-2 mb-8"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Oakridge Academic Portal
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                School Library System
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">
                Book Registration, Cataloging & Audit Logs
              </p>
            </motion.div>

            {/* Features Pill Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center justify-center gap-2 mb-8 text-[11px] text-slate-300"
            >
              <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400" /> Student Check-In
              </span>
              <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> RLS Protected
              </span>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-full space-y-2">
              <div className="w-full h-2 bg-slate-800/80 rounded-full overflow-hidden p-0.5 border border-slate-700/50">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-cyan-400 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.6)]"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
                <span>Initializing System...</span>
                <span>{Math.round(Math.min(progress, 100))}%</span>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
