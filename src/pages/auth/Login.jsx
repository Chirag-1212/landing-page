import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Correct relative path to reach src/layout/Header.jsx
import Header from "../../layout/Header"; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); 

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Save keys required for the ProtectedRoute to grant access
                localStorage.setItem('authToken', 'true'); 
                localStorage.setItem('userRole', data.user.role); 
                localStorage.setItem('user', JSON.stringify(data.user)); 

                // Redirect based on User Role (1 = Admin, 2 = Candidate)
                if (data.user.role === 1) {
                    navigate('/admin/dashboard'); 
                } else if (data.user.role === 2) {
                    navigate('/candidate/dashboard'); 
                } else {
                    navigate('/');
                }
            } else {
                setError(data.error || 'Login failed');
            }
        } catch (err) {
            console.error(err);
            setError('Server connection failed. Is the backend running?');
        }
    };

    return (
        /* The main container is now a flex column to stack Header and Main Content */
        <div className="flex flex-col min-h-screen bg-slate-50">
            
            {/* 1. Header stays at the top of the column */}
            <Header />

            {/* 2. Main section fills the rest of the height (flex-1) and centers the card */}
            <main className="flex-1 flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-xl border border-gray-100 relative z-10">
                    
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Kyoshin</h2>
                        <p className="text-slate-500 mt-2">Welcome back! Please enter your details.</p>
                    </div>
                    
                    {error && (
                        <div className="bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm animate-pulse">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-slate-700 text-sm font-bold mb-2">Email Address</label>
                            <input 
                                type="email" 
                                className="w-full p-3.5 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                                placeholder="example@kyoshin.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                            />
                        </div>
                        
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-slate-700 text-sm font-bold">Password</label>
                                <span className="text-xs text-blue-600 font-semibold hover:underline cursor-pointer">Forgot password?</span>
                            </div>
                            <input 
                                type="password" 
                                className="w-full p-3.5 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required 
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="w-full bg-slate-900 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-[0.98]"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="mt-10 pt-8 border-t border-slate-100 text-center">
                        <p className="text-sm text-slate-600">
                            New to Kyoshin? 
                            <span 
                                onClick={() => navigate('/signup')} 
                                className="text-blue-600 font-bold ml-1 cursor-pointer hover:underline"
                            >
                                Create an account
                            </span>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;