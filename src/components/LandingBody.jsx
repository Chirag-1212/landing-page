import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import Contact from './Contact'; 
import TrainingSection from './TrainingSection';

export default function LandingBody() {
  return (
    <>
      <Hero />
      <TrainingSection />
      <Features />
      <Testimonials />
      <Contact />
    </>
  );
}