export default function Testimonials() {
  const reviews = [
    {
      name: "Alina Lora",
      role: "Former Manager",
      title: "Best Support ever!",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      highlight: false
    },
    {
      name: "Tanir Fro",
      role: "Former Manager",
      title: "Good cleaning service",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      highlight: true 
    },
    {
      name: "Leofar Lord",
      role: "Former Manager",
      title: "Service satisfaction!",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      highlight: false
    },
    {
      name: "Rohit Grow",
      role: "Former Manager",
      title: "Best teaching tips!",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      highlight: false
    }
  ];

  return (
    /* UPDATED BACKGROUND: Orange to Pink Gradient */
    <section className="bg-gradient-to-br from-orange-400 via-pink-500 to-rose-500 py-24 px-10">
      
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <div className="flex items-center justify-center gap-2 text-white font-bold text-sm uppercase">
          <span className="w-4 h-[2px] bg-white"></span>
          Testimonials
          <span className="w-4 h-[2px] bg-white"></span>
        </div>
        <h2 className="text-5xl font-bold text-white mt-4 leading-tight">
          What our students say <br /> about our courses
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-xl relative border border-white/20 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300">
            
            {/* Quote Icon */}
            <div className={`absolute top-6 right-8 text-6xl font-serif leading-none select-none opacity-20 ${review.highlight ? 'text-orange-600 opacity-100' : 'text-gray-300'}`}>
              ”
            </div>

            <h3 className="text-pink-600 font-bold text-xl mb-4 pr-8">
              {review.title}
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
              5 stars for design quality, but also for prompt new customer service and great attention to details work.
            </p>

            {/* Profile Section */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
              <div className="relative">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-14 h-14 rounded-full border-2 border-pink-500 p-0.5 object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                <p className="text-gray-400 text-xs">{review.role}.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}