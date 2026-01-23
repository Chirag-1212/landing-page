import { Link } from 'react-router-dom';

export default function Footer() { // Changed name from Header to Footer
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
            <p className="max-w-sm text-gray-400 leading-relaxed text-sm italic">
              "Bridging Myanmar's potential with Japan's industrial excellence."
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400 mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li><Link to="/titp" className="hover:text-white transition-colors">TITP Program</Link></li>
              <li><Link to="/categories" className="hover:text-white transition-colors">Job Categories</Link></li>
              <li><Link to="/training" className="hover:text-white transition-colors">Training Centers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-rose-500 mb-8">Headquarters</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              No. 315 (B), Thitsar Road, Ward 9, South Okkalarpa Tsp., Yangon
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500">
            © 2026 Kyoshin Company Ltd <span className="mx-2 text-pink-500">|</span> All Rights Reserved
          </div>
          
          <div className="flex gap-10 text-[10px] uppercase tracking-widest font-black text-gray-400">
            <Link to="/profile" className="hover:text-orange-400 transition-colors">Company Profile</Link>
            <Link to="/terms" className="hover:text-rose-500 transition-colors">Terms and Conditions</Link>
          </div>
        </div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-rose-500/10 blur-[100px] rounded-full"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-orange-400/5 blur-[100px] rounded-full"></div>
    </footer>
  );
}