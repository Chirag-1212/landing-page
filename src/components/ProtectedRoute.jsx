import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// allowedRoles is an array, e.g., [1] for Admin
const ProtectedRoute = ({ allowedRoles }) => {
    // 1. Get user from storage
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;

    // 2. Check if user is logged in
    if (!user) {
        // If not logged in, kick them back to Login
        return <Navigate to="/login" replace />;
    }

    // 3. Check if user has the right "Badge" (Role ID)
    // We expect role_id to be a number (1 or 2)
    if (allowedRoles && !allowedRoles.includes(user.role)) {
        // If they are logged in but are just a Candidate (Role 2),
        // send them to the home page instead of the Admin panel.
        return <Navigate to="/" replace />;
    }

    // 4. If all checks pass, show the requested page (Outlet)
    return <Outlet />;
};

export default ProtectedRoute;