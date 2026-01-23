import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
        
        {/* 1. LOGO */}
        <Link to="/" className="text-xl md:text-2xl font-black text-orange-600 shrink-0">
          Kyoshin
        </Link>

        {/* 2. SEARCH BAR (Responsive: shrinks on tablet, hidden on small mobile) */}
        <div className="flex-1 max-w-xs lg:max-w-md relative hidden sm:block">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full bg-slate-100 border-none rounded-full py-2 px-10 focus:ring-2 focus:ring-orange-500 transition-all text-sm"
          />
          <span className="absolute left-3 top-2 text-slate-400">🔍</span>
        </div>

        {/* 3. DESKTOP LINKS (Now including About and Gallery) */}
        <div className="hidden lg:flex items-center gap-5 font-medium text-slate-700 shrink-0">
          <Link to="/" className="hover:text-orange-500 transition">Home</Link>
          <Link to="/profile" className="hover:text-orange-500 transition whitespace-nowrap">About Us</Link>
          <Link to="/titp" className="hover:text-orange-500 transition">TITP</Link>
          <Link to="/gallery" className="hover:text-orange-500 transition">Gallery</Link>
          <Link to="/contact" className="hover:text-orange-500 transition">Contact</Link>
        </div>

        {/* 4. MOBILE MENU BUTTON */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden p-2 text-2xl text-slate-700 hover:bg-slate-100 rounded-lg"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t p-6 flex flex-col gap-4 font-semibold text-slate-700">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/company-profile" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/titp" onClick={() => setIsOpen(false)}>TITP</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}