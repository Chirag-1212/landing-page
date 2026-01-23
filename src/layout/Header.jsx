import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black text-orange-600">KAKEHASHI</Link>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex gap-8 font-medium text-slate-700">
          <Link title="Home" to="/" className="hover:text-orange-500 transition">Home</Link>
          <Link title="Programs" to="/titp" className="hover:text-orange-500 transition">TITP</Link>
          <Link title="Contact" to="/contact" className="hover:text-orange-500 transition">Contact</Link>
        </div>

        {/* Mobile Toggle Button (Hidden on Desktop) */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 flex flex-col p-6 gap-4 font-semibold text-slate-700">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/titp" onClick={() => setIsOpen(false)}>TITP</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}