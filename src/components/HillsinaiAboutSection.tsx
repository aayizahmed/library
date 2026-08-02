'use client';

import React from 'react';
import { Sparkles, BookOpen, Compass, Award, HeartHandshake } from 'lucide-react';

export function HillsinaiAboutSection() {
  return (
    <section id="about" className="py-20 bg-[#F4EDE2] border-b border-[#E2D5C3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Visual Column */}
          <div className="relative rounded-3xl overflow-hidden border border-[#D8C6B0] shadow-2xl bg-white p-2">
            <div className="relative h-96 sm:h-[480px] rounded-2xl overflow-hidden">
              <img
                src="/hillsinai_hero_bg.png"
                alt="Hillsinai Finishing School Library Atmosphere"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A1D17]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#2A1D17]/90 backdrop-blur-md border border-[#4D3A2F] text-white">
                <p className="font-serif-hillsinai text-xl font-bold text-amber-200 mb-1">550+ Curated Acquisitions</p>
                <p className="text-xs text-slate-300">English Classics, Modern Literature &amp; 315 Complete Malayalam Works (HM 01 - HM 315)</p>
              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2D5C3] text-[#8A6539] text-xs font-sans-hillsinai font-bold border border-[#D4C4B0]">
              <Sparkles className="w-3.5 h-3.5" /> About Our Library Sanctuary
            </div>

            <h2 className="font-serif-hillsinai text-3xl sm:text-5xl font-bold text-[#2B1D15] leading-tight">
              Cultivating Academic Excellence &amp; Personal Development
            </h2>

            <p className="font-sans-hillsinai text-sm sm:text-base text-[#4E3D32] leading-relaxed">
              Founded to empower students at Hillsinai Finishing School, our library serves as a quiet sanctuary of intellectual discovery. We provide access to physical literature, reference archives, quiet study spaces, and digital registration logs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/80 border border-[#E2D5C3] shadow-sm">
                <Compass className="w-6 h-6 text-[#967144] mb-2" />
                <h4 className="font-sans-hillsinai font-bold text-sm text-[#2B1D15] mb-1">Guided Research</h4>
                <p className="text-xs text-[#5D4A3E]">Access to reference catalogs and librarian assistance.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 border border-[#E2D5C3] shadow-sm">
                <HeartHandshake className="w-6 h-6 text-[#967144] mb-2" />
                <h4 className="font-sans-hillsinai font-bold text-sm text-[#2B1D15] mb-1">Community Hub</h4>
                <p className="text-xs text-[#5D4A3E]">Reading circles, literary events, and collaborative workshops.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
