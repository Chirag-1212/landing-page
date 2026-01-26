import React, { useEffect } from 'react';
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us | Kyoshin";
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />

      <main className="flex-grow"> 
        {/* HERO SECTION: Minimal & Bold */}
        <section className="pt-40 pb-20 bg-slate-950 text-white px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              Let's build your <span className="text-orange-500">future.</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Have questions about TITP or working in Japan? Our team at Kyoshin is ready to guide you every step of the way.
            </p>
          </div>
        </section>

        {/* INTERACTIVE GRID SECTION */}
        <section className="max-w-7xl mx-auto px-6 -mt-16 mb-24">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* FORM CARD (Takes 2 columns) */}
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-2xl shadow-slate-200/60 p-8 md:p-12 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                Quick Enquiry
                <div className="h-1 w-12 bg-orange-500 rounded-full"></div>
              </h3>
              
              <form className="grid md:grid-cols-2 gap-8">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border-2 border-transparent focus:border-orange-500 focus:bg-white rounded-2xl p-4 transition-all outline-none text-slate-900" />
                </div>
                
                {/* Email Address - ADDED */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                  <input type="email" placeholder="example@mail.com" className="w-full bg-slate-50 border-2 border-transparent focus:border-orange-500 focus:bg-white rounded-2xl p-4 transition-all outline-none text-slate-900" />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone Number</label>
                  <input type="tel" placeholder="09..." className="w-full bg-slate-50 border-2 border-transparent focus:border-orange-500 focus:bg-white rounded-2xl p-4 transition-all outline-none text-slate-900" />
                </div>

                {/* Interested Program */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Interested Program</label>
                  <div className="relative">
                    <select className="w-full bg-slate-50 border-2 border-transparent focus:border-orange-500 focus:bg-white rounded-2xl p-4 transition-all outline-none appearance-none text-slate-900">
                      <option>TITP (Technical Intern Training Program)</option>
                      <option>SSW (Specified Skilled Worker)</option>
                      <option>Japanese Language School</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">▼</div>
                  </div>
                </div>

                {/* Message */}
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message</label>
                  <textarea rows="4" placeholder="How can we help you?" className="w-full bg-slate-50 border-2 border-transparent focus:border-orange-500 focus:bg-white rounded-2xl p-4 transition-all outline-none text-slate-900 resize-none"></textarea>
                </div>

                {/* Submit Button */}
                <button type="button" className="md:col-span-2 bg-orange-600 hover:bg-slate-900 text-white font-black py-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl shadow-orange-200 hover:shadow-slate-300">
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* INFO CARD (Takes 1 column) */}
            <div className="bg-orange-600 rounded-3xl p-10 text-white flex flex-col justify-between shadow-2xl shadow-orange-200">
              <div>
                <h3 className="text-2xl font-bold mb-8">Contact Details</h3>
                <div className="space-y-10">
                  <div className="flex gap-4">
                    <span className="text-3xl text-orange-200">📍</span>
                    <div>
                      <p className="font-bold">Our Office</p>
                      <p className="text-orange-100 text-sm leading-relaxed">No. 315 (B), Thitsar Road, Ward 9, South Okkalarpa Tsp., Yangon</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-3xl text-orange-200">📞</span>
                    <div>
                      <p className="font-bold">Phone</p>
                      <p className="text-orange-100 text-sm">+95-9-2549 22440</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-3xl text-orange-200">✉️</span>
                    <div>
                      <p className="font-bold">Email</p>
                      <p className="text-orange-100 text-sm">info@kakehashimm.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-orange-400/30">
                <p className="text-xs uppercase tracking-widest font-bold mb-4 opacity-60">Follow Us</p>
                <a href="http://www.facebook.com/kakehashimyanmar" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/40 p-3 rounded-xl transition-all inline-block">
                  Facebook →
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* MAP SECTION: Centralized with Border & Full Color */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900">Our Location</h3>
            <p className="text-slate-500">Visit our training center in South Okkalarpa</p>
          </div>
          
          <div className="relative group">
            {/* The Border Wrapper */}
            <div className="rounded-[2.5rem] p-3 bg-white shadow-2xl border border-slate-100 overflow-hidden transition-transform duration-700 hover:scale-[1.01]">
              <div className="rounded-[2rem] overflow-hidden h-[500px] border-4 border-orange-500/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.605972847116!2d96.1911473148184!3d16.84594198840544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c19318a6e8f49f%3A0x6b4f7300f28e678a!2sKyoshin%20Myanmar!5e0!3m2!1sen!2smm!4v1650000000000!5m2!1sen!2smm"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Kyoshin Myanmar Location"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-orange-600 text-white px-6 py-2 rounded-full font-bold shadow-lg text-sm z-20">
              Open: 9:00 AM - 5:00 PM
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}