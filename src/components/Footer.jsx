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
        </div>
        <div className="fb" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <p className="fc">© 2026 <span itemProp="name">Gelateria Cento Per Cento di Bottesi Fabrizio</span> · <span itemProp="streetAddress">Via Castello, 31</span> · <span itemProp="postalCode">37018</span> <span itemProp="addressLocality">Malcesine</span> (<span itemProp="addressRegion">VR</span>) · P.IVA 01515910220</p>
          <p className="fc">{t('fs')}</p>
        </div>
      </div>
    </footer>
  );
}
