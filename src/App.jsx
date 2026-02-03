import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// --- EXISTING PUBLIC PAGES ---
import LandingPage from './LandingPage';
import JobCategories from './pages/JobCategories';
import TITP from './pages/TITP';
import TrainingDetail from './pages/TrainingDetail';
import CompanyProfile from './pages/CompanyProfile';
import Terms from './pages/Terms';
import Contact from './pages/Contact';  
import Gallery from './pages/Gallery';
import SignUp from './pages/SignUp';

// --- NEW IMPORTS (Make sure you create these files first!) ---
import Login from './pages/auth/Login';                  // 1. The Login Page
import AdminLayout from './layout/AdminLayout';         // 2. The Admin Shell (Sidebar)
import DashboardHome from './pages/admin/DashboardHome'; // 3. The Admin Content

// Scroll Helper
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <Routes>
        {/* --- PUBLIC ROUTES (No Changes) --- */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/categories" element={<JobCategories />} />
        <Route path="/titp" element={<TITP />} />
        <Route path="/training" element={<TrainingDetail />} />
        <Route path="/profile" element={<CompanyProfile />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        {/* --- NEW: LOGIN ROUTE --- */}
        <Route path="/login" element={<Login />} />

        {/* --- NEW: ADMIN PROTECTED ROUTES (Nested) --- */}
        {/* This wrapper ensures the Sidebar (AdminLayout) is always visible */}
        <Route path="/admin" element={<AdminLayout />}>
            
            {/* URL: /admin/dashboard -> Loads DashboardHome inside the Layout */}
            <Route path="dashboard" element={<DashboardHome />} />

            {/* Future routes go here, e.g.: */}
            {/* <Route path="users" element={<ManageUsers />} /> */}
            
        </Route>

      </Routes>
    </Router>
  );
}

export default App;