import React from 'react';
import { Link } from 'react-router-dom'; // Added this
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function SignUp() {
  // Simple handler to prevent page refresh on click
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Sign up clicked");
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      
      <main className="flex-grow pt-40 pb-20 px-6">
        <div className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl shadow-slate-200/50 p-10 border border-slate-100">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Create Account</h2>
            <p className="text-slate-500 mt-2">Join Kyoshin to start your journey to Japan.</p>
          </div>
          
          <form className="space-y-5" onSubmit={handleSignUp}>
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Full Name</label>
              <input type="text" required className="w-full bg-slate-50 border-2 border-transparent focus:border-orange-500 focus:bg-white rounded-xl p-4 outline-none transition-all text-slate-900" placeholder="Enter your name" />
            </div>
            
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Email Address</label>
              <input type="email" required className="w-full bg-slate-50 border-2 border-transparent focus:border-orange-500 focus:bg-white rounded-xl p-4 outline-none transition-all text-slate-900" placeholder="name@example.com" />
            </div>
            
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Password</label>
              <input type="password" required className="w-full bg-slate-50 border-2 border-transparent focus:border-orange-500 focus:bg-white rounded-xl p-4 outline-none transition-all text-slate-900" placeholder="••••••••" />
            </div>

            <button type="submit" className="w-full bg-orange-600 hover:bg-slate-900 text-white font-black py-4 rounded-xl transition-all duration-300 shadow-lg shadow-orange-200 hover:shadow-slate-300 transform hover:-translate-y-1">
              SIGN UP NOW
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-slate-500 text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-orange-600 font-bold hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}