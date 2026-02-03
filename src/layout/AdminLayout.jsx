import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const AdminLayout = () => {
    const navigate = useNavigate();

    return (
        <div className="flex h-screen bg-gray-100">
            {/* --- PERMANENT SIDEBAR --- */}
            <div className="w-64 bg-gray-900 text-white p-5 flex flex-col">
                <div className="text-2xl font-bold mb-10 text-center border-b border-gray-700 pb-4">
                    Kyoshin Admin
                </div>
                
                <nav className="flex-1 space-y-2">
                    <button onClick={() => navigate('/admin/dashboard')} className="w-full text-left p-3 hover:bg-gray-800 rounded">
                        📊 Dashboard Overview
                    </button>
                    <button onClick={() => navigate('/admin/users')} className="w-full text-left p-3 hover:bg-gray-800 rounded">
                        👥 Manage Users
                    </button>
                    <button onClick={() => navigate('/admin/careers')} className="w-full text-left p-3 hover:bg-gray-800 rounded">
                        md-briefcase Manage Jobs
                    </button>
                </nav>

                <button 
                    onClick={() => { localStorage.removeItem('user'); navigate('/login'); }} 
                    className="mt-auto p-3 bg-red-600 hover:bg-red-700 rounded text-center"
                >
                    Logout
                </button>
            </div>

            {/* --- DYNAMIC CONTENT AREA --- */}
            <div className="flex-1 overflow-y-auto">
                <header className="bg-white shadow p-4 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-700">Admin Panel</h2>
                    <span className="text-sm text-gray-500">Welcome, Admin</span>
                </header>
                
                {/* <Outlet /> is where the child route (DashboardHome) renders */}
                <div className="p-8">
                    <Outlet />  
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;