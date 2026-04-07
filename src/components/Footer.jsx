import React from 'react';
import { useI18n } from '../hooks/useI18n';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer itemScope itemType="https://schema.org/IceCreamShop">
      <meta itemProp="name" content="Gelateria Cento Per Cento" />
      <meta itemProp="telephone" content="+393355284062" />
      <meta itemProp="priceRange" content="€" />
      
      <div className="foo-grid">
        <div className="foo-col foo-brand">
          <div className="flogo">Cento <em>Per Cento</em></div>
          <p className="foo-desc">{t('f_ab')}</p>
        </div>

        <div className="foo-col">
          <h4 className="foo-h">{t('f_ex')}</h4>
          <nav className="foo-nav">
            <a href="#about">{t('na')}</a>
            <a href="#philosophy">{t('np')}</a>
            <a href="#reviews">{t('nr')}</a>
            <a href="#location">{t('nl')}</a>
          </nav>
        </div>

        <div className="foo-col">
          <h4 className="foo-h">{t('f_le')}</h4>
          <nav className="foo-nav">
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">{t('f_pr')}</a>
            <a href="/cookie-policy" target="_blank" rel="noopener noreferrer">{t('f_ck')}</a>
            <a href="/allergeni.pdf" target="_blank" rel="noopener noreferrer">{t('f_al')}</a>
          </nav>
        </div>

        <div className="foo-col" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <h4 className="foo-h">{t('f_co')}</h4>
          <div className="foo-contact">
            <p><span itemProp="streetAddress">Via Castello, 31</span></p>
            <p><span itemProp="postalCode">37018</span> <span itemProp="addressLocality">Malcesine</span> (<span itemProp="addressRegion">VR</span>)</p>
            <p><a href="tel:+393355284062" itemProp="telephone">+39 335 528 4062</a></p>
            <p><a href="mailto:info@gelateriacentopercento.it" itemProp="email">info@gelateriacentopercento.it</a></p>
          </div>
        </div>
      </div>

      <div className="foo-bot">
        <p className="foo-copy">
          © {new Date().getFullYear()} <span itemProp="name">Gelateria Cento Per Cento di Bottesi Fabrizio</span>.<br className="foo-br" />
          {t('f_pi')} 01515910220 · REA VR-123456
        </p>
        <div className="foo-seo-links">
          <span>{t('fs')}</span>
        </div>
      </div>
    </footer>
  );
}
