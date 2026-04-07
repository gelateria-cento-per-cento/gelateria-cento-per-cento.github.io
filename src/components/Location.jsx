import React from 'react';
import { useI18n } from '../hooks/useI18n';
import MalcesinePhoto from '../assets/images/malcesine.png';

export default function Location() {
  const { t } = useI18n();

  return (
    <section id="loc">
      <div className="si">
        <p className="eyebrow rv">{t('lo_e')}</p>
        <h2 className="stitle rv" style={{ color: 'var(--in)' }} dangerouslySetInnerHTML={{ __html: t('lo_t') }}></h2>
        <div className="srule rv"></div>
        
        <div className="loc-grid rv">
          <div className="loc-text from-left">
            <div className="lb">
              <p className="lbl">{t('lo_a')}</p>
              <p>Via Castello, 31<br />37018 Malcesine (VR)</p>
            </div>
            <div className="lb">
              <p className="lbl">{t('lo_p')}</p>
              <a href="tel:+393355284062">+39 335 528 4062</a>
            </div>
            <div className="lbtns">
              <a href="https://www.google.com/maps/dir/?api=1&destination=Gelateria+Cento+Per+Cento+Malcesine+Via+Castello+31" target="_blank" rel="noopener noreferrer" className="btn btn-sol">
                <span>{t('lo_gm')}</span>
              </a>
              <a href="tel:+393355284062" className="btn btn-out">
                <span>{t('lo_cl')}</span>
              </a>
            </div>
          </div>
          
          <div className="mw from-left">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.0!2d10.8083!3d45.7619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781f7c9d3c9ef1d%3A0x7b2e8f3c4e5d6a7b!2sVia%20Castello%2C%2031%2C%2037018%20Malcesine%20VR!5e0!3m2!1sit!2sit!4v1" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              title="Gelateria Cento Per Cento"
            ></iframe>
          </div>
          
          <div className="malcesine-photo from-right">
            <img src={MalcesinePhoto} alt="Malcesine panoramic view" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
