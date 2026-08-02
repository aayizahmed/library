'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function HillsinaiHero() {
  return (
    <section id="home" className="relative w-full min-h-[640px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-[#F9F6F0]">
      {/* Background Image Layer matching screenshot */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url('/hillsinai_hero_bg.png')` }}
      />

      {/* Soft Light Overlay Gradient for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#F9F6F0] via-[#F9F6F0]/60 to-[#F9F6F0]/40 pointer-events-none" />
      <div className="absolute inset-0 bg-[#2B1D15]/10 pointer-events-none" />

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          {/* Top Subtitle */}
          <p className="font-serif-hillsinai italic text-2xl sm:text-3xl text-[#3A291E] font-medium tracking-wide">
            Welcome to the
          </p>

          {/* Main Title Matching Image */}
          <h1 className="font-serif-hillsinai text-4xl sm:text-6xl md:text-7xl font-bold text-[#2B1D15] tracking-tight leading-[1.1] drop-shadow-sm max-w-3xl mx-auto">
            Hillsinai Finishing School Library
          </h1>

          {/* Gold Diamond Ornament */}
          <div className="flex items-center justify-center gap-3 py-1">
            <span className="h-[1px] w-12 bg-[#A88252]/60" />
            <span className="text-[#A88252] text-xs">✦</span>
            <span className="h-[1px] w-12 bg-[#A88252]/60" />
          </div>

          {/* Subheading Paragraph */}
          <p className="font-sans-hillsinai text-base sm:text-lg text-[#4E3D32] max-w-2xl mx-auto leading-relaxed font-normal">
            A place to learn, explore and grow. Our library is more than just books— it&apos;s a space for knowledge, creativity and inspiration.
          </p>

          {/* Hero Action Button */}
          <div className="pt-4">
            <a
              href="#catalog"
              className="inline-block px-8 py-3.5 rounded-xl font-sans-hillsinai font-medium text-sm sm:text-base bg-[#967144] hover:bg-[#805D34] text-white shadow-xl shadow-[#967144]/25 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
            >
              Explore Collection
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
