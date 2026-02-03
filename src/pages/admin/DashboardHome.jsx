import React, { useEffect, useState } from 'react';

const DashboardHome = () => {
    const [stats, setStats] = useState({ total_users: 0, active_jobs: 0 });

    useEffect(() => {
        fetch('http://localhost:5000/api/admin/stats')
            .then(res => res.json())
            .then(data => setStats(data));
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Overview</h1>
            <div className="grid grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded shadow border-l-4 border-blue-500">
                    <h3>Total Users</h3>
                    <p className="text-3xl font-bold">{stats.total_users}</p>
                </div>
                <div className="bg-white p-6 rounded shadow border-l-4 border-green-500">
                    <h3>Active Jobs</h3>
                    <p className="text-3xl font-bold">{stats.active_jobs}</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;