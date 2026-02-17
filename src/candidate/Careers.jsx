import React, { useState, useEffect } from "react";

const Careers = () => {
  // 1. ADDED MOCK DATA EXAMPLES
  const [jobs, setJobs] = useState([
    {
      id: "car-001",
      job_title: "Automotive Assembly Specialist",
      job_type: "TITP Program",
      description: "Join a leading automotive manufacturer in Toyota City. Responsibilities include precision assembly of engine components and quality control checks. \n\nBenefits: Housing provided, Japanese language lessons included, and flight coverage.",
      vacancy_count: 5,
      due_date: "2024-12-31"
    },
    {
      id: "agr-002",
      job_title: "Agricultural Greenhouse Tech",
      job_type: "Specified Skilled Worker (SSW)",
      description: "Work in smart-farming facilities in Hokkaido. Manage automated irrigation systems and oversee the harvest of high-quality organic produce. \n\nRequirements: Basic Japanese (N5/N4) and a passion for sustainable farming.",
      vacancy_count: 3,
      due_date: "2024-11-15"
    },
    {
      id: "hos-003",
      job_title: "Hospitality & Guest Services",
      job_type: "Full Time",
      description: "Experience Omotenashi firsthand at a luxury Ryokan in Kyoto. Assist international guests, manage bookings, and coordinate traditional tea ceremonies.",
      vacancy_count: 2,
      due_date: "2024-10-20"
    }
  ]);

  const [loading, setLoading] = useState(true);
  const [expandedJobId, setExpandedJobId] = useState(null);
  const [questions, setQuestions] = useState({});

  useEffect(() => {
    // We still attempt to fetch, but the mock data is there as a fallback
    fetch("http://localhost:5000/api/jobs")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setJobs(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.warn("Using mock data as server is not reachable.");
        setLoading(false);
      });
  }, []);

  const toggleJob = (id) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleAskQuestion = (e, jobId, jobTitle) => {
    e.preventDefault();
    const question = questions[jobId] || "";
    if (!question.trim()) {
      alert("Please enter a question.");
      return;
    }
    alert(`Inquiry sent for ${jobTitle}! We will contact you soon.`);
    setQuestions((prev) => ({ ...prev, [jobId]: "" }));
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
        <div className="text-blue-600 font-bold animate-bounce text-xl">Loading Careers...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-black text-slate-900 sm:text-6xl tracking-tight">
          Find Your <span className="text-blue-600 italic">Ikigai</span>
        </h1>
        <p className="mt-4 text-xl text-slate-500">
          Hand-picked career opportunities across Japan.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-5">
        {jobs.map((job) => {
          const isExpanded = expandedJobId === job.id;

          return (
            <div
              key={job.id}
              className={`group bg-white rounded-3xl overflow-hidden border transition-all duration-500 ${
                isExpanded
                  ? "border-blue-500 shadow-2xl scale-[1.02]"
                  : "border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-lg"
              }`}
            >
              {/* CARD HEADER */}
              <button
                onClick={() => toggleJob(job.id)}
                className="w-full text-left p-8 flex flex-col sm:flex-row sm:items-center justify-between cursor-pointer focus:outline-none"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                     <span className="bg-blue-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded">New</span>
                     <span className="text-sm font-bold text-blue-500">{job.job_type}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {job.job_title}
                  </h3>
                  <div className="mt-2 flex items-center gap-6 text-sm text-slate-400 font-medium">
                    <span className="flex items-center gap-1.5">
                       📍 Japan
                    </span>
                    <span className="flex items-center gap-1.5">
                       ⏳ Due: {formatDate(job.due_date)}
                    </span>
                  </div>
                </div>

                <div className={`hidden sm:flex items-center gap-2 font-bold text-sm ${isExpanded ? 'text-blue-600' : 'text-slate-300'}`}>
                   {isExpanded ? 'Close Details' : 'View Details'}
                   <div className={`p-2 rounded-xl transition-all duration-300 ${isExpanded ? 'rotate-180 bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                   </div>
                </div>
              </button>

              {/* DROPDOWN SECTION */}
              <div className={`transition-all duration-500 ease-in-out ${isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="p-8 pt-0 border-t border-slate-50 bg-slate-50/30">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
                    
                    {/* Role Info */}
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-black text-slate-900 uppercase mb-4">
                        <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                        The Role
                      </h4>
                      <p className="text-slate-600 leading-relaxed text-lg whitespace-pre-line">
                        {job.description}
                      </p>
                      <div className="mt-6 p-4 bg-white rounded-2xl border border-slate-100 flex justify-around text-center">
                         <div>
                            <div className="text-xs text-slate-400 uppercase font-bold">Positions</div>
                            <div className="text-lg font-bold text-slate-800">{job.vacancy_count}</div>
                         </div>
                         <div className="border-l border-slate-100"></div>
                         <div>
                            <div className="text-xs text-slate-400 uppercase font-bold">Location</div>
                            <div className="text-lg font-bold text-slate-800">Multiple</div>
                         </div>
                      </div>
                    </div>

                    {/* Inquiry Form */}
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 ring-8 ring-slate-50/50">
                      <h4 className="text-lg font-bold text-slate-900 mb-1">Quick Inquiry</h4>
                      <p className="text-sm text-slate-500 mb-4">Get answers about visas, salary, or housing.</p>
                      <form onSubmit={(e) => handleAskQuestion(e, job.id, job.job_title)}>
                        <textarea
                          className="w-full p-4 text-sm border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none bg-slate-50 mb-4"
                          rows="4"
                          placeholder="What would you like to know?"
                          value={questions[job.id] || ""}
                          onChange={(e) => setQuestions(prev => ({ ...prev, [job.id]: e.target.value }))}
                        />
                        <button type="submit" className="w-full bg-blue-600 hover:bg-slate-900 text-white font-bold py-3 rounded-2xl transition-all shadow-lg shadow-blue-100 active:scale-95">
                          Send Question
                        </button>
                      </form>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Careers;