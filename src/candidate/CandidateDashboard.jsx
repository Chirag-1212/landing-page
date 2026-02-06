import React from 'react';
import { useNavigate } from 'react-router-dom';

const CandidateDashboard = () => {
    const navigate = useNavigate();

    return (
        <div>
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                    <p className="text-gray-500 text-xs font-bold uppercase">Jobs Applied</p>
                    <p className="text-3xl font-bold text-gray-800">0</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-500">
                    <p className="text-gray-500 text-xs font-bold uppercase">Profile Status</p>
                    <p className="text-3xl font-bold text-gray-800">Incomplete</p>
                    <button className="text-xs text-blue-600 hover:underline mt-1">Complete Profile →</button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                    <p className="text-gray-500 text-xs font-bold uppercase">Interviews</p>
                    <p className="text-3xl font-bold text-gray-800">0</p>
                </div>
            </div>

            {/* Quick Action */}
            <div className="bg-blue-600 text-white rounded-lg p-8 shadow-lg flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold mb-2">Ready to work in Japan?</h2>
                    <p className="text-blue-100">Browse our latest job openings and start your journey.</p>
                </div>
                <button 
                    onClick={() => navigate('/candidate/jobs')}
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
                >
                    Browse Jobs
                </button>
            </div>
        </div>
    );
};

export default CandidateDashboard;