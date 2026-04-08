import React from 'react';
import { useI18n } from '../hooks/useI18n';

const isTouch = () => window.matchMedia('(hover: none)').matches;

export default function Reviews() {
  const { t } = useI18n();

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
    { flag: '🇮🇹 Italiano', key: 'r1', author: 'Maria T.' },
    { flag: '🇬🇧 English', key: 'r2', author: 'James K.' },
    { flag: '🇩🇪 Deutsch', key: 'r3', author: 'Klaus M.' }
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
            <div className="rd-stars">★★★★★</div>
            <div className="rdc">{t('rv_c')}</div>
          </div>
        </div>
        <div className="rg">
          {reviewItems.map((r, i) => (
            <div
              key={i}
              className="rc rv"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            >
              <span className="rcf">{r.flag}</span>
              <span className="rcs">★★★★★</span>
              <p className="rct">{t(r.key)}</p>
              <p className="rca">{r.author}<span className="rcp">· Google</span></p>
            </div>
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
