import React from 'react';
import { useI18n } from '../hooks/useI18n';

export default function Philosophy() {
  const { t } = useI18n();

  return (
    <section id="phil">
      <div className="si">
        <div className="ph-head rv">
          <p className="eyebrow">{t('ph_e')}</p>
          <h2 className="stitle" dangerouslySetInnerHTML={{ __html: t('ph_t') }}></h2>
          <div className="srule"></div>
        </div>
        <div className="pg">
          <div className="pc rv">
            <span className="pn">01</span>
            <h3 className="pct">{t('p1t')}</h3>
            <p className="pcx">{t('p1x')}</p>
          </div>
          <div className="pc rv">
            <span className="pn">02</span>
            <h3 className="pct">{t('p2t')}</h3>
            <p className="pcx">{t('p2x')}</p>
          </div>
          <div className="pc rv">
            <span className="pn">03</span>
            <h3 className="pct">{t('p3t')}</h3>
            <p className="pcx">{t('p3x')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
