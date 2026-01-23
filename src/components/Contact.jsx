export default function Contact() {
  return (
    <section className="bg-white py-24 px-10 text-slate-900 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-stretch">
        
        {/* LEFT COLUMN: Contact Info */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 text-pink-500 font-bold text-xs tracking-widest uppercase mb-4">
            <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
            Find Our Office
            <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
          </div>
          
          <h2 className="text-6xl font-black mb-8 leading-tight text-slate-900">
            Visit Us In <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">
              Yangon
            </span>
          </h2>
          
          <p className="text-gray-600 mb-12 max-w-md leading-relaxed text-lg">
            Our primary training center and headquarters are located in South Okkalarpa. We welcome all candidates for consultation during office hours.
          </p>

          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-6 items-start group">
              <div className="w-14 h-14 border-2 border-orange-400 flex-shrink-0 flex items-center justify-center text-2xl group-hover:bg-orange-400 group-hover:text-white transition-all duration-300">
                📍
              </div>
              <div>
                <p className="text-orange-500 text-xs uppercase font-bold tracking-widest mb-1">Primary Address</p>
                <p className="font-bold text-slate-800">No. 315 (B), Thitsar Road, Ward 9, South Okkalarpa Tsp., Yangon</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-6 items-start group">
              <div className="w-14 h-14 border-2 border-pink-500 flex-shrink-0 flex items-center justify-center text-2xl group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                📞
              </div>
              <div>
                <p className="text-pink-500 text-xs uppercase font-bold tracking-widest mb-1">Phone Support</p>
                <p className="font-bold text-slate-800">+95-9-2549 22440</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-6 items-start group">
              <div className="w-14 h-14 border-2 border-rose-500 flex-shrink-0 flex items-center justify-center text-2xl group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                ✉️
              </div>
              <div>
                <p className="text-rose-500 text-xs uppercase font-bold tracking-widest mb-1">Email Inquiry</p>
                <p className="font-bold text-slate-800">info@kakehashimm.com</p>
              </div>
            </div>
          </div>
        </div>


        {/* RIGHT COLUMN: The Map */}
        <div className="h-[500px] lg:h-full min-h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 relative group">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.604724896225!2d96.18663737522502!3d16.8459424839502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1934388185aa7%3A0x1410518a939cc4de!2sKakehashi%20Myanmar%20Co%2CLtd!5e0!3m2!1sen!2smm!4v1705915000000!5m2!1sen!2smm"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kakehashi Myanmar Office Location"
            /* Removed grayscale class here */
            className="w-full h-full transition-transform duration-700 group-hover:scale-105"
          ></iframe>
          
          {/* Floating Label with brand color accent */}
          <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-5 py-2 text-[11px] uppercase tracking-widest font-extrabold text-slate-900 rounded-full shadow-lg border border-orange-100 pointer-events-none flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            Main Office
          </div>
        </div>

      </div>
    </section>
  );
}