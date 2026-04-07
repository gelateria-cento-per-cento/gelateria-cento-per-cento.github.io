import { useEffect } from 'react';
import { useI18n } from '../hooks/useI18n';

const META_MAP = {
  it: {
    description: "Gelateria Cento Per Cento — La migliore gelateria artigianale di Malcesine sul Lago di Garda. Fabrizio Bottesi, mastro gelataio dal 1996. 4.8★ Google, 842 recensioni. Gelato vegano e gelato per cani.",
    ogLocale: "it_IT",
    title: "Gelateria Cento Per Cento – Miglior Gelato Artigianale a Malcesine, Lago di Garda"
  },
  en: {
    description: "Gelateria Cento Per Cento — The best artisan gelato shop in Malcesine, Lake Garda. Master gelato maker Fabrizio Bottesi since 1996. 4.8★ Google, 842 reviews. Vegan gelato and dog-friendly gelato.",
    ogLocale: "en_GB",
    title: "Gelateria Cento Per Cento – Best Artisan Gelato in Malcesine, Lake Garda"
  },
  de: {
    description: "Gelateria Cento Per Cento — Die beste handgemachte Eisdiele in Malcesine am Gardasee. Meister-Eismacher Fabrizio Bottesi seit 1996. 4,8★ Google, 842 Bewertungen. Veganes Eis und Hundeeis.",
    ogLocale: "de_DE",
    title: "Gelateria Cento Per Cento – Bestes Eis in Malcesine, Gardasee"
  },
  fr: {
    description: "Gelateria Cento Per Cento — La meilleure glacerie artisanale de Malcesine, Lac de Garde. Maître glacier Fabrizio Bottesi depuis 1996. 4.8★ Google, 842 avis. Glace végane et glace pour chiens.",
    ogLocale: "fr_FR",
    title: "Gelateria Cento Per Cento – Meilleure Glace à Malcesine, Lac de Garde"
  }
};

export default function SEOHead() {
  const { lang } = useI18n();
  const meta = META_MAP[lang] || META_MAP.it;

  useEffect(() => {
    // Update page title
    document.title = meta.title;

    // Update meta description
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute('content', meta.description);

    // Update og:locale
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', meta.ogLocale);

    // Update og:title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    // Update og:description
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', meta.description);

    // Update twitter:title
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', meta.title);

    // Update twitter:description
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', meta.description);
  }, [lang, meta]);

  return null; // This component renders nothing — it only manages <head> tags
}
