import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors

        try {
            // 1. Send Credentials to Backend
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // 2. Save User Info (Session)
                localStorage.setItem('user', JSON.stringify(data.user));

                // 3. REDIRECT BASED ON ROLE
                if (data.user.role === 1) {
                    navigate('/admin/dashboard'); // Role 1 = Admin
                } else {
                    navigate('/'); // Role 2 = Candidate (or anywhere else)
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
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Kyoshin Login</h2>
                
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input 
                            type="email" 
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            placeholder="admin@kyoshin.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>
                    
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input 
                            type="password" 
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Sign In
                    </button>
                </form>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Don't have an account? <span onClick={() => navigate('/signup')} className="text-blue-600 cursor-pointer hover:underline">Sign Up</span>
                </p>
            </div>
        </div>
    );
};

export default Login;