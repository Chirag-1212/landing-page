import React, { useEffect, useState } from 'react';

const DashboardHome = () => {
    const [stats, setStats] = useState({ 
        total_users: 0, 
        active_jobs: 0, 
        total_applications: 0 
    });

    useEffect(() => {
        // Fetch data from your Node.js backend
        fetch('http://localhost:5000/api/admin/stats')
            .then(res => res.json())
            .then(data => {
                // If the backend sends specific data, update state
                if (data) setStats(data);
            })
            .catch(err => console.error("Failed to load stats:", err));
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Stats Card 1 */}
                <div className="bg-white p-6 rounded shadow border-l-4 border-blue-500">
                    <h3 className="text-gray-500 text-sm font-bold uppercase">Total Users</h3>
                    <p className="text-3xl font-bold text-gray-800">{stats.total_users}</p>
                </div>
                {/* Stats Card 2 */}
                <div className="bg-white p-6 rounded shadow border-l-4 border-green-500">
                    <h3 className="text-gray-500 text-sm font-bold uppercase">Active Jobs</h3>
                    <p className="text-3xl font-bold text-gray-800">{stats.active_jobs}</p>
                </div>
                {/* Stats Card 3 */}
                <div className="bg-white p-6 rounded shadow border-l-4 border-yellow-500">
                    <h3 className="text-gray-500 text-sm font-bold uppercase">Applications</h3>
                    <p className="text-3xl font-bold text-gray-800">{stats.total_applications}</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;