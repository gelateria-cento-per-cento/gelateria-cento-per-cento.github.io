import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Cursor from './components/Cursor';
import SEOHead from './components/SEOHead';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Reviews from './components/Reviews';
import Social from './components/Social';
import Location from './components/Location';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';
import './styles/global.css';

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
        <About />
        <Philosophy />
        <Reviews />
        <Social />
        <Location />
      </main>
      <Footer />
    </>
  );
}

export default App;
