import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const CandidateLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem('user'));

    // 1. Updated Helper: Use /candidate/careers
    const isActive = (path) => location.pathname === path 
        ? "bg-blue-600 text-white" 
        : "text-gray-300 hover:bg-gray-800 hover:text-white";

    return (
        <div className="flex h-screen bg-gray-100">
            {/* --- SIDEBAR --- */}
            <div className="w-64 bg-slate-900 text-white flex flex-col transition-all duration-300">
                <div className="p-6 text-center border-b border-gray-700">
                    <h2 className="text-2xl font-bold tracking-wider text-white">KYOSHIN</h2>
                    <p className="text-xs text-gray-400 mt-1">Candidate Portal</p>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <button 
                        onClick={() => navigate('/candidate/dashboard')} 
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${isActive('/candidate/dashboard')}`}
                    >
                        📊 Dashboard
                    </button>
                    
                    {/* 2. CHANGE HERE: Changed /jobs to /careers and updated text */}
                    <button 
                        onClick={() => navigate('/candidate/careers')} 
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${isActive('/candidate/careers')}`}
                    >
                        🚀 Careers
                    </button>

                    <button 
                        onClick={() => navigate('/candidate/applications')} 
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${isActive('/candidate/applications')}`}
                    >
                        📝 My Applications
                    </button>

                    <button 
                        onClick={() => navigate('/candidate/profile')} 
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${isActive('/candidate/profile')}`}
                    >
                        👤 My Profile
                    </button>
                </nav>

                <div className="p-4 border-t border-gray-700">
                    <button 
                        onClick={() => { localStorage.removeItem('user'); navigate('/login'); }} 
                        className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded shadow transition"
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* --- MAIN CONTENT AREA --- */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-700">
                        {/* 3. CHANGE HERE: Updated logic to check for 'careers' */}
                        {location.pathname.includes('careers') ? 'Available Careers' : 
                         location.pathname.includes('applications') ? 'My Applications' :
                         location.pathname.includes('profile') ? 'Profile Settings' : 'Dashboard Overview'}
                    </h2>
                    <div className="flex items-center gap-3">
                        <div className="text-right">
                            <p className="text-sm font-bold text-gray-800">{user?.name || "Candidate"}</p>
                            <p className="text-xs text-gray-500">{user?.email}</p>
                        </div>
                        <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                            {user?.name?.charAt(0) || "U"}
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default CandidateLayout;