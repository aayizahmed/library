'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck, LogOut, Sparkles, BookOpen, Clock, Menu, X } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export function HillsinaiNavbar() {
  const pathname = usePathname();
  const { user, isAdmin, signOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Resources', href: '#catalog' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F9F6F0] border-b border-[#E8DCCB] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Hillsinai Crest Brand Logo */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="flex flex-col items-center justify-center">
            {/* Custom Gold Star + Open Book Emblem */}
            <svg className="w-9 h-9 text-[#A88252] group-hover:scale-105 transition-transform duration-300" viewBox="0 0 100 80" fill="currentColor">
              {/* Star */}
              <polygon points="50,2 53,12 63,12 55,18 58,28 50,22 42,28 45,18 37,12 47,12" fill="#C6A066" />
              {/* Left Pages */}
              <path d="M 46,35 C 30,28 10,32 5,36 L 5,68 C 10,64 30,60 46,67 Z" fill="none" stroke="#8A6539" strokeWidth="4" strokeLinejoin="round" />
              <path d="M 46,41 C 32,35 15,38 10,41 L 10,67 C 15,64 32,61 46,67 Z" fill="none" stroke="#A88252" strokeWidth="2" />
              {/* Right Pages */}
              <path d="M 54,35 C 70,28 90,32 95,36 L 95,68 C 90,64 70,60 54,67 Z" fill="none" stroke="#8A6539" strokeWidth="4" strokeLinejoin="round" />
              <path d="M 54,41 C 68,35 85,38 90,41 L 90,67 C 85,64 68,61 54,67 Z" fill="none" stroke="#A88252" strokeWidth="2" />
              {/* Spine */}
              <line x1="50" y1="33" x2="50" y2="70" stroke="#8A6539" strokeWidth="4" />
            </svg>
          </div>

          <div className="flex flex-col leading-tight">
            <span className="font-serif-hillsinai font-bold text-xl sm:text-2xl text-[#2B1D15] tracking-wider uppercase group-hover:text-[#8A6539] transition-colors">
              Hillsinai
            </span>
            <span className="text-[10px] font-sans-hillsinai font-semibold uppercase tracking-[0.25em] text-[#6E5A4C] -mt-1">
              Finishing School
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="h-[1px] w-3 bg-[#A88252]" />
              <span className="text-[9px] font-sans-hillsinai font-extrabold uppercase tracking-[0.3em] text-[#8A6539]">
                Library
              </span>
              <span className="h-[1px] w-3 bg-[#A88252]" />
            </div>
          </div>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-sans-hillsinai font-medium text-[#4A382C] hover:text-[#8A6539] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#8A6539] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Button & Admin Link */}
        <div className="flex items-center gap-3">
          {isAdmin ? (
            <div className="flex items-center gap-2">
              <Link
                href="/admin/dashboard"
                className="px-4 py-2.5 rounded-xl text-xs font-sans-hillsinai font-bold bg-[#8A6539] hover:bg-[#74532B] text-white shadow-md transition-all flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-amber-200" />
                <span>Admin Dashboard</span>
              </Link>
              <button
                onClick={() => signOut()}
                className="p-2 text-[#6E5A4C] hover:text-rose-700 hover:bg-rose-50 rounded-xl transition-colors"
                title="Log Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <a
              href="#catalog"
              className="px-5 py-2.5 rounded-xl text-sm font-sans-hillsinai font-medium bg-[#967144] hover:bg-[#805D34] text-white shadow-md shadow-[#967144]/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
            >
              Explore Library
            </a>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden text-[#2B1D15] hover:bg-[#EFE8DC] rounded-xl transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F4EDE2] border-b border-[#E8DCCB] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-sans-hillsinai font-semibold text-[#2B1D15] hover:text-[#8A6539] py-1.5"
            >
              {link.name}
            </a>
          ))}
          {!isAdmin && (
            <Link
              href="/admin/login"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-sans-hillsinai font-bold text-[#8A6539] pt-2 border-t border-[#E2D5C3]"
            >
              Librarian Login
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
