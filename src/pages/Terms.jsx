import { Link } from 'react-router-dom';
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Header */}
      <Header />

      {/* 2. Main content with flex-grow to push footer down */}
      <main className="flex-grow bg-slate-50 pt-32 pb-20 px-10">
        <div className="max-w-3xl mx-auto bg-white p-12 md:p-20 rounded-[40px] shadow-sm">
          
          <h1 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter">
            Terms & Conditions
          </h1>
          <p className="text-sm text-gray-400 mb-12">Last Updated: January 2026</p>

          <div className="space-y-10 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-4 underline decoration-orange-400 decoration-4">
                1. Scope of Service
              </h2>
              <p>
                Kyoshin Company Ltd provides recruitment consultancy and training services for 
                the Technical Intern Training Program (TITP) and Specified Skilled Worker (SSW) programs.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-4 underline decoration-pink-500 decoration-4">
                2. Candidate Conduct
              </h2>
              <p>
                All trainees must adhere to the rules and regulations provided during the pre-departure training. 
                Failure to maintain Japanese cultural and industrial standards may result in program suspension.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-4 underline decoration-rose-500 decoration-4">
                3. Data Protection
              </h2>
              <p>
                We collect and process personal data exclusively for recruitment purposes. 
                By submitting your profile, you consent to the sharing of your information 
                with relevant Japanese host companies.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}