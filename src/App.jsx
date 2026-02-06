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
import Login from './pages/auth/Login'; 

// --- ADMIN IMPORTS ---
import AdminLayout from './layout/AdminLayout';        
import DashboardHome from './pages/admin/DashboardHome'; 
import CreateJob from './pages/admin/CreateJob';

// --- NEW CANDIDATE IMPORTS ---
import CandidateLayout from './layout/CandidateLayout';     // The Shell
import CandidateDashboard from './candidate/CandidateDashboard'; 
import CandidateJobs from './candidate/CandidateJobs'; 

// --- SECURITY ---
import ProtectedRoute from './components/ProtectedRoute';

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
        {/* ==========================================
            1. PUBLIC ROUTES (Anyone can see these)
           ========================================== */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/categories" element={<JobCategories />} />
        <Route path="/titp" element={<TITP />} />
        <Route path="/training" element={<TrainingDetail />} />
        <Route path="/profile" element={<CompanyProfile />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        {/* ==========================================
            2. ADMIN ROUTES (Only for Role ID 1)
           ========================================== */}
        <Route element={<ProtectedRoute allowedRoles={[1]} />}>
            <Route path="/admin" element={<AdminLayout />}>
                <Route path="dashboard" element={<DashboardHome />} />
                <Route path="jobs/create" element={<CreateJob />} />
            </Route>
        </Route>

        {/* ==========================================
            3. CANDIDATE ROUTES (Only for Role ID 2)
           ========================================== */}
        <Route element={<ProtectedRoute allowedRoles={[2]} />}>
            <Route path="/candidate" element={<CandidateLayout />}>
                {/* Path: /candidate/dashboard */}
                <Route path="dashboard" element={<CandidateDashboard />} />
                {/* Path: /candidate/jobs */}
                <Route path="jobs" element={<CandidateJobs />} />
                {/* Add more candidate-specific pages here later */}
            </Route>
        </Route>

      </Routes>
    </Router>
  );
}

export default App;