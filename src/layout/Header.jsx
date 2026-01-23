import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-50/90 backdrop-blur-md border-b border-slate-200 px-10 py-4 text-slate-900">
      {/* FIXED GREYISH HEADER FOR LIGHT BACKGROUNDS */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-3xl font-black lowercase tracking-tighter text-slate-900"> 
          Kyoshin Company Ltd.
        </div>
        
        <ul className="hidden md:flex gap-10 font-bold text-sm uppercase tracking-wider">
          <li><Link to="/" className="cursor-pointer hover:text-orange-500 transition-colors">Home</Link></li>
          <li><Link to="/profile" className="cursor-pointer hover:text-orange-500 transition-colors">About Us</Link></li>
          <li><Link to="/titp" className="cursor-pointer hover:text-orange-500 transition-colors">Courses</Link></li>
          <li><Link to="/contact" className="cursor-pointer hover:text-orange-500 transition-colors">Contacts</Link></li>
        </ul>

        <div className="flex items-center gap-6">
          {/* Search bar with darker border and text */}
          <div className="flex items-center bg-slate-200/50 hover:bg-slate-200 transition-all rounded-lg px-3 py-2 cursor-pointer border border-slate-300">
            <span className="text-xl">🔍</span>
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border-none outline-none text-slate-900 text-sm ml-2 w-24 placeholder:text-slate-500 focus:w-40 transition-all"
            />
          </div>
          
          {/* Button changed to dark theme to stand out */}
          <button className="bg-slate-900 text-white px-6 py-2 font-bold hover:bg-orange-500 transition-all cursor-pointer rounded-sm">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
}