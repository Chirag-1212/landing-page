import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function SignUp() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    confirm_password: ''
  });
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Updates state and CLEARS error so the form "works" again immediately
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // This is the "Fix": Clear the error as soon as the user starts fixing the mistake
    if (error) setError(''); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state on every new click
    setLoading(true);

    // 1. EMAIL VALIDATION
    if (!formData.email.endsWith('.com')) {
      setError("Email must end with '.com'");
      setLoading(false);
      return;
    }

    // 2. PASSWORD MATCH
    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match!");
      setLoading(false);
      return;
    }

    // 3. PASSWORD COMPLEXITY (6+ chars, 1 Capital, 1 Special)
    // Regex breakdown:
    // (?=.*[A-Z])       : Look for at least one uppercase letter
    // (?=.*[!@#$%^&*]) : Look for at least one special character
    // .{6,}             : Ensure at least 6 characters total
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;

    if (!passwordRegex.test(formData.password)) {
      setError("Password needs: 6+ characters, 1 Capital letter, and 1 Special character (!@#$%^&*)");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: formData.full_name,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert("Success! Account created.");
        navigate('/login');
      } else {
        setError(data.error || "Registration failed");
      }
    } catch (err) {
      console.error("Connection Error:", err);
      setError("Server is not responding. Is your backend terminal running?");
    } finally {
      // This ensures the button is never "stuck" in a loading state
      setLoading(false); 
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      
      <main className="flex-1 flex items-center justify-center p-6 pt-32 pb-16">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 border border-slate-100">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Create Account</h2>
            <p className="text-slate-500 mt-2">Join Kyoshin to start your journey.</p>
          </div>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded mb-6 text-sm animate-shake">
              {error}
            </div>
          )}
          
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Full Name</label>
              <input 
                type="text" 
                name="full_name" 
                onChange={handleChange}
                required 
                className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500 focus:bg-white rounded-xl p-3.5 outline-none transition-all" 
                placeholder="John Doe" 
              />
            </div>
            
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Email Address</label>
              <input 
                type="email" 
                name="email" 
                onChange={handleChange}
                required 
                className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500 focus:bg-white rounded-xl p-3.5 outline-none transition-all" 
                placeholder="name@example.com" 
              />
            </div>
            
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Password</label>
              <input 
                type="password" 
                name="password" 
                onChange={handleChange}
                required 
                className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500 focus:bg-white rounded-xl p-3.5 outline-none transition-all" 
                placeholder="6+ chars, 1 Capital, 1 Special" 
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Confirm Password</label>
              <input 
                type="password" 
                name="confirm_password" 
                onChange={handleChange}
                required 
                className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500 focus:bg-white rounded-xl p-3.5 outline-none transition-all" 
                placeholder="Match your password" 
              />
            </div>

            <button 
              disabled={loading} 
              type="submit" 
              className="w-full bg-orange-600 hover:bg-slate-900 text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'SIGN UP NOW'}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-slate-500 text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-orange-600 font-bold hover:underline">Log In</Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}