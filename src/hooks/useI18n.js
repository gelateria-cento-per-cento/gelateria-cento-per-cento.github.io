import { useState, useEffect } from 'react';
import it from '../i18n/it.json';
import en from '../i18n/en.json';
import de from '../i18n/de.json';
import fr from '../i18n/fr.json';

const translations = { it, en, de, fr };

const LANG_MAP = {
  it: 'it', de: 'de', at: 'de', nl: 'de', cs: 'de', sk: 'de', hu: 'de', hr: 'de', sl: 'de',
  en: 'en', 'en-gb': 'en', 'en-us': 'en', fr: 'fr', be: 'fr', ro: 'fr',
  pl: 'en', da: 'en', sv: 'en', no: 'en', nb: 'en', ru: 'en', es: 'en', pt: 'en'
};

function detectLanguage() {
  const languages = navigator.languages || [navigator.language || 'it'];
  for (const lang of languages) {
    const full = lang.toLowerCase();
    const short = full.split('-')[0];
    if (LANG_MAP[full]) return LANG_MAP[full];
    if (LANG_MAP[short]) return LANG_MAP[short];
  }
  return 'it';
}

export function useI18n() {
  const [lang, setLang] = useState(detectLanguage());

  const t = (key) => {
    return translations[lang]?.[key] || translations['it'][key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return { t, lang, setLang };
}
