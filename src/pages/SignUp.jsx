import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from "../layout/Header";
import Footer from "../layout/Footer";
  
export default function SignUp() {
  const navigate = useNavigate(); // Used to redirect user after success
  
  // 1. STATE: Keeps track of what the user is typing
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: ''
  });
  
  const [status, setStatus] = useState(''); // To show "Success" or "Error" messages

  // 2. HANDLE CHANGE: Updates state when user types
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.type === 'text' && e.target.name === undefined ? 'full_name' : e.target.type]: e.target.value });
    // Note: To make this simpler, let's add 'name' attributes to inputs below
  };

  // 3. HANDLE SUBMIT: The Bridge to Node.js
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: e.target[0].value, // Grabbing value directly from form index
          email: e.target[1].value,
          password: e.target[2].value
        })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        alert("Account Created! Redirecting to login...");
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setStatus('error');
        alert("Error: " + data.error);
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      alert("Server connection failed. Is the backend terminal running?");
    }
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
          
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Full Name</label>
              <input type="text" name="full_name" required className="w-full bg-slate-50 border-2 border-transparent focus:border-orange-500 focus:bg-white rounded-xl p-4 outline-none transition-all text-slate-900" placeholder="Enter your name" />
            </div>
            
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Email Address</label>
              <input type="email" name="email" required className="w-full bg-slate-50 border-2 border-transparent focus:border-orange-500 focus:bg-white rounded-xl p-4 outline-none transition-all text-slate-900" placeholder="name@example.com" />
            </div>
            
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Password</label>
              <input type="password" name="password" required className="w-full bg-slate-50 border-2 border-transparent focus:border-orange-500 focus:bg-white rounded-xl p-4 outline-none transition-all text-slate-900" placeholder="••••••••" />
            </div>

            <button disabled={status === 'sending'} type="submit" className="w-full bg-orange-600 hover:bg-slate-900 text-white font-black py-4 rounded-xl transition-all duration-300 shadow-lg shadow-orange-200 hover:shadow-slate-300 transform hover:-translate-y-1 disabled:opacity-50">
              {status === 'sending' ? 'CREATING...' : 'SIGN UP NOW'}
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