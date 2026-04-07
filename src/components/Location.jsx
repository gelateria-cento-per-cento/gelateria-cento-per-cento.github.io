import React from 'react';
import { useI18n } from '../hooks/useI18n';
import MalcesinePhoto from '../assets/images/malcesine.webp';

export default function Location() {
  const { t } = useI18n();
  const [showMap, setShowMap] = React.useState(false);
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (mapRef.current) observer.observe(mapRef.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="loc" itemScope itemType="https://schema.org/IceCreamShop">
      <meta itemProp="name" content="Gelateria Cento Per Cento" />
      <div className="si">
        <p className="eyebrow rv">{t('lo_e')}</p>
        <h2 className="stitle rv" style={{ color: 'var(--in)' }} dangerouslySetInnerHTML={{ __html: t('lo_t') }}></h2>
        <div className="srule rv"></div>
        
        <div className="loc-grid rv">
          <div className="loc-text from-left" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <div className="lb">
              <p className="lbl">{t('lo_a')}</p>
              <address>
                <span itemProp="streetAddress">Via Castello, 31</span><br />
                <span itemProp="postalCode">37018</span> <span itemProp="addressLocality">Malcesine</span> (<span itemProp="addressRegion">VR</span>)
              </address>
            </div>
            <div className="lb">
              <p className="lbl">{t('lo_p')}</p>
              <a href="tel:+393355284062" itemProp="telephone">+39 335 528 4062</a>
            </div>
            <div className="lbtns">
              <a href="https://www.google.com/maps/dir/?api=1&destination=Gelateria+Cento+Per+Cento+Malcesine+Via+Castello+31" target="_blank" rel="noopener noreferrer" className="btn btn-sol" aria-label="Apri il percorso su Google Maps">
                <span>{t('lo_gm')}</span>
              </a>
              <a href="tel:+393355284062" className="btn btn-out" aria-label="Chiama la gelateria">
                <span>{t('lo_cl')}</span>
              </a>
              <a href="https://www.tripadvisor.it/Restaurant_Review-g194807-d2049588-Reviews-Gelateria_Cento_Per_Cento-Malcesine_Province_of_Verona_Veneto.html" target="_blank" rel="noopener noreferrer" className="btn btn-out" aria-label="Leggi le recensioni su TripAdvisor">
                <span>{t('lo_ta')}</span>
              </a>
            </div>
          </div>
          
          <div className="mw from-left">
            {!showMap ? (
              <div 
                ref={mapRef} 
                style={{ width: '100%', height: '100%', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255, 255, 255, 0.05)' }}
              >
                <span style={{ fontSize: '0.8rem', color: 'var(--go)', letterSpacing: '2px', textTransform: 'uppercase' }}>{t('loading_map') || 'Loading Map...'}</span>
              </div>
            ) : (
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.0!2d10.8083!3d45.7619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781f7c9d3c9ef1d%3A0x7b2e8f3c4e5d6a7b!2sVia%20Castello%2C%2031%2C%2037018%20Malcesine%20VR!5e0!3m2!1sit!2sit!4v1" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                title="Gelateria Cento Per Cento — Via Castello 31, Malcesine, Lago di Garda"
              ></iframe>
            )}
          </div>
          
          <div className="malcesine-photo from-right">
            <img src={MalcesinePhoto} alt="Malcesine panoramic view — Lago di Garda, location of Gelateria Cento Per Cento" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
