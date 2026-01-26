import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to handle both scrolling and closing the menu
  const handleNavigate = () => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
        
        {/* 1. LOGO */}
        <Link to="/" onClick={handleNavigate} className="text-xl md:text-2xl font-black text-orange-600 shrink-0">
          Kyoshin
        </Link>

        {/* 2. SEARCH BAR */}
        <div className="flex-1 max-w-xs lg:max-w-md relative hidden sm:block">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full bg-slate-100 border-none rounded-full py-2 px-10 focus:ring-2 focus:ring-orange-500 transition-all text-sm"
          />
          <span className="absolute left-3 top-2.5 text-xs">🔍</span>
        </div>

        {/* 3. DESKTOP LINKS */}
        <div className="hidden lg:flex items-center gap-5 font-medium text-slate-700 shrink-0">
          <Link to="/" onClick={handleNavigate} className="hover:text-orange-500 transition">Home</Link>
          <Link to="/profile" onClick={handleNavigate} className="hover:text-orange-500 transition whitespace-nowrap">About Us</Link>
          <Link to="/titp" onClick={handleNavigate} className="hover:text-orange-500 transition">TITP</Link>
          <Link to="/gallery" onClick={handleNavigate} className="hover:text-orange-500 transition">Gallery</Link>
          <Link to="/contact" onClick={handleNavigate} className="hover:text-orange-500 transition border-2 border-orange-500 px-4 py-2 rounded-full text-orange-600 hover:bg-orange-500 hover:text-white">Contact</Link>
        </div>

        {/* 4. MOBILE MENU BUTTON */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden p-2 text-2xl text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t p-6 flex flex-col gap-6 font-bold text-slate-700 animate-in slide-in-from-top duration-300">
          <Link to="/" onClick={handleNavigate} className="hover:text-orange-600 transition-colors">Home</Link>
          <Link to="/profile" onClick={handleNavigate} className="hover:text-orange-600 transition-colors">About Us</Link>
          <Link to="/titp" onClick={handleNavigate} className="hover:text-orange-600 transition-colors">TITP</Link>
          <Link to="/gallery" onClick={handleNavigate} className="hover:text-orange-600 transition-colors">Gallery</Link>
          <Link to="/contact" onClick={handleNavigate} className="bg-orange-600 text-white p-4 rounded-xl text-center">Contact Us</Link>
        </div>
      )}
    </nav>
  );
}