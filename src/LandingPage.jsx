import { useEffect } from 'react'; // 1. Added this import
import Header from './layout/Header';
import Footer from './layout/Footer';
import LandingBody from './components/LandingBody';

export default function LandingPage() {
  // 2. Added this hook for the main homepage title
  useEffect(() => {
    document.title = "Kakehashi Myanmar | Overseas Employment Agency";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <LandingBody />
      </main>
      <Footer />
    </div>
  );
}