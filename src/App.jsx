import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react'; // Import useEffect for the scroll logic
import LandingPage from './LandingPage';
import JobCategories from './pages/JobCategories';
import TITP from './pages/TITP';
import TrainingDetail from './pages/TrainingDetail';
import CompanyProfile from './pages/CompanyProfile';
import Terms from './pages/Terms';
import Contact from './pages/Contact';

// This sub-component handles the automatic scrolling
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
        <Route path="/" element={<LandingPage />} />
        <Route path="/categories" element={<JobCategories />} />
        <Route path="/titp" element={<TITP />} />
        <Route path="/training" element={<TrainingDetail />} />
        <Route path="/profile" element={<CompanyProfile />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </Router>
  );
}

export default App;