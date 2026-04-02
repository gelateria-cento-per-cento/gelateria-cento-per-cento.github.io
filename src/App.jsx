import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';

const Icons = {
  MapPin: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>,
  Star: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#D4AF37" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  Instagram: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
  Phone: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  Clock: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  ChevronRight: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>,
  Award: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
  Heart: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
};

const SEO = () => (
  <Helmet>
    <title>Cento Per Cento - Gelateria Artigianale Malcesine | Fabrizio Bottesi</title>
    <meta name="description" content="Vieni a scoprire il vero gelato artigianale a Malcesine sul Lago di Garda. Da oltre 30 anni, Fabrizio Bottesi crea dolci capolavori con passione e ingredienti di prima scelta." />
    <meta name="keywords" content="gelateria malcesine, gelato artigianale lago di garda, fabrizio bottesi, cento per cento malcesine, miglior gelato malcesine" />
    <meta property="og:title" content="Cento Per Cento - Gelateria Artigianale Malcesine" />
    <meta property="og:description" content="L'arte del gelato di Fabrizio Bottesi, nel cuore di Malcesine." />
    <meta property="og:image" content="/hero.png" />
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "IceCreamShop",
        "name": "Cento Per Cento",
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
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "10:00",
            "closes": "23:00"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "800"
        }
      })}
    </script>
  </Helmet>
);

const Navbar = () => (
  <nav className="navbar">
    <div className="container flex items-center justify-between">
      <div className="logo flex items-center">
        <img src="/logo.png" alt="Cento Per Cento Logo" className="logo-img" />
      </div>
      <div className="nav-links flex items-center">
        <a href="#about" className="nav-link">La Storia</a>
        <a href="#reviews" className="nav-link">Recensioni</a>
        <a href="#location" className="nav-link btn-small">Vieni a Trovarci</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="hero">
    <div className="hero-bg">
      <img src="/hero.png" alt="Gelateria background" />
      <div className="overlay"></div>
    </div>
    <div className="container hero-content">
      <h1 className="hero-title animate-up">L'Arte del Gelato Artigianale.</h1>
      <p className="hero-subtitle animate-up delay-1">Da oltre 30 anni nel cuore del Lago di Garda.</p>
      <div className="hero-cta animate-up delay-2">
        <a href="#location" className="btn-primary">Scopri dove siamo <Icons.ChevronRight /></a>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="about-section">
    <div className="container flex-row">
      <div className="about-text">
        <span className="section-tag"><Icons.Award /> Artigiani dal 1996</span>
        <h2>Fabrizio Bottesi,<br/><span className="text-accent">Mastro Gelataio.</span></h2>
        <p>Una passione che dura da 30 anni. Nel cuore di Malcesine, Fabrizio opera con dedizione quotidiana per offrire un'esperienza sensoriale unica.</p>
        <p>Ogni gusto nasce da una ricerca meticolosa delle materie prime locali e internazionali, lavorate con l'esperienza di chi ha fatto del gelato la propria vita.</p>
        
        <div className="features-grid">
          <div className="feature">
            <span className="text-accent"><Icons.Heart /></span>
            <p>Passione Artigianale</p>
          </div>
          <div className="feature">
            <span className="text-accent"><Icons.Award /></span>
            <p>100% Naturale</p>
          </div>
        </div>
      </div>
      <div className="about-visual">
         <div className="visual-graphic">
           <div className="circle-bg"></div>
           <div className="year-badge">1996 - 2026</div>
         </div>
      </div>
    </div>
  </section>
);

const Reviews = () => (
  <section id="reviews" className="reviews-section">
    <div className="container text-center">
      <span className="section-tag">Cosa dicono di noi</span>
      <h2>Molto più di un semplice cono.</h2>
      
      <div className="reviews-stats">
        <div className="stat-card">
          <div className="rating-value">4.8</div>
          <div className="stars flex justify-center">
            {[1, 2, 3, 4, 5].map(i => <Icons.Star key={i} />)}
          </div>
          <p className="stat-label">Oltre 800 recensioni su Google</p>
          <a href="https://share.google/RdVoudSAVPI2sogzk" target="_blank" rel="noopener noreferrer" className="btn-secondary">Leggi tutte le recensioni</a>
        </div>
      </div>

      <div className="reviews-grid">
        <div className="review-card">
          <p>"Il miglior gelato di Malcesine, senza ombra di dubbio. Il cioccolato fondente è spaziale!"</p>
          <div className="review-author">— Marco T.</div>
        </div>
        <div className="review-card">
          <p>"Personale gentilissimo e gusti innovativi. Fabrizio è un vero artista."</p>
          <div className="review-author">— Laura R.</div>
        </div>
        <div className="review-card">
          <p>"Un appuntamento fisso ogni volta che veniamo sul lago. Qualità eccelsa."</p>
          <div className="review-author">— Hans M.</div>
        </div>
      </div>
    </div>
  </section>
);

const Location = () => (
  <section id="location" className="location-section">
    <div className="container flex-row reversed">
      <div className="location-info">
        <span className="section-tag">Vienici a trovare</span>
        <h2>Nel borgo di <span className="text-accent">Malcesine.</span></h2>
        <div className="contact-details">
          <div className="contact-item">
            <span className="text-accent"><Icons.MapPin /></span>
            <div>
              <h3>Indirizzo</h3>
              <p>Via Castello, 31, 37018 Malcesine VR</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="text-accent"><Icons.Phone /></span>
            <div>
              <h3>Contatto</h3>
              <p>+39 335 5284062</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="text-accent"><Icons.Clock /></span>
            <div>
              <h3>Orari</h3>
              <p>Aperti tutti i giorni: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
        <a href="https://share.google/RdVoudSAVPI2sogzk" target="_blank" rel="noopener noreferrer" className="btn-primary full-width mt-2">Apri Navigatore</a>
      </div>
      <div className="location-visual">
         <div className="map-placeholder">
           <div className="map-circle">
             <Icons.MapPin />
           </div>
         </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container flex items-center justify-between">
      <p className="copyright">&copy; 2026 Gelateria Cento Per Cento - Fabrizio Bottesi. Malcesine.</p>
      <div className="social-links flex">
        <a href="https://www.instagram.com/cento_per_cento_fabrimalcesine" target="_blank" rel="noopener noreferrer"><Icons.Instagram /></a>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <HelmetProvider>
      <div className="app">
        <SEO />
        <Navbar />
        <Hero />
        <main>
          <About />
          <Reviews />
          <Location />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
