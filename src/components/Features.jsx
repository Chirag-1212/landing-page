export default function Features() {
  return (
   <section id="features" className="bg-white py-24 px-10">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900">Why choose our platform?</h2>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg">
          Unlock your potential with features designed to help you succeed in your creative journey.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        
        {/* Card 1 */}
        <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-3xl mb-6">
            🎓
          </div>
          <h3 className="text-2xl font-bold mb-3">Expert Mentors</h3>
          <p className="text-gray-600 leading-relaxed">
            Learn directly from industry leaders who have worked at top-tier creative studios.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-3xl mb-6">
            ⚡
          </div>
          <h3 className="text-2xl font-bold mb-3">Hands-on Projects</h3>
          <p className="text-gray-600 leading-relaxed">
            Apply what you learn with real-world projects that you can add to your professional portfolio.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center text-3xl mb-6">
            🌍
          </div>
          <h3 className="text-2xl font-bold mb-3">Global Community</h3>
          <p className="text-gray-600 leading-relaxed">
            Connect with thousands of other students and creators from over 120 different countries.
          </p>
        </div>

      </div>
    </section>
  );
}