import React, { useState } from 'react';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';

function PortfolioApp() {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <div className="relative min-h-screen w-full font-mori overflow-x-hidden">
      {/* Top Fixed Glass Header */}
      <Header isScrolled={isScrolled} />

      {/* Hero Section (Folds 1 & 2) */}
      <HeroSection onScrollProgress={(p) => setIsScrolled(p > 0.85)} />

      {/* About Section (Fold 3 with Chroma Shader & Text Decrypt) */}
      <AboutSection />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <PortfolioApp />
    </AppProvider>
  );
}
