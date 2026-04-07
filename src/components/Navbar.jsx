import React, { useState, useEffect } from 'react';
import { useI18n } from '../hooks/useI18n';

export default function Navbar() {
  const { t } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <nav id="nav" className={isScrolled ? 'sol' : ''}>
        <div className="ni">
          <a href="#hero" className="nl">Cento <em>Per Cento</em></a>
          <ul className="nlinks">
            <li><a href="#about" onClick={closeMenu}>{t('na')}</a></li>
            <li><a href="#phil" onClick={closeMenu}>{t('np')}</a></li>
            <li><a href="#rev" onClick={closeMenu}>{t('nr')}</a></li>
            <li><a href="#social" onClick={closeMenu}>{t('ns')}</a></li>
            <li><a href="#loc" onClick={closeMenu}>{t('nl')}</a></li>
          </ul>
          <button className={`ham ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`mob ${isMenuOpen ? 'open' : ''}`} id="mob">
        <a href="#about" onClick={closeMenu}>{t('na')}</a>
        <a href="#phil" onClick={closeMenu}>{t('np')}</a>
        <a href="#rev" onClick={closeMenu}>{t('nr')}</a>
        <a href="#social" onClick={closeMenu}>{t('ns')}</a>
        <a href="#loc" onClick={closeMenu}>{t('nl')}</a>
      </div>
    </>
  );
}
