import React from 'react';
import './index.css'; 
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturedVideoSection from './components/FeaturedVideoSection';
import PhilosophySection from './components/PhilosophySection';

function App() {
  return (
    <div className="app-container">
      <HeroSection />
      <AboutSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      {/* Add more sections here as needed */}
    </div>
  );
}

export default App;