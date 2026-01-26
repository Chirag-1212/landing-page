import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // Controls the pop-up

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollDown = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* MAIN HERO SECTION */}
      <section className="bg-gradient-to-br from-orange-400 via-pink-500 to-rose-500 min-h-[90vh] flex items-center relative overflow-hidden px-6 md:px-10 py-24 pt-32">
        
        {/* PARALLAX BACKGROUND ELEMENTS */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[500px] opacity-20 transition-transform duration-100 ease-out"
            style={{ transform: `translateX(-50%) translateY(${scrollY * 0.25}px)` }}
          >
            <svg viewBox="0 0 800 400" className="w-full h-full">
              <path d="M 0 400 L 400 50 L 800 400 Z" fill="white" opacity="0.3" />
            </svg>
          </div>
        </div>

        {/* SIDEBAR NAVIGATION */}
        <button 
          onClick={handleScrollDown}
          className="absolute left-6 bottom-16 hidden lg:block text-white/60 -rotate-90 origin-left text-xs tracking-[0.3em] uppercase cursor-pointer hover:text-white transition-all z-20 outline-none bg-transparent border-none"
        >
          ↓ Scroll down
        </button>

        {/* MAIN CONTENT GRID */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
          
          {/* LEFT CONTENT */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-3 px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] text-white font-bold uppercase tracking-widest mb-8 border border-white/30">
              <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
              Ministry Accredited Agency
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              Gateway to <br />
              Global Excellence
            </h1>

            <p className="mt-8 text-white/90 text-lg leading-relaxed max-w-xl">
              Kyoshin Company Ltd. is more than an employment agency. We specialize in 
              <span className="font-bold border-b-2 border-white"> bridging the gap</span> between Myanmar’s ambitious workforce 
              and Japan’s world-class industrial standards.
            </p>

            <div className="mt-12 flex flex-wrap gap-6">
              {/* APPLY NOW -> Navigates to Signup */}
              <Link 
                to="/signup" 
                className="bg-white text-pink-600 px-10 py-4 text-sm font-black uppercase tracking-widest hover:bg-orange-100 transition-all shadow-xl inline-block"
              >
                Apply Now
              </Link>

              {/* OUR MISSION -> Triggers the Pop-up */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="border-2 border-white/40 text-white px-10 py-4 text-sm font-black uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                Our Mission
              </button>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="bg-white p-12 w-full max-w-sm shadow-2xl border-t-8 border-orange-400 relative">
              <h3 className="text-gray-400 text-xs uppercase tracking-[0.2em] font-bold mb-8">Navigation</h3>
              <ul className="space-y-6 text-gray-900 text-xl font-bold">
                <li className="hover:text-pink-500 cursor-pointer flex items-center justify-between group transition-colors">
                  <Link to="/titp" className="w-full flex justify-between items-center">
                    TITP <span className="text-orange-400">→</span>
                  </Link>
                </li>
                <li className="hover:text-pink-500 cursor-pointer flex items-center justify-between group transition-colors">
                  <Link to="/categories" className="w-full flex justify-between items-center">
                    Job Categories <span className="text-orange-400">→</span>
                  </Link>
                </li>
              </ul>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <p className="text-[11px] text-gray-500 leading-relaxed italic">
                  "Our mission is a cycle of growth: we dispatch talent to learn from the best, 
                  so they can return to lead the development of Myanmar’s future."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION MODAL (The Pop-up Message) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          {/* Backdrop with Blur */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          {/* Modal Content Box */}
          <div className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl relative z-10 animate-in fade-in zoom-in duration-300">
            {/* Header */}
            <div className="bg-orange-600 p-8 text-white">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-black uppercase tracking-tighter">Our Mission</h2>
                <button 
                  onClick={() => setIsModalOpen(false)} 
                  className="text-white/80 hover:text-white hover:rotate-90 transition-all text-2xl"
                >
                  ✕
                </button>
              </div>
              <p className="text-orange-100 text-sm italic">"Dispatching talent, returning leaders."</p>
            </div>
            
            {/* Form & Info */}
            <div className="p-8">
              <p className="text-slate-600 leading-relaxed mb-8">
                Kyoshin is dedicated to elevating Myanmar's industrial workforce. Have a specific enquiry or need a corporate quote? Send us a message below.
              </p>
              
              <form className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                  <input type="email" placeholder="example@mail.com" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-orange-500 outline-none text-slate-900" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Message / Quote Inquiry</label>
                  <textarea rows="3" placeholder="How can we help your organization?" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-orange-500 outline-none text-slate-900 resize-none"></textarea>
                </div>
                <button type="button" className="w-full bg-slate-900 hover:bg-orange-600 text-white font-black py-4 rounded-xl transition-all shadow-lg">
                  SEND REQUEST
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}