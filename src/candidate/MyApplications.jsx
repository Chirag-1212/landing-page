import React, { useEffect, useState } from 'react';

const MyApplications = () => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if (user?.id) {
            fetch(`http://localhost:5000/api/my-applications/${user.id}`)
                .then(res => res.json())
                .then(data => {
                    setApplications(data);
                    setLoading(false);
                })
                .catch(err => console.error("Error:", err));
        }
    }, [user?.id]);

    const getStatusStyle = (status) => {
        const styles = {
            new: "bg-blue-100 text-blue-700",
            shortlisted: "bg-purple-100 text-purple-700",
            interview: "bg-orange-100 text-orange-700",
            hired: "bg-green-100 text-green-700",
            rejected: "bg-red-100 text-red-700"
        };
        return styles[status] || "bg-gray-100 text-gray-700";
    };

    if (loading) return <div className="p-6 text-gray-500">Loading your applications...</div>;

    return (
        <div className="p-6">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800">My Applications</h1>
                <p className="text-gray-600">Track the status of your submitted job applications.</p>
            </header>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Job Title</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Applied Date</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {applications.length > 0 ? applications.map((app) => (
                            <tr key={app.id} className="hover:bg-gray-50 transition">
                                <td className="px-6 py-4">
                                    <p className="font-bold text-slate-800">{app.job_title}</p>
                                    <p className="text-xs text-gray-400">{app.job_type}</p>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">
                                    {new Date(app.apply_date).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${getStatusStyle(app.status)}`}>
                                        {app.status}
                                    </span>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="3" className="px-6 py-10 text-center text-gray-500 italic">
                                    You haven't applied for any positions yet.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplications;