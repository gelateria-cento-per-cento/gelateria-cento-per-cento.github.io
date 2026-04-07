import React from 'react';
import { useI18n } from '../hooks/useI18n';

export default function Social() {
  const { t } = useI18n();

  return (
    <section id="social">
      <div className="si">
        <div className="social-head rv">
          <p className="eyebrow">{t('so_e')}</p>
          <h2 className="stitle" dangerouslySetInnerHTML={{ __html: t('so_t') }}></h2>
          <div className="srule"></div>
        </div>

        <div className="social-grid">
          <a href="https://www.instagram.com/cento_per_cento_fabrimalcesine" target="_blank" rel="noopener noreferrer" className="social-card rv from-left">
            <div className="sc-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
            <div className="sc-content">
              <h3>Instagram</h3>
              <p>{t('so_ig_p')}</p>
            </div>
            <div className="sc-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </div>
          </a>

          <a href="https://www.facebook.com/pages/Gelateria-Cento-Per-Cento/370602093009786" target="_blank" rel="noopener noreferrer" className="social-card rv from-right">
            <div className="sc-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </div>
            <div className="sc-content">
              <h3>Facebook</h3>
              <p>{t('so_fb_p')}</p>
            </div>
            <div className="sc-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
