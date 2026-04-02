# DOCUMENTATION.MD

- [2026-04-02 21:00]: Miglioramento Leggibilità Hero.
  - *Details*: Aumentato il peso e la dimensione del testo "Malcesine · Lago di Garda" per una migliore leggibilità su sfondi chiari.
  - *Tech Notes*: Added SEO metadata, improved internal linking, and created a hidden machine-readable page at `/ai`.

- [2026-04-02 21:20]: Hero Subtitle Alignment Fix
  - *Details*: Fixed an issue where the hero subtitle was wider than the main title.
  - *Tech Notes*: Wrapped title and sub in `.hero-title-group` with `display: inline-grid` and `grid-template-columns: min-content`. Updated `.hero-sub` to `max-width: 100%`.

- [2026-04-02 21:10]: Transizione Multi-page & Pagine Legali.
  - *Details*: Introdotto `react-router-dom` con `HashRouter`. Create pagine separate per Privacy Policy e Cookie Policy, popolate con contenuti professionali bilingue (IT/EN).
  - *Tech Notes*: Nuova dipendenza `react-router-dom`. Creato `legalContent.js`, aggiornato `App.jsx` e `index.css`. Build finale rigenerata e verificata.

- [2026-04-02 21:15]: GEO Optimization & Stealth AI Information.
  - *Details*: Implementata ottimizzazione per Generative Engines (LLMs). Aggiunta una pagina "stealth" bilingue bilingue /ai e /llm invisibile agli umani (testo bianco su bianco, senza menu), dedicata esclusivamente ai crawler AI (Gemini, ChatGPT).
  - *Tech Notes*:- `[x]` Add JSON-LD Structured Data to the `SEO` component in `App.jsx`.
- `[x]` Add `/ai` and `/llm` routes to `App.jsx`.
- `[x]` Implement the `AIPage` component:
  - `[x]` Define a clean HTML structure with H1, H2, and details for LLMs.
  - `[x]` Apply "Stealth" styles (invisible to humans: white text on white background).
  - `[x]` Ensure it doesn't render `Navbar` and `Footer`.
- `[x]` Update `DOCUMENTATION.md` with the new GEO strategy.
- `[ ]` Update `TO_SIMO_DO.md` for any manual steps if needed.
- `[x]` Verify the build and new routes.
lla `dist/`.

- [2026-04-02 21:25]: Sezione Social & Integrazione Facebook.
  - *Details*: Aggiunta una sezione dedicata ai social media (Instagram e Facebook) per incoraggiare l'engagement e il contatto diretto.
  - *Tech Notes*:
    - Creata nuova icona `Facebook` nel componente `Icons`.
    - Implementato componente `Social` in `App.jsx`.
    - Aggiunte 66 nuove chiavi di traduzione in `translations.js` (per 22 lingue).
    - Styling premium in `index.css` con effetti hover dinamici e layout responsive.

## Current Status
**Immediate Next Step**: Progetto COMPLETATO e pronto per il rilascio. Verificare il corretto funzionamento dei link social in staging.
