import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function Gallery() {
  // 1. Data goes UP HERE (outside the return)
  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800', title: 'Classroom' },
    { id: 2, url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800', title: 'Interview' },
    { id: 3, url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800', title: 'Training' },
    // Add your real image paths here later
  ];

  // 2. The HTML/JSX goes inside this single return
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-32 pb-20 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-slate-800 text-center md:text-left">
          Our Training Gallery
        </h1>
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img) => (
            <div key={img.id} className="group overflow-hidden rounded-2xl shadow-md bg-white">
              <div className="overflow-hidden">
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-4">
                <p className="font-semibold text-slate-700">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}