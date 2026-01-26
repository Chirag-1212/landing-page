import { useEffect } from 'react';
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function CompanyProfile() {

  useEffect(() => {
    document.title = "Home | Kakehashi Myanmar";
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Add the Header here */}
      <Header />

      {/* 2. Your main content container */}
      <main className="flex-grow bg-white pt-32 pb-20 px-10">
        <div className="max-w-5xl mx-auto">
          
          <header className="mt-12 mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-orange-400"></span>
              <span className="text-sm font-bold tracking-[0.3em] uppercase text-gray-400">Official Profile</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
              Kakehashi Myanmar <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">Co., Ltd.</span>
            </h1>
          </header>

          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* LEFT: The Story */}
            <div className="lg:col-span-2 space-y-8 text-gray-600 leading-relaxed text-lg">
              <p>
                Established in July 2012, **Kakehashi Myanmar Co., Ltd.** serves as a vital bridge between Myanmar's potential and Japanese industrial excellence. Our journey began in 2009 with the Japanese and English Language Training Centre (JETC), focusing on human resource development.
              </p>
              <p>
                Since then, we have expanded into comprehensive consultancy and interpreter services to support Japanese investment in Myanmar. In 2016, we launched our **Overseas Employment Agency** to empower Myanmar's workforce through the Technical Intern Training Program (TITP) in Japan.
              </p>
              
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mt-10">
                <h3 className="text-slate-900 font-bold mb-4 uppercase tracking-widest text-sm">Primary Business Segments</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500">✔</span> Corporate Consultancy
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500">✔</span> Human Resource Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500">✔</span> Car Rental Services
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500">✔</span> Language Education (JETC)
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT: Corporate Data Table */}
            <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-orange-400 font-bold uppercase text-xs tracking-widest mb-8 border-b border-white/10 pb-4">Corporate Data</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-white/40 text-[10px] uppercase font-bold mb-1">Registration No.</p>
                    <p className="text-sm font-medium">1284/2012-2013</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase font-bold mb-1">Agency License</p>
                    <p className="text-sm font-medium">No. 071/2016</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase font-bold mb-1">Capital</p>
                    <p className="text-sm font-medium">50 Million Kyat</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase font-bold mb-1">Annual Revenue</p>
                    <p className="text-sm font-medium">116.6 Million Kyat (2016)</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase font-bold mb-1">Management</p>
                    <p className="text-sm font-bold">Thant Sin Naing</p>
                    <p className="text-[10px] text-white/60">Managing Director</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-500/20 blur-3xl rounded-full"></div>
            </div>
          </div>

          {/* Schools Section */}
          <section className="mt-20 pt-20 border-t border-slate-100">
            <h3 className="text-2xl font-black text-slate-900 mb-10">Educational Institutions</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group p-8 border border-slate-200 rounded-2xl hover:border-orange-400 transition-all">
                <h4 className="font-bold text-lg mb-2">JETC</h4>
                <p className="text-sm text-gray-500">Japanese English Training Centre (Since 2009)</p>
              </div>
              <div className="group p-8 border border-slate-200 rounded-2xl hover:border-pink-500 transition-all">
                <h4 className="font-bold text-lg mb-2">Kyoshin JETC</h4>
                <p className="text-sm text-gray-500">Japanese Language Academy Partnership</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* 3. Add the Footer here */}
      <Footer />
    </div>
  );
}