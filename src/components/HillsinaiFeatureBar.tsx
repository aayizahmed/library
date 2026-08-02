'use client';

import React from 'react';
import { BookOpen, User, Calendar, Lightbulb } from 'lucide-react';

export function HillsinaiFeatureBar() {
  const pillars = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Wide Collection',
      description: 'Books for every mind and every passion.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: 'Quiet Space',
      description: 'A peaceful environment to read and reflect.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Events & Activities',
      description: 'Engaging programs for every learner.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-disabled-1a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Learn & Grow',
      description: 'Inspire today, achieve tomorrow.',
    },
  ];

  return (
    <section className="w-full bg-[#2A1D17] text-white border-t border-b border-[#3E2D23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#453228]">
          {pillars.map((item, idx) => (
            <div
              key={item.title}
              className={`flex items-start gap-4 ${idx !== 0 ? 'sm:pl-6 pt-6 sm:pt-0' : ''}`}
            >
              <div className="p-2.5 rounded-2xl bg-[#3D2B22] border border-[#523C30] shrink-0 shadow-inner">
                {item.icon}
              </div>
              <div>
                <h3 className="font-sans-hillsinai font-bold text-base text-amber-100 tracking-tight mb-1">
                  {item.title}
                </h3>
                <p className="font-sans-hillsinai text-xs text-amber-200/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
