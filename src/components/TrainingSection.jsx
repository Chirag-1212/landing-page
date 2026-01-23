import { Link } from 'react-router-dom'; // STEP 1: Import Link

export default function TrainingSection() {
  const centers = [
    {
      name: "Training Center I",
      address: "No.(21/23), 5F(A), U Tun Lin Chan Street, Hledan, Kamayut Tsp., Yangon",
      tel: "+959254922110",
      accent: "border-orange-400"
    },
    {
      name: "Training Center II",
      address: "No. 315 (B), Thitsar Road, Ward 9, South Okkalarpa Tsp., Yangon",
      tel: "+959254922440",
      accent: "border-pink-500"
    }
  ];

  return (
    <section id="features" className="py-24 px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <span className="text-pink-500 font-bold uppercase tracking-widest text-sm">Skills & Safety</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 leading-tight">
              More Than Language:<br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Living with Confidence in Japan</span>
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-orange-400 pl-6">
              A successful internship begins with understanding. We prepare our trainees for the reality of Japanese life—from traffic safety to social etiquette.
            </p>
            {/* STEP 2: Added a Call-to-Action Link */}
            <Link 
              to="/training" 
              className="inline-block bg-slate-900 text-white px-8 py-3 font-bold hover:bg-pink-500 transition-colors ml-6"
            >
              View Full Facilities & Curriculum →
            </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          <div className="space-y-4">
            <h4 className="font-bold text-xl">Cultural Harmony</h4>
            <p className="text-gray-500">We teach the essential rules of Japanese society: garbage disposal, banking, and public transport systems.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-xl">Traffic Safety</h4>
            <p className="text-gray-500">Intensive training on Japanese traffic regulations and bicycle safety to prevent accidents.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-xl">Industrial Mastery</h4>
            <p className="text-gray-500">Japanese business manners and vocabulary specific to the candidate's chosen industrial sector.</p>
          </div>
        </div>

        {/* Training Centers List */}
        <div className="grid md:grid-cols-2 gap-8">
          {centers.map((center, index) => (
            <Link to="/training" key={index} className="block group"> {/* STEP 3: Wrap cards in Links */}
              <div className={`h-full p-8 border-l-8 ${center.accent} bg-gray-50 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300`}>
                <h3 className="text-2xl font-black text-slate-800 mb-4 group-hover:text-pink-500 transition-colors">{center.name}</h3>
                <p className="text-gray-600 mb-4">{center.address}</p>
                <div className="flex items-center gap-2 text-pink-500 font-bold">
                  <span>📞</span> {center.tel}
                </div>
                <div className="mt-4 text-xs font-bold uppercase tracking-widest text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to view details
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}