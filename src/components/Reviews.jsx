import React, { useState, useEffect, useRef } from 'react';
import { useI18n } from '../hooks/useI18n';

const isTouch = () => window.matchMedia('(hover: none)').matches;

export default function Reviews() {
  const { t } = useI18n();
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIdx(parseInt(entry.target.getAttribute('data-index')));
          }
        });
      },
      { threshold: 0.6, rootMargin: '0px' }
    );

    const cards = containerRef.current.querySelectorAll('.rc');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e, card) => {
    if (isTouch()) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
    card.style.transition = 'transform .15s ease';
  };

  const handleMouseLeave = (card) => {
    if (isTouch()) return;
    card.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)';
    card.style.transition = 'transform .8s cubic-bezier(.34, 1.56, .64, 1)';
  };

  const reviewItems = [
    { key: 'r1', authorKey: 'r1_a' },
    { key: 'r2', authorKey: 'r2_a' },
    { key: 'r3', authorKey: 'r3_a' }
  ];

  return (
    <section id="rev">
      <div className="si">
        <div className="rh">
          <div className="rev-left rv">
            <p className="eyebrow">{t('rv_e')}</p>
            <h2 className="stitle" dangerouslySetInnerHTML={{ __html: t('rv_t') }}></h2>
            <div className="srule"></div>
          </div>
          <div className="rdsp rv">
            <div className="rds">4.8</div>
            <div className="rd-stars">★★★★<span className="star-p">★</span></div>
            <div className="rdc">{t('rv_c')}</div>
          </div>
        </div>
        <div className="rg" ref={containerRef}>
          {reviewItems.map((r, i) => (
            <div
              key={i}
              className={`rc rv ${activeIdx === i ? 'active' : ''}`}
              data-index={i}
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            >
              <div className="rch">
                <div className="rc-g">
                  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                </div>
                <div className="rc-v">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span>{t('rv_v')}</span>
                </div>
              </div>
              <span className="rcs">★★★★★</span>
              <p className="rct">{t(r.key)}</p>
              <div className="rc-footer">
                <p className="rca">{t(r.authorKey)}</p>
                <p className="rc-source">Google Review</p>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-nav">
          {reviewItems.map((_, i) => (
            <div key={i} className={`s-dot ${activeIdx === i ? 'active' : ''}`}></div>
          ))}
        </div>
        <div className="rcta rv" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://www.google.com/maps/dir/?api=1&destination=Gelateria+Cento+Per+Cento+Malcesine+Via+Castello+31" target="_blank" rel="noopener noreferrer" className="btn btn-rv-google">
            <span>{t('rv_btn')}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a href="https://www.tripadvisor.it/Restaurant_Review-g194807-d2049588-Reviews-Gelateria_Cento_Per_Cento-Malcesine_Province_of_Verona_Veneto.html" target="_blank" rel="noopener noreferrer" className="btn btn-rv-tripadvisor" aria-label="Leggi le recensioni su TripAdvisor">
            <span>{t('lo_ta')}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
