import React from 'react';
import { useI18n } from '../hooks/useI18n';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer>
      <div className="fi">
        <div className="ft">
          <div className="flogo">Cento <em>Per Cento</em></div>

          <div className="fso">
            <a href="https://www.instagram.com/cento_per_cento_fabrimalcesine" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
          </div>
        </div>
        <div className="fb">
          <p className="fc">© 2025 Gelateria Cento Per Cento · Via Castello, 31 · 37018 Malcesine (VR) · P.IVA [DA INSERIRE]</p>
          <p className="fc">{t('fs')}</p>
        </div>
      </div>
    </footer>
  );
}
