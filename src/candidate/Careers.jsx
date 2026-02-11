import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Careers = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetching from your existing API
        fetch('http://localhost:5000/api/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data);
                setLoading(false);
            })
            .catch(err => console.error("Error fetching careers:", err));
    }, []);

    if (loading) return <div className="p-6 text-gray-500 italic">Loading careers...</div>;

    return (
        <div className="p-6">
            <header className="mb-8 border-b pb-4">
                <h1 className="text-2xl font-bold text-slate-800">Available Careers</h1>
                <p className="text-gray-600">Explore open positions and start your application process.</p>
            </header>

            <div className="grid gap-4">
                {jobs.length > 0 ? jobs.map((job) => (
                    <div key={job.id} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex justify-between items-center hover:shadow-md transition-shadow">
                        <div className="space-y-1">
                            <h3 className="text-lg font-bold text-blue-700">{job.job_title}</h3>
                            {job.title_nepali && (
                                <p className="text-md text-gray-600 font-medium">{job.title_nepali}</p>
                            )}
                            <div className="flex gap-4 text-xs text-gray-500 mt-2">
                                <span className="flex items-center">📍 {job.duty_station || 'Not Specified'}</span>
                                <span className="flex items-center">💼 {job.type}</span>
                                <span className="text-orange-600 font-bold uppercase">⏳ {job.date_value || 'Limited Time'}</span>
                            </div>
                        </div>
                        
                        <Link 
                            to={`/candidate/careers/${job.slug}`}
                            className="bg-slate-900 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-slate-800 transition"
                        >
                            View Details
                        </Link>
                    </div>
                )) : (
                    <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
                        <p className="text-gray-500">There are currently no career openings available.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Careers;