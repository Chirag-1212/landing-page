import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
                // 1. Save User Info (Session)
                localStorage.setItem('user', JSON.stringify(data.user));

                // 2. REDIRECT BASED ON ROLE
                // Role 1 = Admin, Role 2 = Candidate
                if (data.user.role === 1) {
                    navigate('/admin/dashboard'); 
                } else if (data.user.role === 2) {
                    // FIX: Redirect to the new Candidate Dashboard instead of home
                    navigate('/candidate/dashboard'); 
                } else {
                    navigate('/'); // Fallback for any other roles
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
        <div className="flex h-screen items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold text-slate-900">Kyoshin ERP</h2>
                    <p className="text-gray-500 mt-2">Sign in to your account</p>
                </div>
                
                {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded mb-6 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2">Email Address</label>
                        <input 
                            type="email" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>
                    
                    <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
                        <input 
                            type="password" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-lg shadow-md transition-all active:scale-95"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account? 
                        <span 
                            onClick={() => navigate('/signup')} 
                            className="text-blue-600 font-bold ml-1 cursor-pointer hover:underline"
                        >
                            Create account
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;