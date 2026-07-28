import React, { useState, useEffect } from 'react';
import TopNavigation from './components/TopNavigation';
import HeroSection from './components/HeroSection';
import KPICards from './components/KPICards';
import ChurnOverview from './components/ChurnOverview';
import ChartsSection from './components/ChartsSection';
import ModelComparison from './components/ModelComparison';
import PredictionModule from './components/PredictionModule';
import CustomerInsights from './components/CustomerInsights';
import MLPipeline from './components/MLPipeline';
import RepositoryOverview from './components/RepositoryOverview';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 text-[#1E293B] dark:text-slate-50 transition-colors duration-300 font-sans">
      <TopNavigation darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        <HeroSection />
        <KPICards />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <ChurnOverview />
          </div>
          <div className="lg:col-span-2">
            <ChartsSection />
          </div>
        </div>
        
        <ModelComparison />
        <PredictionModule />
        <CustomerInsights />
        <MLPipeline />
        <RepositoryOverview />
      </main>

      <Footer />
    </div>
  );
}

export default App;
