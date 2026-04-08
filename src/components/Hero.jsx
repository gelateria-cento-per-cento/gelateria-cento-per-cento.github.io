import React, { useEffect, useState, useRef } from 'react';
import { useI18n } from '../hooks/useI18n';

export default function Hero({ isLoaded }) {
  const { t } = useI18n();
  const [showAnims, setShowAnims] = useState(false);
  const orb1 = useRef(null);
  const orb2 = useRef(null);
  const orb3 = useRef(null);

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => setShowAnims(true), 100);
    }
  }, [isLoaded]);

  useEffect(() => {
    // Skip parallax on touch/mobile devices
    if (window.matchMedia('(hover: none)').matches) return;

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      if (orb1.current) orb1.current.style.transform = `translate(${x * 30}px, ${y * 22}px)`;
      if (orb2.current) orb2.current.style.transform = `translate(${-x * 22}px, ${-y * 16}px)`;
      if (orb3.current) orb3.current.style.transform = `translate(${x * 44}px, ${y * 34}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  return (
    <section id="hero">
      <div className="orb o1" ref={orb1}></div>
      <div className="orb o2" ref={orb2}></div>
      <div className="orb o3" ref={orb3}></div>
      <div className="hero-content" itemScope itemType="https://schema.org/IceCreamShop">
        <p className={`h-eye ${showAnims ? 'show' : ''}`}>{t('ht')}</p>
        <h1 className="sr-only" itemProp="name">Gelateria Cento Per Cento — Malcesine, Lago di Garda</h1>
        <div className="clip" aria-hidden="true">
          <span className={`h-t1 ${showAnims ? 'show' : ''}`}>Cento</span>
        </div>
        <div className="clip" aria-hidden="true">
          <span className={`h-t2 ${showAnims ? 'show' : ''}`}>Per Cento</span>
        </div>
        <p className={`h-sub ${showAnims ? 'show' : ''}`} itemProp="description">{t('hts')}</p>
        <a 
          href="https://www.google.com/search?sca_esv=69b89b82830faa31&sxsrf=ANbL-n6YG2X_8EcMmETG9UDkrk2gmJ96OQ:1775123828769&q=Gelateria+Cento+per+Cento+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDOyMDYxNzcxMbcwMLQ0MDC0MNjAyPiKUdE9NSexJLUoM1HBOTWvJF-hILUIygpKLctMLS9exEpYDQC5sYqyYwAAAA&rldimm=16283477447801900180&tbm=lcl&hl=en-IT&sa=X&ved=2ahUKEwiP2vvJ886TAxU5_QIHHciIPFwQ9fQKegQIMxAG&biw=1920&bih=963&dpr=2#lkt=LocalPoiReviews"
          target="_blank" 
          rel="noopener noreferrer" 
          className={`h-badge ${showAnims ? 'show' : ''}`}
          aria-label="4.8 stelle su Google — 842 recensioni"
        >
          <span className="hb-stars">★★★★★</span>
          <span className="hb-txt">{t('hr')}</span>
        </a>
      </div>
      <div className={`h-scroll ${showAnims ? 'show' : ''}`}>
        <span className="hs-lbl">Scroll</span>
        <div className="hs-line"></div>
      </div>
    </section>
  );
}
