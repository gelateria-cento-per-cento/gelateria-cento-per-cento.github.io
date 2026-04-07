import React, { useEffect } from 'react';
import { useI18n } from '../hooks/useI18n';

export default function PrivacyPolicy() {
  const { lang } = useI18n();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    it: {
      title: 'Informativa sulla Privacy',
      desc: 'Benvenuti sul sito web della Gelateria Cento Per Cento. La tutela dei tuoi dati personali è molto importante per noi.',
      sections: [
        {
          heading: '1. Titolare del Trattamento',
          text: `Fabrizio Bottesi - Gelateria Cento Per Cento\nVia Castello, 31 - 37018 Malcesine (VR), Italia\nP.IVA: 01515910220\nEmail: info@gelateriacentopercento.it`
        },
        {
          heading: '2. Quali dati raccogliamo e perché',
          text: 'Il nostro Sito è concepito per essere un semplice strumento informativo e di vetrina. Non raccogliamo dati personali in modo attivo e non utilizziamo strumenti di tracciamento o profilazione lato client.\n\nGli unici dati considerati sono:\n- Dati di navigazione base: necessari ai server web per il corretto funzionamento, cancellati regolarmente.\n- Google Search Console: utilizzato solo a fini statistici per analizzare il posizionamento nei risultati di ricerca. Opera lato motore di ricerca e non installa cookie di tracciamento sul tuo dispositivo.'
        },
        {
          heading: '3. Trasferimento all\'Estero e Terze Parti',
          text: 'I tuoi dati non saranno diffusi o ceduti a terze parti per finalità commerciali. L\'hosting è gestito su infrastrutture sicure.'
        },
        {
          heading: '4. Diritti dell\'Interessato',
          text: 'Ai sensi del GDPR, hai il diritto, in qualunque momento, di chiedere l\'accesso ai tuoi dati, la rettifica, la cancellazione e di opporti al loro trattamento. Le richieste vanno rivolte al Titolare del Trattamento ai contatti indicati sopra.'
        }
      ]
    },
    en: {
      title: 'Privacy Policy',
      desc: 'Welcome to the Gelateria Cento Per Cento website. The protection of your personal data is very important to us.',
      sections: [
        {
          heading: '1. Data Controller',
          text: `Fabrizio Bottesi - Gelateria Cento Per Cento\nVia Castello, 31 - 37018 Malcesine (VR), Italy\nVAT ID: 01515910220\nEmail: info@gelateriacentopercento.it`
        },
        {
          heading: '2. What data we collect and why',
          text: 'Our Site is designed to be a simple showcase. We do not actively collect personal data and we do not use client-side tracking or profiling tools.\n\nThe only considered data are:\n- Basic navigation data: necessary for web servers proper functioning, regularly deleted.\n- Google Search Console: used only for statistical purposes to analyze search engine rankings. It operates on the search engine side and does not install tracking cookies on your device.'
        },
        {
          heading: '3. Transfers Abroad and Third Parties',
          text: 'Your data will not be disseminated or sold to third parties for commercial purposes. Hosting is managed on secure infrastructure.'
        },
        {
          heading: '4. Data Subject Rights',
          text: 'Under the GDPR, you have the right at any time to request access to your data, rectification, deletion, and to object to their processing. Requests must be addressed to the Data Controller at the contacts indicated above.'
        }
      ]
    }
  };

  const texts = content[lang] || content['en'];

  return (
    <section id="privacy-policy" className="policy-section">
      <div className="si">
        <h1 className="stitle">
          {texts.title.split(' ').map((word, i, arr) => 
            i === arr.length - 1 ? <em key={i}>{word}</em> : <span key={i}>{word} </span>
          )}
        </h1>
        <div className="srule" />
        
        <div className="policy-content">
          <p className="prose"><strong>Ultimo aggiornamento / Last Updated:</strong> Aprile 2026</p>
          <p className="prose">{texts.desc}</p>

          {texts.sections.map((section, index) => (
            <div key={index}>
              <h3 className="policy-h3">{section.heading}</h3>
              <p className="prose" style={{ whiteSpace: 'pre-line' }}>{section.text}</p>
            </div>
          ))}

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
