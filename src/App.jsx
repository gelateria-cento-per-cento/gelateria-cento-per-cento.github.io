import React, { useState, Suspense, lazy } from 'react';
import Preloader from './components/Preloader';
import Cursor from './components/Cursor';
import SEOHead from './components/SEOHead';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import { useScrollReveal } from './hooks/useScrollReveal';
import './styles/global.css';

// Lazy load below-the-fold components
const About = lazy(() => import('./components/About'));
const Philosophy = lazy(() => import('./components/Philosophy'));
const Reviews = lazy(() => import('./components/Reviews'));
const Social = lazy(() => import('./components/Social'));
const Location = lazy(() => import('./components/Location'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Initialize scroll reveal logic
  useScrollReveal();

  return (
    <>
      <SEOHead />
      <Preloader onComplete={() => setIsLoaded(true)} />
      <Cursor />
      <Navbar />
      <main>
        <Hero isLoaded={isLoaded} />
        <Marquee />
        {isLoaded && (
          <Suspense fallback={null}>
            <About />
            <Philosophy />
            <Reviews />
            <Social />
            <Location />
          </Suspense>
        )}
      </main>
      {isLoaded && (
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      )}
    </>
  );
}

export default App;
