import React, { useEffect } from 'react';
import { useI18n } from '../hooks/useI18n';

export default function PrivacyPolicy() {
  const { lang, t } = useI18n();

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
          text: <><br/>Fabrizio Bottesi - Gelateria Cento Per Cento<br/>Via Castello, 31 - 37018 Malcesine (VR), Italia<br/>P.IVA: 01515910220<br/>Email: <a href="mailto:centopercentofabrimalcesine@gmail.com">centopercentofabrimalcesine@gmail.com</a></>
        },
        {
          heading: '2. Quali dati raccogliamo e perché',
          text: <>
            Il nostro Sito è principalmente uno strumento informativo. Raccogliamo dati nelle seguenti modalità:
            <ul className="policy-list" style={{ marginTop: '16px' }}>
              <li><strong>Dati di navigazione base:</strong> log di sistema necessari ai server web. Vengono elaborati in forma anonima per garantire la sicurezza e il corretto funzionamento del sito.</li>
              <li><strong>Google Analytics 4 (GA4):</strong> Utilizziamo strumenti di analisi statistica per comprendere il traffico. <strong>Questi strumenti di tracciamento vengono attivati esclusivamente previo tuo consenso esplicito</strong> (tramite il Banner Cookie all'ingresso del sito).</li>
              <li><strong>Google Search Console:</strong> Strumento lato motore di ricerca per analizzare il traffico organico. Non installa cookie di tracciamento.</li>
            </ul>
          </>
        },
        {
          heading: '3. Trasferimento all\'Estero e Terze Parti',
          text: <>I tuoi dati non saranno mai ceduti a terze parti per finalità di marketing a tua insaputa. Potranno essere condivisi in modo anonimizzato con fornitori tecnici (es. infrastruttura server, Google) nel pieno rispetto dei protocolli di sicurezza GDPR.</>
        },
        {
          heading: '4. Diritti dell\'Interessato',
          text: <>Ai sensi del GDPR (Art. 15 e successivi), hai il diritto, in qualunque momento, di chiedere l'accesso ai tuoi dati, la rettifica, la cancellazione e di opporti o limitare il loro trattamento. Se hai prestato il consenso per Google Analytics, puoi revocarlo in qualsiasi momento cancellando i cookie del browser. Le richieste dirette possono essere rivolte al Titolare del Trattamento all'email fornita.</>
        }
      ],
      back: '← Torna alla Home'
    },
    en: {
      title: 'Privacy Policy',
      desc: 'Welcome to the Gelateria Cento Per Cento website. The protection of your personal data is very important to us.',
      sections: [
        {
          heading: '1. Data Controller',
          text: <><br/>Fabrizio Bottesi - Gelateria Cento Per Cento<br/>Via Castello, 31 - 37018 Malcesine (VR), Italy<br/>VAT ID: 01515910220<br/>Email: <a href="mailto:centopercentofabrimalcesine@gmail.com">centopercentofabrimalcesine@gmail.com</a></>
        },
        {
          heading: '2. What data we collect and why',
          text: <>
            Our Site is primarily an informational showcase. We collect data in the following ways:
            <ul className="policy-list" style={{ marginTop: '16px' }}>
              <li><strong>Basic navigation data:</strong> system logs necessary for web servers. They are processed anonymously to ensure the security and proper functioning of the site.</li>
              <li><strong>Google Analytics 4 (GA4):</strong> We use statistical analysis tools to understand traffic. <strong>These tracking tools are activated exclusively upon your explicit consent</strong> (via the Cookie Banner upon entering the site).</li>
              <li><strong>Google Search Console:</strong> A search engine-side tool to analyze organic traffic. It does not install tracking cookies.</li>
            </ul>
          </>
        },
        {
          heading: '3. Transfers Abroad and Third Parties',
          text: <>Your data will never be sold to third parties for marketing purposes. They may be shared anonymously with technical providers (e.g., server infrastructure, Google) strictly adhering to GDPR security protocols.</>
        },
        {
          heading: '4. Data Subject Rights',
          text: <>Under the GDPR (Art. 15 and following), you have the right at any time to request access to your data, its rectification, deletion, and to restrict or object to its processing. If you have given consent for Google Analytics, you can revoke it at any time by clearing your browser cookies. Direct requests can be addressed to the Data Controller at the provided email.</>
        }
      ],
      back: '← Back to Home'
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
              <p className="prose">{section.text}</p>
            </div>
          ))}

          <div style={{ marginTop: '50px' }}>
            <a href="/" className="back-link">
              {texts.back}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
