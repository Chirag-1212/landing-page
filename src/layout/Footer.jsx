import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        
        {/* Top Section: Brand & Navigation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-tr from-orange-400 to-rose-500 rounded-lg"></div>
              <h2 className="text-3xl font-black lowercase tracking-tighter">Kyoshin</h2>
            </div>
            <p className="max-w-sm text-gray-400 leading-relaxed text-sm italic mb-6">
              "Bridging Myanmar's potential with Japan's industrial excellence."
            </p>
            
            {/* SOCIAL LINKS */}
            <div className="flex gap-4">
              <a 
                href="http://www.facebook.com/kakehashimyanmar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 transition-all duration-300 border border-white/10"
                title="Follow us on Facebook"
              >
                <span className="text-xl">f</span> 
              </a>
              <a 
                href="mailto:info@kakehashimm.com" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-rose-500 transition-all duration-300 border border-white/10"
                title="Email us"
              >
                <span className="text-xl">✉</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400 mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li><Link to="/titp" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">TITP Program</Link></li>
              <li><Link to="/categories" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Job Categories</Link></li>
              <li><Link to="/training" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Training Centers</Link></li>
              <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-rose-500 mb-8">Connect</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              No. 315 (B), Thitsar Road, Ward 9, South Okkalarpa Tsp., Yangon
            </p>
            <a href="mailto:info@kakehashimm.com" className="text-sm text-orange-400 hover:text-white transition-colors break-all">
              info@kakehashimm.com
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 text-center md:text-left">
            © 2026 Kyoshin Company Ltd <span className="mx-2 text-pink-500">|</span> All Rights Reserved
          </div>
          
          <div className="flex gap-10 text-[10px] uppercase tracking-widest font-black text-gray-400">
            <Link to="/profile" onClick={() => window.scrollTo(0, 0)} className="hover:text-orange-400 transition-colors">Company Profile</Link>
            <Link to="/terms" onClick={() => window.scrollTo(0, 0)} className="hover:text-rose-500 transition-colors">Terms</Link>
          </div>
        </div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-rose-500/10 blur-[100px] rounded-full"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-orange-400/5 blur-[100px] rounded-full"></div>
    </footer>
  );
}