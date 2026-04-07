import React, { useState, useEffect } from 'react';
import { useI18n } from '../hooks/useI18n';

export default function CookieBanner() {
  const { lang } = useI18n();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setTimeout(() => setShow(true), 1500);
    } else if (consent === 'accepted') {
      loadGoogleAnalytics();
    }
  }, []);

  const loadGoogleAnalytics = () => {
    if (window.gtagLoaded) return;
    window.gtagLoaded = true;
    
    // Inject the script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-V21J9HSHVY';
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-V21J9HSHVY');
  };

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShow(false);
    loadGoogleAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setShow(false);
  };

  if (!show) return null;

  const texts = {
    it: {
      title: 'Informativa sui Cookie',
      desc: 'Utilizziamo cookie tecnici essenziali e cookie analitici (Google Analytics) per ottimizzare la tua esperienza. Acconsenti al loro utilizzo?',
      accept: 'Accetta Tutti',
      decline: 'Solo Tecnici',
      policy: 'Cookie Policy'
    },
    en: {
      title: 'Cookie Policy',
      desc: 'We use essential technical cookies and analytical cookies (Google Analytics) to optimize your experience. Do you consent to their use?',
      accept: 'Accept All',
      decline: 'Technical Only',
      policy: 'Cookie Policy'
    },
    de: {
      title: 'Cookie-Richtlinie',
      desc: 'Wir verwenden wichtige technische Cookies und analytische Cookies (Google Analytics), um Ihr Erlebnis zu optimieren. Stimmen Sie der Nutzung zu?',
      accept: 'Alle Akzeptieren',
      decline: 'Nur Technische',
      policy: 'Cookie-Richtlinie'
    },
    fr: {
      title: 'Politique relative aux Cookies',
      desc: 'Nous utilisons des cookies techniques essentiels et des cookies analytiques (Google Analytics) pour optimiser votre expérience. Consentez-vous à leur utilisation?',
      accept: 'Tout Accepter',
      decline: 'Uniquement Techniques',
      policy: 'Politique relative aux Cookies'
    }
  };

  const currentTexts = texts[lang] || texts['en'];

  return (
    <div className="cookie-banner">
      <div className="cb-inner">
        <div className="cb-text">
          <h4 className="cb-title">{currentTexts.title}</h4>
          <p className="cb-desc">
            {currentTexts.desc} <a href="/?policy=cookie">{currentTexts.policy}</a>.
          </p>
        </div>
        <div className="cb-actions">
          <button className="cb-btn cb-decline" onClick={handleDecline}>
            {currentTexts.decline}
          </button>
          <button className="cb-btn cb-accept" onClick={handleAccept}>
            {currentTexts.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
