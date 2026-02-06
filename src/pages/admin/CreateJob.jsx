import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateJob = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        job_title: '',
        deadline: '',
        job_type: 'Full Time',
        vacancy_count: 1,
        status: '1', // Default to Published
        description: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Get Admin ID from LocalStorage
        const user = JSON.parse(localStorage.getItem('user'));

        const payload = {
            ...formData,
            user_id: user.id 
        };

        try {
            const response = await fetch('http://localhost:5000/api/admin/jobs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                alert("Job Created Successfully!");
                navigate('/admin/dashboard'); // Go back to dashboard
            } else {
                alert("Failed to save job.");
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="bg-white p-8 rounded shadow-md max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Post a New Job</h2>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Job Title */}
                <div className="col-span-2">
                    <label className="block text-sm font-bold mb-2">Job Title</label>
                    <input 
                        name="job_title" 
                        onChange={handleChange} 
                        className="w-full p-2 border rounded" 
                        placeholder="e.g. Factory Worker in Tokyo" 
                        required 
                    />
                </div>

                {/* Deadline */}
                <div>
                    <label className="block text-sm font-bold mb-2">Application Deadline</label>
                    <input 
                        type="date" 
                        name="deadline" 
                        onChange={handleChange} 
                        className="w-full p-2 border rounded" 
                        required 
                    />
                </div>

                {/* Vacancy Count */}
                <div>
                    <label className="block text-sm font-bold mb-2">Number of Vacancies</label>
                    <input 
                        type="number" 
                        name="vacancy_count" 
                        onChange={handleChange} 
                        className="w-full p-2 border rounded" 
                        defaultValue={1}
                    />
                </div>

                {/* Job Type */}
                <div>
                    <label className="block text-sm font-bold mb-2">Job Type</label>
                    <select name="job_type" onChange={handleChange} className="w-full p-2 border rounded">
                        <option value="Full Time">Full Time</option>
                        <option value="Part Time">Part Time</option>
                        <option value="Contract">Contract</option>
                    </select>
                </div>

                {/* Status */}
                <div>
                    <label className="block text-sm font-bold mb-2">Status</label>
                    <select name="status" onChange={handleChange} className="w-full p-2 border rounded">
                        <option value="1">Published (Active)</option>
                        <option value="0">Draft (Hidden)</option>
                    </select>
                </div>

                {/* Description */}
                <div className="col-span-2">
                    <label className="block text-sm font-bold mb-2">Job Description</label>
                    <textarea 
                        name="description" 
                        onChange={handleChange} 
                        rows="6"
                        className="w-full p-2 border rounded"
                        placeholder="Enter job requirements, benefits, and details here..."
                        required
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="col-span-2">
                    <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded font-bold hover:bg-blue-700 w-full">
                        🚀 Publish Job
                    </button>
                </div>

            </form>
        </div>
    );
};

export default CreateJob;