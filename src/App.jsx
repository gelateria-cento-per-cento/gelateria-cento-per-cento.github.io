import React, { useState } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { translations } from './translations';

const Icons = {
  MapPin: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>,
  Star: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#c8963e" stroke="#c8963e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  Instagram: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
  Phone: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  Clock: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  ChevronRight: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>,
  Award: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
  Heart: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
};

const SEO = ({ lang, t }) => (
  <Helmet>
    <html lang={lang} />
    <title>Cento Per Cento - {t.hero_eyebrow} | Fabrizio Bottesi</title>
    <meta name="description" content={t.hero_sub} />
    <meta property="og:title" content={`Cento Per Cento - ${t.hero_eyebrow}`} />
    <meta property="og:description" content={t.hero_sub} />
    <meta property="og:image" content="/hero.png" />
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "IceCreamShop",
        "name": "Gelateria Cento Per Cento",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Via Castello, 31",
          "addressLocality": "Malcesine",
          "addressRegion": "VR",
          "postalCode": "37018",
          "addressCountry": "IT"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 45.7661,
          "longitude": 10.8094
        },
        "url": "https://gelateriacentopercento.it",
        "telephone": "+393355284062",
        "priceRange": "€",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "800"
        }
      })}
    </script>
  </Helmet>
);

const Navbar = ({ t, lang, setLang }) => (
  <nav className="navbar">
    <div className="container flex items-center justify-between">
      <a href="#hero" className="nav-logo">Cento <span className="text-accent">Per</span> Cento</a>
      
      <div className="nav-right flex items-center">
        <ul className="nav-links flex">
          <li><a href="#about" className="nav-link">{t.nav_about}</a></li>
          <li><a href="#reviews" className="nav-link">{t.nav_reviews}</a></li>
          <li><a href="#location" className="nav-link btn-small">{t.nav_location}</a></li>
        </ul>
        
        <div className="lang-switcher">
          {['it', 'en', 'de', 'fr'].map(l => (
            <button 
              key={l}
              className={`lang-btn ${lang === l ? 'active' : ''}`}
              onClick={() => setLang(l)}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  </nav>
);

const Hero = ({ t }) => (
  <section id="hero" className="hero">
    <div className="hero-bg-container">
       <img src="/hero.png" alt="Gelateria Malcesine" className="hero-img-full" />
       <div className="hero-gradient-overlay"></div>
    </div>
    <div className="container hero-content text-center">
      <p className="hero-eyebrow animate-up">{t.hero_eyebrow}</p>
      <h1 className="hero-title animate-up delay-1">Cento<br/><em className="text-accent italic">Per Cento</em></h1>
      <p className="hero-sub animate-up delay-2">{t.hero_sub}</p>
      <div className="hero-badge animate-up delay-3">
        <span className="stars">★★★★★</span>
        <span>{t.hero_badge}</span>
      </div>
      <div className="hero-scroll">
        <div className="hero-scroll-line"></div>
        <span>{t.scroll}</span>
      </div>
    </div>
  </section>
);

const About = ({ t }) => (
  <section id="about" className="about-section">
    <div className="container about-grid">
      <div className="about-img-wrap">
        <img src="/hero.png" alt="Fabrizio Bottesi" className="about-main-img" />
        <div className="about-year-badge">
          <span className="num">30</span>
          <span className="lbl">{t.years_label}</span>
        </div>
      </div>
      <div className="about-text">
        <p className="section-label">{t.about_label}</p>
        <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t.about_title }}></h2>
        <div className="divider"></div>
        <p>{t.about_p1}</p>
        <p>{t.about_p2}</p>
        
        <div className="about-stats">
          <div className="stat">
            <div className="num">30+</div>
            <div className="lbl">{t.stat1}</div>
          </div>
          <div className="stat">
            <div className="num">4.8★</div>
            <div className="lbl">{t.stat2}</div>
          </div>
          <div className="stat">
            <div className="num">800+</div>
            <div className="lbl">{t.stat3}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Reviews = ({ t }) => (
  <section id="reviews" className="reviews-section">
    <div className="container">
      <div className="reviews-header flex-row justify-between">
        <div className="reviews-title-block">
          <p className="section-label">{t.reviews_label}</p>
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t.reviews_title }}></h2>
          <div className="divider"></div>
        </div>
        <div className="rating-big flex items-center">
          <div className="rating-num">4.8</div>
          <div className="rating-detail">
            <div className="stars flex"><Icons.Star /><Icons.Star /><Icons.Star /><Icons.Star /><Icons.Star /></div>
            <p>{t.reviews_count}</p>
          </div>
        </div>
      </div>

      <div className="reviews-grid">
        <div className="review-card">
          <div className="review-stars flex"><Icons.Star /><Icons.Star /><Icons.Star /><Icons.Star /><Icons.Star /></div>
          <p className="review-text">{t.r1_text}</p>
          <p className="review-author">Maria T. · Google</p>
        </div>
        <div className="review-card">
          <div className="review-stars flex"><Icons.Star /><Icons.Star /><Icons.Star /><Icons.Star /><Icons.Star /></div>
          <p className="review-text">{t.r2_text}</p>
          <p className="review-author">James K. · Google</p>
        </div>
        <div className="review-card">
          <div className="review-stars flex"><Icons.Star /><Icons.Star /><Icons.Star /><Icons.Star /><Icons.Star /></div>
          <p className="review-text">{t.r3_text}</p>
          <p className="review-author">Klaus M. · Google</p>
        </div>
      </div>
      
      <div className="reviews-cta text-center mt-4">
        <a href="https://share.google/RdVoudSAVPI2sogzk" target="_blank" rel="noopener noreferrer" className="btn-outline">
          {t.reviews_btn}
        </a>
      </div>
    </div>
  </section>
);

