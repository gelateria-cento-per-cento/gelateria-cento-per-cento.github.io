import React from 'react';
import { useI18n } from '../hooks/useI18n';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer itemScope itemType="https://schema.org/IceCreamShop">
      <meta itemProp="name" content="Gelateria Cento Per Cento" />
      <meta itemProp="telephone" content="+393355284062" />
      <meta itemProp="priceRange" content="€" />
      <div className="fi">
        <div className="ft">
          <div className="flogo">Cento <em>Per Cento</em></div>

          <nav className="fso" aria-label="Social media links">
            <a href="https://www.instagram.com/cento_per_cento_fabrimalcesine" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram ↗</a>
            <a href="https://www.facebook.com/pages/Gelateria-Cento-Per-Cento/370602093009786" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook ↗</a>
            <a href="https://www.tripadvisor.it/Restaurant_Review-g194807-d2049588-Reviews-Gelateria_Cento_Per_Cento-Malcesine_Province_of_Verona_Veneto.html" target="_blank" rel="noopener noreferrer" aria-label="TripAdvisor">TripAdvisor ↗</a>
          </nav>
        </div>
        <div className="fb" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <p className="fc">© 2026 <span itemProp="name">Gelateria Cento Per Cento di Bottesi Fabrizio</span> · <span itemProp="streetAddress">Via Castello, 31</span> · <span itemProp="postalCode">37018</span> <span itemProp="addressLocality">Malcesine</span> (<span itemProp="addressRegion">VR</span>) · P.IVA 01515910220</p>
          <p className="fc">{t('fs')}</p>
        </div>
      </div>
    </footer>
  );
}
