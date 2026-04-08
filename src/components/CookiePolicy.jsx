import React, { useEffect } from 'react';
import { useI18n } from '../hooks/useI18n';

export default function CookiePolicy() {
  const { t, lang } = useI18n();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Title and translations
  const content = {
    it: {
      title: 'Cookie',
      desc: 'Questa Cookie Policy spiega cosa sono i cookie e come li utilizziamo sul sito della Gelateria Cento Per Cento.',
      what: 'Cosa sono i cookie?',
      what_desc: 'I cookie sono piccoli file di testo che vengono memorizzati sul tuo computer o dispositivo mobile quando visiti un sito web. Permettono al sito di ricordare le tue azioni e preferenze per un certo periodo di tempo.',
      how: 'Come utilizziamo i cookie?',
      how_desc: 'Il nostro sito web utilizza diverse tipologie di cookie:',
      tech: 'Cookie Tecnici (Strettamente Necessari):',
      tech_desc: 'Questi cookie sono essenziali per il corretto funzionamento del sito web. Consentono la navigazione sicura e l\'uso delle funzioni di base. Non richiedono il tuo consenso.',
      stat: 'Cookie Analitici (Google Analytics):',
      stat_desc: 'Utilizziamo Google Analytics 4 (GA4) per raccogliere informazioni statistiche su come gli utenti navigano sul nostro sito. Questi cookie vengono installati solo previo tuo consenso esplicito tramite il banner iniziale.',
      manage: 'Gestione del Consenso',
      manage_desc: 'Al tuo primo accesso al sito, ti viene richiesto di esprimere la tua preferenza sui cookie tramite un apposito banner. Puoi modificare o revocare il consenso in qualsiasi momento cancellando i dati di navigazione dal tuo browser.',
      disable: 'Come disabilitare i cookie dal browser',
      disable_desc: 'Puoi limitare, bloccare o eliminare i cookie di questo sito web in qualsiasi momento modificando la configurazione del tuo browser:',
      contact: 'Contatti',
      contact_desc: 'Per qualsiasi domanda relativa a questa Cookie Policy:'
    },
    en: {
      title: 'Cookie',
      desc: 'This Cookie Policy explains what cookies are and how we use them on the Gelateria Cento Per Cento website.',
      what: 'What are cookies?',
      what_desc: 'Cookies are small text files that are stored on your computer or mobile device when you visit a website. They allow the site to remember your actions and preferences over a period of time.',
      how: 'How do we use cookies?',
      how_desc: 'Our website uses different types of cookies:',
      tech: 'Technical Cookies (Strictly Necessary):',
      tech_desc: 'These cookies are essential for the proper functioning of the website. They allow safe navigation and the use of basic functions. They do not require your consent.',
      stat: 'Analytical Cookies (Google Analytics):',
      stat_desc: 'We use Google Analytics 4 (GA4) to collect statistical information on how users navigate our site. These cookies are installed only with your explicit consent via the initial banner.',
      manage: 'Consent Management',
      manage_desc: 'Upon your first access to the site, you are asked to express your preference on cookies via a banner. You can modify or revoke your consent at any time by clearing your browser data.',
      disable: 'How to disable cookies from your browser',
      disable_desc: 'You can restrict, block or delete the cookies from this website at any time by modifying your browser configuration:',
      contact: 'Contacts',
      contact_desc: 'For any questions regarding this Cookie Policy:'
    }
  };

  const texts = content[lang] || content['en'];

  return (
    <section id="cookie-policy" className="policy-section">
      <div className="si">
        <h1 className="stitle">
          {texts.title} <em>Policy</em>
        </h1>
        <div className="srule" />

        <div className="policy-content">
          <p className="prose"><strong>Ultimo aggiornamento / Last Updated:</strong> Aprile 2026</p>
          <p className="prose">{texts.desc}</p>

          <h3 className="policy-h3">{texts.what}</h3>
          <p className="prose">{texts.what_desc}</p>

          <h3 className="policy-h3">{texts.how}</h3>
          <p className="prose">{texts.how_desc}</p>
          <ul className="policy-list">
            <li>
              <strong>{texts.tech}</strong> {texts.tech_desc}
            </li>
            <li>
              <strong>{texts.stat}</strong> {texts.stat_desc}
            </li>
          </ul>

          <h3 className="policy-h3">{texts.manage}</h3>
          <p className="prose">{texts.manage_desc}</p>

          <h3 className="policy-h3">{texts.disable}</h3>
          <p className="prose">{texts.disable_desc}</p>
          <ul className="policy-list inline-list">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Chrome</a></li>
            <li><a href="https://support.mozilla.org/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer">Firefox</a></li>
            <li><a href="https://support.apple.com/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
            <li><a href="https://support.microsoft.com/microsoft-edge/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">Edge</a></li>
          </ul>

          <h3 className="policy-h3">{texts.contact}</h3>
          <p className="prose">
            {texts.contact_desc}<br />
            <strong>Gelateria Cento Per Cento di Bottesi Fabrizio</strong><br />
            Via Castello 31, 37018 Malcesine (VR)<br />
            Email: <a href="mailto:centopercentofabrimalcesine@gmail.com">centopercentofabrimalcesine@gmail.com</a>
          </p>

          <div style={{ marginTop: '50px' }}>
            <a href="/" className="back-link">
              ← {lang === 'en' ? 'Back to Home' : lang === 'de' ? 'Zurück zur Startseite' : lang === 'fr' ? 'Retour à l\'accueil' : 'Torna alla Home'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