const Location = ({ t }) => (
  <section id="location" className="location-section">
    <div className="container location-grid">
      <div className="location-info">
        <p className="section-label">{t.loc_label}</p>
        <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t.loc_title }}></h2>
        <div className="divider"></div>
        
        <div className="info-blocks flex flex-col gap-2">
          <div className="info-block">
            <p className="label">{t.loc_addr_label}</p>
            <p>Via Castello, 31<br/>37018 Malcesine (VR)<br/>Lago di Garda, Italia</p>
          </div>
          <div className="info-block">
            <p className="label">{t.loc_phone_label}</p>
            <a href="tel:+393355284062">+39 335 528 4062</a>
          </div>
          <div className="info-block">
            <p className="label">Instagram</p>
            <a href="https://www.instagram.com/cento_per_cento_fabrimalcesine" target="_blank" rel="noopener">@cento_per_cento_fabrimalcesine</a>
          </div>
        </div>
        
        <div className="cta-group flex flex-col gap-1 mt-2">
          <a href="https://maps.google.com/?q=Via+Castello+31+Malcesine+VR" target="_blank" rel="noopener noreferrer" className="btn-primary">
            <Icons.MapPin /> {t.loc_gmaps}
          </a>
          <a href="tel:+393355284062" className="btn-secondary">
            <Icons.Phone /> {t.loc_call}
          </a>
        </div>
      </div>
      <div className="map-wrap">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.0!2d10.8083!3d45.7619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781f7c9d3c9ef1d%3A0x7b2e8f3c4e5d6a7b!2sVia%20Castello%2C%2031%2C%2037018%20Malcesine%20VR!5e0!3m2!1sit!2sit!4v1"
          style={{ width: '100%', height: '100%', border: 0 }}
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Mappa Gelateria Cento Per Cento Malcesine"
        ></iframe>
      </div>
    </div>
  </section>
);

const Footer = ({ t }) => (
  <footer className="footer-elegant">
    <div className="container text-center">
      <div className="footer-logo">Cento <span className="text-accent">Per</span> Cento</div>
      <p className="footer-sub">{t.footer_sub}</p>
      <div className="footer-links flex justify-center gap-2">
        <a href="#about">{t.nav_about}</a>
        <a href="#reviews">{t.nav_reviews}</a>
        <a href="#location">{t.nav_location}</a>
        <a href="https://www.instagram.com/cento_per_cento_fabrimalcesine" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
      <p className="footer-copy">© 2026 Gelateria Cento Per Cento · Via Castello, 31 · 37018 Malcesine (VR)</p>
    </div>
  </footer>
);

function App() {
  const [lang, setLang] = useState('it');
  const t = translations[lang];

  return (
    <HelmetProvider>
      <div className="app">
        <SEO lang={lang} t={t} />
        <Navbar t={t} lang={lang} setLang={setLang} />
        <main>
          <Hero t={t} />
          <About t={t} />
          <Reviews t={t} />
          <Location t={t} />
        </main>
        <Footer t={t} />
      </div>
    </HelmetProvider>
  );
}

export default App;
