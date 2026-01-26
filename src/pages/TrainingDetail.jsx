import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function TrainingDetail() {

  useEffect(() => {
    document.title = "Home | Kyoshin";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Header */}
      <Header />

      <main className="flex-grow">
        {/* Hero Section - Added pt-20 so it sits below the fixed header */}
        <section className="bg-gradient-to-r from-orange-400 to-pink-500 pt-44 pb-32 px-10 text-white text-center">
          <h1 className="text-5xl md:text-7xl font-black">Training Facilities</h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg opacity-90">
            Preparing Myanmar's talent for a successful, safe, and disciplined life in Japan.
          </p>
        </section>

        {/* Deep Details Section */}
        <section className="py-20 px-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Why Training Matters</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                In order for a technical intern trainee to live a safe and healthy life in Japan, 
                it is extremely important to master the Japanese language. Communication 
                difficulties are the #1 cause of stress; we eliminate that before they depart.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Beyond language, we focus on <strong>Japanese traffic regulations</strong>. 
                With the rise in bicycle-related accidents, we ensure every trainee knows the 
                rules of the road, public transport systems, and social etiquette like 
                garbage disposal and banking.
              </p>
            </div>
            
            <div className="bg-gray-50 p-10 rounded-2xl border-l-8 border-pink-500 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Our Curriculum Includes:</h3>
              <ul className="space-y-4 text-gray-700 font-medium">
                <li>• Intensive Japanese Language (N5/N4)</li>
                <li>• Japanese Business Manners & Discipline</li>
                <li>• Traffic Laws & Bicycle Safety</li>
                <li>• Social Rules (Banking, Post, Garbage)</li>
                <li>• Emergency & International Calling</li>
              </ul>
            </div>
          </div>

          {/* The Center Locations */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Centers in Yangon</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-gray-100 shadow-lg rounded-xl bg-white">
                <h3 className="text-xl font-bold text-pink-500">Center I</h3>
                <p className="mt-4 text-gray-600">No.(21/23), 5F(A), U Tun Lin Chan Street, Hledan, Kamayut Tsp., Yangon</p>
                <p className="mt-2 font-bold">Tel: +959254922110</p>
              </div>
              <div className="p-8 border border-gray-100 shadow-lg rounded-xl bg-white">
                <h3 className="text-xl font-bold text-orange-400">Center II</h3>
                <p className="mt-4 text-gray-600">No. 315 (B), Thitsar Road, Ward 9, South Okkalarpa Tsp., Yangon</p>
                <p className="mt-2 font-bold">Tel: +959254922440</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}