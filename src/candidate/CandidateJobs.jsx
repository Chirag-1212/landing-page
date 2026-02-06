import React, { useEffect, useState } from 'react';

const CandidateJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
                <div key={job.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-200 overflow-hidden flex flex-col">
                    <div className="p-6 flex-1">
                        <div className="flex justify-between items-start mb-4">
                            <span className="bg-blue-50 text-blue-700 text-xs font-bold px-2 py-1 rounded uppercase">
                                {job.type}
                            </span>
                            <span className="text-gray-400 text-xs">
                                Deadline: {new Date(job.due_date).toLocaleDateString()}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{job.job_title}</h3>
                        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                            {job.description}
                        </p>
                    </div>
                    
                    <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                        <button className="w-full bg-slate-900 text-white py-2 rounded font-medium hover:bg-slate-800 transition">
                            View Details & Apply
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CandidateJobs;   