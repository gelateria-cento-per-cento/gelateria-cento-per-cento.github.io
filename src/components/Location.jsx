import React from 'react';
import { useI18n } from '../hooks/useI18n';

export default function Location() {
  const { t } = useI18n();

  return (
    <section id="loc">
      <div className="si">
        <p className="eyebrow rv">{t('lo_e')}</p>
        <h2 className="stitle rv" style={{ color: 'var(--in)' }} dangerouslySetInnerHTML={{ __html: t('lo_t') }}></h2>
        <div className="srule rv"></div>
        <div className="lg">
          <div className="li rv from-left">
            <div className="lb">
              <p className="lbl">{t('lo_a')}</p>
              <p>Via Castello, 31<br />37018 Malcesine (VR)<br />Lago di Garda, Italia</p>
            </div>
            <div className="lb">
              <p className="lbl">{t('lo_p')}</p>
              <a href="tel:+393355284062">+39 335 528 4062</a>
            </div>
            <div className="lb">
              <p className="lbl">Instagram</p>
              <a href="https://www.instagram.com/cento_per_cento_fabrimalcesine" target="_blank" rel="noopener noreferrer">@cento_per_cento_fabrimalcesine</a>
            </div>
            <div className="lb">
              <p className="lbl">TripAdvisor</p>
              <a href="https://www.tripadvisor.it/Restaurant_Review-g194807-d2049588-Reviews-Gelateria_Cento_Per_Cento-Malcesine_Province_of_Verona_Veneto.html" target="_blank" rel="noopener noreferrer">{t('lo_ta')}</a>
            </div>
            <div className="lbtns">
              <a href="https://share.google/RdVoudSAVPI2sogzk" target="_blank" rel="noopener noreferrer" className="btn btn-sol">
                <span>{t('lo_gm')}</span>
              </a>
              <a href="tel:+393355284062" className="btn btn-out">
                <span>{t('lo_cl')}</span>
              </a>
            </div>
          </div>
          <div className="mw rv from-right">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.0!2d10.8083!3d45.7619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781f7c9d3c9ef1d%3A0x7b2e8f3c4e5d6a7b!2sVia%20Castello%2C%2031%2C%2037018%20Malcesine%20VR!5e0!3m2!1sit!2sit!4v1" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              title="Gelateria Cento Per Cento"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
