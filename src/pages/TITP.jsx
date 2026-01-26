import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function TITP() {

  useEffect(() => {
    document.title = "Home | Kyoshin";
  }, []);

  const steps = [
    { title: "Step 1: Prep", desc: "Language & Culture training in Myanmar." },
    { title: "Step 2: Learn", desc: "3 Years on-the-job training in Japan." },
    { title: "Step 3: Master", desc: "2 Years advanced vocational training." },
    { title: "Step 4: Return", desc: "Return as a leader to grow Myanmar." }
  ];

  const jobs = ["Construction", "Agriculture", "Careworker", "Manufacturing", "Food Processing"];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Add the Header */}
      <Header />

      {/* 2. Main Content Wrapper */}
      <main className="flex-grow bg-white pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
        
          {/* Header Section */}
          <header className="mt-12 mb-20">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight">
              What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">TITP?</span>
            </h1>
            <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-3xl">
              The Technical Intern Training Program is a professional bridge designed for young workers to master Japanese industrial skills and bring that excellence back home.
            </p>
          </header>

          {/* DIAGRAM SECTION: The Cycle of Growth */}
          <section className="mb-24">
            <h2 className="text-2xl font-bold mb-10 uppercase tracking-widest text-gray-400">The Cycle of Success</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="bg-gray-50 p-8 rounded-2xl border-b-4 border-transparent group-hover:border-pink-500 transition-all">
                    <span className="text-4xl font-black text-orange-200 group-hover:text-orange-400 transition-colors">0{index + 1}</span>
                    <h3 className="text-xl font-bold mt-4 mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-sm">{step.desc}</p>
                  </div>
                  {/* Arrow for Desktop */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 text-gray-300 text-2xl">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* JOB CATEGORIES SECTION */}
          <section>
            <h2 className="text-2xl font-bold mb-10 uppercase tracking-widest text-gray-400">Available Sectors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobs.map((job) => (
                <div key={job} className="group bg-white p-10 shadow-lg border-2 border-gray-100 rounded-2xl hover:border-rose-500 hover:-translate-y-2 transition-all cursor-default">
                  <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-rose-500 mb-6 group-hover:w-full transition-all duration-500"></div>
                  <h3 className="text-2xl font-bold text-slate-800">{job}</h3>
                  <p className="text-gray-500 mt-4 font-medium">Japanese Standard Technical Training</p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <div className="mt-24 bg-slate-900 p-12 rounded-3xl text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to begin your journey?</h2>
        {/* Call to Action */}
          <div className="mt-24 bg-slate-900 p-12 rounded-3xl text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Want to see where the journey begins?</h2>
              
              {/* This now links to your Training Detail page */}
              <Link to="/training">
                <button className="bg-gradient-to-r from-orange-400 to-rose-500 px-12 py-4 font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 mx-auto cursor-pointer">
                  View Full Facilities & Curriculum <span className="text-xl">→</span>
                </button>
              </Link>
            </div>
          </div>
          </div>
        </div>
      </main>

      {/* 3. Add the Footer */}
      <Footer />
    </div>
  );
}