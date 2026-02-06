import React, { useEffect, useState } from 'react';

// --- Sub-Component: Stat Card ---
const StatCard = ({ title, value, color, icon, status, onAction }) => (
  <div className={`bg-white rounded-2xl shadow-lg p-6 border-l-4 ${color} transition-transform hover:scale-105`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm font-medium">{title}</p>
        <p className={`text-4xl font-bold ${status ? 'text-2xl text-amber-600' : 'text-gray-900'}`}>{value}</p>
      </div>
      <div className={`rounded-full p-4 ${color.replace('border-', 'bg-').replace('-500', '-100')}`}>
        {icon}
      </div>
    </div>
    {onAction && (
      <button onClick={onAction} className="mt-3 text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center group">
        Complete Profile
        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
      </button>
    )}
  </div>
);

// --- Sub-Component: Job Card ---
const JobCard = ({ job }) => (
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 overflow-hidden flex flex-col group hover:-translate-y-2">
    <div className="bg-gradient-to-r from-blue-50 to-pink-50 p-6 border-b border-gray-100">
      <div className="flex justify-between items-start mb-3">
        <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase">{job.type}</span>
        <span className="text-gray-400 text-xs font-medium">⏰ {new Date(job.due_date).toLocaleDateString()}</span>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{job.job_title}</h3>
    </div>
    <div className="p-6 flex-1">
      <p className="text-gray-600 text-sm line-clamp-3 mb-4">{job.description}</p>
      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center"><span className="mr-2">📍</span>{job.location}</div>
        <div className="flex items-center font-semibold text-green-600"><span className="mr-2">¥</span>{job.salary}</div>
      </div>
    </div>
    <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
      <button className="w-full bg-gradient-to-r from-blue-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2">
        View Details & Apply <span>→</span>
      </button>
    </div>
  </div>
);

// --- MAIN COMPONENT ---
const CandidateDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Mock Data
    setJobs([
      { id: 1, job_title: 'Manufacturing Technician', type: 'TITP', location: 'Osaka, Japan', salary: '¥180,000/month', due_date: '2026-03-15', description: 'Join our manufacturing team in Osaka. Learn advanced production techniques.' },
      { id: 2, job_title: 'Food Processing Specialist', type: 'TITP', location: 'Tokyo, Japan', salary: '¥175,000/month', due_date: '2026-03-20', description: 'Work with cutting-edge food processing technology in Tokyo.' },
      { id: 3, job_title: 'Construction Worker', type: 'TITP', location: 'Nagoya, Japan', salary: '¥190,000/month', due_date: '2026-03-25', description: 'Build skills in modern construction methods in Nagoya.' }
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-pink-50 relative p-4 md:p-8">
      
      {/* Animated Blossoms (Optimized) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="absolute animate-bounce" style={{ left: `${i * 18}%`, top: `${Math.random() * 80}%`, animationDuration: `${3 + i}s` }}>
            🌸
          </div>
        ))}
      </div>

      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
        
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Welcome Back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">Candidate</span>
          </h1>
          <p className="text-gray-600 text-lg">Your journey to Japan starts here 🇯🇵</p>
        </header>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard title="Jobs Applied" value="0" color="border-blue-500" icon="📄" />
          <StatCard title="Profile Status" value="Incomplete" color="border-amber-500" icon="👤" status onAction={() => {}} />
          <StatCard title="Interviews" value="0" color="border-pink-500" icon="🗓️" />
        </div>

        {/* Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-pink-600 rounded-3xl p-8 md:p-12 mb-12 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2">Ready to work in Japan?</h2>
            <p className="text-blue-100">Browse our latest job openings and start your journey.</p>
          </div>
          <button 
            onClick={() => document.getElementById('jobs-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-6 md:mt-0 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg"
          >
            Browse Jobs
          </button>
        </div>

        {/* Jobs Section */}
        <section id="jobs-section">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Available Positions</h2>
              <p className="text-gray-600">Find your perfect opportunity</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map(job => <JobCard key={job.id} job={job} />)}
          </div>
        </section>
      </div>

      <style>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default CandidateDashboard;