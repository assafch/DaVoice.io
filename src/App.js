// App.js - Main Application Component
import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import FAQSection from './components/FAQSection';
import Navbar from './components/NavBar';
import CompanySection from './components/CompanySection';
import TestimonialsSection from './components/TestimonialsSection';
import WakeWordSection from './components/WakeWordSection';
import KeywordDetectionSection from './components/KeywordDetectionSection';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <CompanySection />
      <FeaturesSection />
      <TestimonialsSection />
      <WakeWordSection />
      <KeywordDetectionSection />
      <FAQSection />
    </div>
  );
}

export default App;