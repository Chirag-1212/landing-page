export default function Gallery() {
  const images = [
    { id: 1, url: 'link-to-photo1.jpg', title: 'Classroom' },
    { id: 2, url: 'link-to-photo2.jpg', title: 'Interview' },
    // Add more here
  ];

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-8">Our Training Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map(img => (
          <div key={img.id} className="overflow-hidden rounded-xl shadow-lg">
            <img src={img.url} alt={img.title} className="w-full h-64 object-cover hover:scale-105 transition duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}