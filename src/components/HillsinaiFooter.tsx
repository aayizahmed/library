'use client';

import React from 'react';
import Link from 'next/link';
import { Library, MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export function HillsinaiFooter() {
  const { isAdmin } = useAuth();

  return (
    <footer id="contact" className="bg-[#2A1D17] text-white border-t border-[#3E2D23] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#3E2D23]">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#967144] flex items-center justify-center text-white shadow-md">
                <Library className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif-hillsinai font-bold text-lg text-amber-100 tracking-wider">Hillsinai Library</h3>
                <p className="text-[10px] font-sans-hillsinai uppercase tracking-[0.2em] text-amber-200/60">Finishing School</p>
              </div>
            </div>
            <p className="text-xs text-amber-100/70 leading-relaxed">
              A peaceful sanctuary dedicated to fostering curiosity, critical thinking, and a lifelong passion for literature.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-sans-hillsinai font-bold text-sm text-amber-200 uppercase tracking-wider mb-4">Quick Navigation</h4>
            <ul className="space-y-2.5 text-xs text-amber-100/70">
              <li><a href="#home" className="hover:text-amber-300 transition-colors">Home &amp; Hero Banner</a></li>
              <li><a href="#about" className="hover:text-amber-300 transition-colors">About Our Sanctuary</a></li>
              <li><a href="#catalog" className="hover:text-amber-300 transition-colors">Search 550+ Book Catalog</a></li>
              <li><a href="#events" className="hover:text-amber-300 transition-colors">Upcoming Events</a></li>
              <li><a href="/due-books" className="hover:text-amber-300 transition-colors">Book Due &amp; Fines</a></li>
            </ul>
          </div>

          {/* Col 3: Hours & Operations */}
          <div>
            <h4 className="font-sans-hillsinai font-bold text-sm text-amber-200 uppercase tracking-wider mb-4">Library Hours</h4>
            <ul className="space-y-2 text-xs text-amber-100/70">
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Monday – Friday: 8:00 AM – 6:00 PM</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Saturday: 9:00 AM – 4:00 PM</span>
              </li>
              <li className="text-amber-300/60 text-[11px] pt-1">
                Sunday &amp; School Holidays: Closed
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Admin */}
          <div>
            <h4 className="font-sans-hillsinai font-bold text-sm text-amber-200 uppercase tracking-wider mb-4">Visit Us</h4>
            <ul className="space-y-2.5 text-xs text-amber-100/70 mb-5">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Hillsinai Finishing School Campus, Main Building Floor 2</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>library@hillsinai.edu</span>
              </li>
            </ul>

            {isAdmin ? (
              <Link
                href="/admin/dashboard"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-semibold hover:bg-emerald-500/30 transition-colors"
              >
                <ShieldCheck className="w-4 h-4" /> Admin Portal Active
              </Link>
            ) : (
              <Link
                href="/admin/login"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#3D2B22] text-amber-300 border border-[#523C30] text-xs font-semibold hover:bg-[#4D3A2F] transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-amber-400" /> Librarian Portal Login
              </Link>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-amber-200/50 gap-4">
          <p>© {new Date().getFullYear()} Hillsinai Finishing School Library. All rights reserved.</p>
          <p className="font-mono text-[11px]">System Status: Connected to Live Database (553 Acquisitions)</p>
        </div>
      </div>
    </footer>
  );
}
