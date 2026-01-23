import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
        
        {/* 1. LOGO: Stays on the left */}
        <Link to="/" className="text-xl md:text-2xl font-black text-orange-600 shrink-0">
          KAKEHASHI
        </Link>

        {/* 2. SEARCH BAR: Flexible width, hidden or smaller on mobile */}
        <div className="flex-1 max-w-md relative group hidden sm:block">
          <input 
            type="text" 
            placeholder="Search programs..." 
            className="w-full bg-slate-100 border-none rounded-full py-2 px-10 focus:ring-2 focus:ring-orange-500 transition-all"
          />
          <span className="absolute left-3 top-2.5 text-slate-400">🔍</span>
        </div>

        {/* 3. DESKTOP LINKS: Hidden on mobile */}
        <div className="hidden lg:flex items-center gap-6 font-medium text-slate-700 shrink-0">
          <Link to="/" className="hover:text-orange-500">Home</Link>
          <Link to="/titp" className="hover:text-orange-500">TITP</Link>
          <Link to="/contact" className="hover:text-orange-500">Contact</Link>
        </div>

        {/* 4. MOBILE MENU BUTTON: Stays on the right */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden p-2 text-2xl text-slate-700 hover:bg-slate-100 rounded-lg"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* MOBILE DROPDOWN: Shows when button is clicked */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t p-6 flex flex-col gap-4 animate-in slide-in-from-top">
          {/* Show search bar inside mobile menu if hidden above */}
          <div className="sm:hidden relative">
            <input type="text" placeholder="Search..." className="w-full bg-slate-100 rounded-lg p-2 px-8" />
            <span className="absolute left-2 top-2">🔍</span>
          </div>
          <Link to="/" onClick={() => setIsOpen(false)} className="py-2 border-b">Home</Link>
          <Link to="/titp" onClick={() => setIsOpen(false)} className="py-2 border-b">TITP</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="py-2 border-b">Contact</Link>
        </div>
      )}
    </nav>
  );
}