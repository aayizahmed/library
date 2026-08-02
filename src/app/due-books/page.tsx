'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BookDueSection } from '@/components/BookDueSection';

export default function DueBooksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050814]">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <BookDueSection />
      </main>

      <Footer />
    </div>
  );
}
