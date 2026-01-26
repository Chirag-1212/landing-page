import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function JobCategories() {

  useEffect(() => {
    document.title = "Home | Kakehashi Myanmar";
  }, []);

  // Logic (like arrays) goes here, BEFORE the return
  const jobs = ["Construction", "Agriculture", "Careworker", "Manufacturing", "Food Processing"];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Header at the very top */}
      <Header />

      {/* 2. Main Content Area */}
      {/* flex-grow makes sure this pushes the footer down */}
      <main className="flex-grow bg-gray-50 pt-32 pb-20 px-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-black text-slate-900 mt-8 mb-12">
            Job Categories
          </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <div 
                key={job} 
                className="bg-white p-10 shadow-xl border-t-8 border-orange-400 rounded-lg hover:-translate-y-2 transition-all"
              >
                <h3 className="text-2xl font-bold text-slate-800">{job}</h3>
                <p className="text-gray-500 mt-4">Opportunities for TITP in Japan</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* 3. Footer at the very bottom */}
      <Footer />
    </div>
  );
}