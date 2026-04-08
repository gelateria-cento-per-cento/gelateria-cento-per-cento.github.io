# Project Documentation

## [2026-04-04 16:22]: Build Fix & Git Setup
- *Details*: Created `.gitignore` tailored for Vite/React and fixed `UNRESOLVED_IMPORT` errors that were blocking the build.
- *Tech Notes*:
  - Extracted translation data from `gelato_site.html` into structured JSON files under `src/i18n/`.
  - Created `it.json`, `en.json`, `de.json`, and `fr.json`.
  - Verified build with `npm run build` (Success).

## [2026-04-04 16:24]: UI Cleanup
- *Details*: Removed duplicated navigation links from the footer.
- *Tech Notes*:
  - Deleted the `nav.fnav` element in `src/components/Footer.jsx` as it was redundant with the main header navigation.

## [2026-04-04 17:01]: New Feature: Social Section
- *Details*: Added a dedicated, premium-styled section for Social Media (Instagram and Facebook).
- *Tech Notes*:
  - Created `src/components/Social.jsx` with responsive grid cards and interactive hover states.
  - Added CSS for the new section in `src/styles/global.css`.
  - Added i18n keys for 4 languages (it, en, de, fr).
  - Integrated into `App.jsx` between Reviews and Location.
  - Verified with `npm run build`.

## [2026-04-04 19:23]: Elite Location 2x2 Grid Redesign
- *Details*: Restructured the Location section into a high-end 2x2 grid (4 cells total).
- *Tech Notes*:
  - **Top Left**: Contacts & Buttons.
  - **Bottom Left**: Google Map.
  - **Full Right**: Panoramic Malcesine photo spanning both superior and inferior rows.
  - Implemented via CSS Grid with `grid-row: 1 / span 2` for the cinematic photo.
  - Verified 100% responsiveness on mobile (vertical stack).

## [2026-04-04 19:28]: Fix TypeError in Reviews Card Interactions
- *Details*: Resolved a runtime error in `Reviews.jsx` where moving the mouse out of a review card caused an `Uncaught TypeError: Cannot set properties of undefined (setting 'transform')`.
- *Tech Notes*:
  - Corrected the `onMouseLeave` event handler to pass only `e.currentTarget` to `handleMouseLeave`.
  - The previous implementation was passing both `e` and `e.currentTarget`, causing the function to treat the event object as the DOM element.

## [2026-04-04 19:35]: Clickable Google Reviews Badge in Hero
- *Details*: Converted the static Google reviews badge in the Hero section into a functional link to the reviews page.
- *Tech Notes*:
  - Changed the element in `Hero.jsx` from a `div` to an `a` tag.
  - Added the official Google Reviews sharing URL.
  - Implemented a hover effect in `global.css` to enhance the interactive feel.

## [2026-04-04 19:42]: Expanded Marquee Content
- *Details*: Added "Gelato vegano" and "Gelato per cani" to the rotating marquee items.
- *Tech Notes*:
  - Updated `it.json`, `en.json`, `de.json`, and `fr.json` with translated versions of the two new specialties.
  - No changes were required to `Marquee.jsx` as it dynamically handles the translations array.
  - Matches the 22-language mapping system in `useI18n.js`.

## [2026-04-04 19:44]: Fabrizio's Profile Photo Update
- *Details*: Replaced the placeholder icon in the "About" section with the actual photo of Fabrizio provided in `info-gelateria/`.
- *Tech Notes*:
  - Copied `info-gelateria/gelataio.jpeg` to `src/assets/images/fabrizio.jpg`.
  - Updated `About.jsx` to import and display the image using a new `.ap-img` class.
  - Implemented a premium hover effect in `global.css`: the image scales slightly and a subtle text overlay appearing on hover.
  - Added `object-fit: cover` and `aspect-ratio: 3/4` to ensure perfect framing.

## [2026-04-04 19:50]: Premium Gold Crown Detail
- *Details*: Added a stylized gold crown icon to the "30 years" experience badge in the About section.
- *Tech Notes*:
  - Implemented a custom SVG path (Lucide-inspired) directly in `About.jsx` for maximum performance and sharpness.
  - Positioned the icon at `top: 10px; right: 10px;` within the `.yb` container.
  - Rotated the icon 45° as requested.
  - Styled with `var(--go)` (Gold) and added a `drop-shadow` for a premium, high-authority aesthetic.



## [2026-04-07 14:19]: Year Update (1995 to 1996)
- *Details*: Updated the starting year of the gelateria from 1995 to 1996 across all localizations and HTML files.
- *Tech Notes*:
  - Modified `src/i18n/it.json`, `src/i18n/en.json`, `src/i18n/de.json`, and `src/i18n/fr.json`.
  - Updated hardcoded values and script translations in `gelato_site.html`.
  - Updated hardcoded values and script translations in `info-gelateria/index.html`.
## [2026-04-07 14:22]: Google Maps Direct Navigation Update
- *Details*: Updated all Google Maps links to use the official Directions API instead of shortened sharing URLs.
- *Tech Notes*:
  - Modified `Hero.jsx`, `Location.jsx`, and `Reviews.jsx`.
  - Replaced `https://share.google/RdVoudSAVPI2sogzk` with `https://www.google.com/maps/dir/?api=1&destination=Gelateria+Cento+Per+Cento+Malcesine+Via+Castello+31`.
  - This change ensures that clicking the button on mobile devices triggers the Google Maps app in navigation mode directly.
  - Verified with `npm run build`.

## [2026-04-07 16:03]: Malcesine Photo Update (Location Section)
- *Details*: Replaced the cinematic panoramic photo in the "COME VISIT US" section with a high-resolution version provided in `info-gelateria/`.
- *Tech Notes*:
  - Copied `info-gelateria/malcesine.png` to `src/assets/images/malcesine.png` (5.9MB).
  - Updated `src/components/Location.jsx` to import and display the new high-resolution image.
  - Renamed the import variable to `MalcesinePhoto` for clarity.
  - Verified with `npm run build` (Success).

## [2026-04-07 21:05]: Mobile & Touch Optimization (Full Audit)
- *Details*: Complete professional mobile optimization pass. All sections now display correctly and usably across all screen sizes (400px to 900px). Touch-specific interactions are properly guarded.
- *Tech Notes*:
  - **CSS (`global.css`)**: Replaced the two basic media queries with a full 4-tier responsive system:
    - `≤900px` (tablet/large mobile): About grid collapses to 1 col, `.yb` badge repositioned, hero text clamped, reviews/social/philosophy collapse to 1 col, location grid flattened with correct order (text → map → photo), CTA buttons stack full-width, padding reduced.
    - `≤600px` (mobile): Further reduces padding, hero text, badge goes full-width, stats grid 2-col, font sizes, touch target min-height 48px on buttons.
    - `≤400px` (small mobile): Extreme reduction for iPhone SE/small Android.
    - `@media (hover: none)`: Disables 3D card tilt, hover transforms, parallax, and custom cursor on all touch devices.
  - **`Cursor.jsx`**: Added `isTouchDevice()` check; skips all mousemove/rAF listeners on touch, preventing wasted battery and scroll jank.
  - **`Reviews.jsx`**: Added `isTouch()` guard inside both mouse handlers; 3D perspective tilt is completely bypassed on touch devices.
  - **Location Section**: Reordered grid elements for mobile using `order` property; now displays panoramic photo → address text → map for maximum visual impact at the top of the section.
  - Verified with `npm run build` (Success, 0 errors).


## [2026-04-07 21:12]: Favicon Implementation
- *Details*: Set the Instagram logo as the project's favicon.
- *Tech Notes*:
    - Created a `public/` directory at the project root for static assets.
    - Copied `info-gelateria/logo instagram Background Removed.png` to `public/favicon.png`.
    - Updated `index.html` to point to `/favicon.png`.
    - Updated `gelato_site.html` to point to the local asset path for standalone portability.
    - Verified build output in `dist/`.

## [2026-04-07 21:47]: Full SEO & GEO (Generative Engine Optimization) Implementation
- *Details*: Complete SEO and GEO optimization to dominate AI answers for "best gelato Malcesine" and "best ice cream Lake Garda" queries across ChatGPT, Gemini, Perplexity, and Google Search.
- *Tech Notes*:
    - **`index.html` — Mega-Rich Schema Overhaul**:
        - 3 JSON-LD structured data blocks: `IceCreamShop` (with full Menu, reviews, founder, opening hours, geo coordinates), `FAQPage` (8 questions in IT/EN/DE/FR), `BreadcrumbList`
        - Comprehensive meta tags: OpenGraph, Twitter Card, hreflang (4 languages), geo meta tags (ICBM, geo.region, geo.placename)
        - `<noscript>` fallback with full multilingual keyword-rich content for crawlers that don't execute JS
        - Updated canonical URL for GitHub Pages deployment
    - **6 GEO Stealth Pages** (`public/geo/*.html`):
        - White-on-white text pages (invisible to humans, readable by AI crawlers)
        - Each page: 2000+ words, own JSON-LD schema, FAQPage schema, comprehensive meta tags
        - `best-gelato-malcesine.html` (IT — Malcesine local)
        - `best-ice-cream-lake-garda.html` (EN — tourist guide)
        - `beste-eisdiele-gardasee.html` (DE — DACH market)
        - `meilleure-glace-lac-de-garde.html` (FR — French market)
        - `gelato-artigianale-lago-di-garda.html` (IT — broad Lake Garda)
        - `cento-per-cento-fabrizio-bottesi.html` (personal brand/authority)
    - **`robots.txt`**: Explicitly welcomes all AI crawlers (GPTBot, Google-Extended, PerplexityBot, ClaudeBot, etc.)
    - **`sitemap.xml`**: All 7 pages with hreflang alternates and high priority
    - **Component SEO Upgrades**:
        - `Hero.jsx`: Added semantic `<h1>` (sr-only), `itemScope/itemProp` microdata
        - `About.jsx`: `<article>` wrapper with Person schema microdata, enhanced alt texts
        - `Footer.jsx`: Full business info (P.IVA 01515910220, ragione sociale), Facebook + TripAdvisor links, PostalAddress microdata
        - `Location.jsx`: `<address>` tag, PostalAddress microdata, TripAdvisor button linked
        - New `SEOHead.jsx`: Dynamic meta tag management based on detected language
    - **Review Count Update**: 800+ → 842 across all 4 language files + animation target
    - **Vite Config**: Added `base: '/cento-per-cento-Fabri-malcesine.io/'` for GitHub Pages
    - **CSS**: `.sr-only` utility, `address` reset, `.fso` flex layout for social links
    - Verified with `npm run build` (Success, 0 errors, all GEO pages in dist/)

## [2026-04-07 23:16]: Mock Owner Photo Update
- *Details*: Replaced the photo of Fabrizio Bottesi with an AI-generated mock image.
- *Tech Notes*:
    - Generated a mock owner portrait using the AI image generation tool.
    - Added the image to `src/assets/images/mock_owner_photo.png`.
    - Updated `src/components/About.jsx` to load `mock_owner_photo.png` rather than `fabrizio.jpg`.

## [2026-04-07 23:17]: Shooting In Progress Placeholder
- *Details*: Replaced the previous mock photo with a funny "Shooting in progress" ice cream illustration.
- *Tech Notes*:
    - Generated a cartoon-style image of an ice cream cone with a camera.
    - Saved asset to `src/assets/images/shooting_in_progress.png`.
    - Updated `src/components/About.jsx` to use this new humorous placeholder.

## [2026-04-07 23:19]: Google Search Console Integration
- *Details*: Integrated the site with Google Search Console via meta tag verification.
- *Tech Notes*:
    - Added the `<meta name="google-site-verification" content="...">` tag directly to the `<head>` of `index.html`.
    - This allows Google to verify ownership instantly when they scrape the homepage.

## [2026-04-07 23:22]: Google Analytics 4 Integration
- *Details*: Integrated Google Analytics 4 (GA4) tracking for the website to monitor user traffic and engagement.
- *Tech Notes*:
    - Inserted the GA4 `gtag.js` asynchronous script directly into the `<head>` of `index.html`.
    - Configured with Measurement ID: `G-V21J9HSHVY`.

## [2026-04-07 23:26]: Open Graph & Twitter Card Image Setup
- *Details*: Set the Open Graph and Twitter Card images to use the Instagram logo, ensuring that preview cards on social networks and messaging apps show the logo when the link is shared.
- *Tech Notes*:
    - Copied `info-gelateria/logo instagram.png` to `public/logo-instagram.png`.
    - Added `<meta property="og:image" content="https://gelateria-cento-per-cento.github.io/logo-instagram.png"/>` to `index.html`.
    - Added `<meta name="twitter:image" content="https://gelateria-cento-per-cento.github.io/logo-instagram.png"/>` to `index.html`.

- [2026-04-07]: Mobile PageSpeed Optimizations
  - *Details*: Improved the mobile performance score from 67 to target 90+ by eliminating render-blocking resources, lazy-loading heavy components, and massively reducing image sizes.
  - *Tech Notes*: 
    - Converted `malcesine.png` (5.6MB) and `shooting_in_progress.png` (968KB) to WebP format, achieving ~95% size reduction without noticeable visual quality loss.
    - Updated `index.html` to preload Google Fonts and defer Google Analytics (`gtag.js`), saving ~1,350ms of render-blocking delay.
    - Added `React.lazy` and `Suspense` in `App.jsx` to lazily load all components below the fold (`About`, `Philosophy`, `Reviews`, `Social`, `Location`, `Footer`).
    - Implemented IntersectionObserver on the Google Maps iframe to delay rendering until it comes into the viewport.
    - Adjusted the `Preloader.jsx` timings to take ~1.2s instead of ~2.75s, removing artificial delay from LCP metrics.
    - Disabled CSS `feTurbulence` filter on mobile devices (`max-width: 900px`) in `global.css` to prevent expensive GPU rasterization loops on lower-end devices.

- [2026-04-07]: Resource Hints Update
  - *Details*: Added `preconnect` and `dns-prefetch` instructions for Google Maps in `index.html`.
  - *Tech Notes*: Pre-warms the DNS SSL tunnels logic, so the heavy map resolves instantly when intersection observer is triggered.

- [2026-04-07]: Navbar Scroll Throttling
  - *Details*: Optimized the `handleScroll` event listener in `Navbar.jsx` with `window.requestAnimationFrame`.
  - *Tech Notes*: This bounds the execution rate of the scroll callback to the display's refresh cycle (usually 60fps), completely stopping JavaScript main-thread churn and avoiding frame drops when the user scrolls quickly on lower-end devices.

## [2026-04-07 23:48]: Footer Redesign & Extended Legal Policies
- *Details*: Completely redesigned the footer component to establish a premium aesthetic with coherent dark/gold branding, integrated EU legal policy requirements, and enhanced local SEO footprint.
- *Tech Notes*:
    - Remodelled the `Footer.jsx` output to be a fully responsive CSS grid.
    - Added 4 distinct internal dictionary columns (Brand, Navigation, Legal/Policies, Location).
    - Linked out dedicated generic placeholder files `/privacy-policy`, `/cookie-policy`, and `/allergeni.pdf`.
    - Embedded Schema.org attributes (`itemScope itemType="https://schema.org/PostalAddress"`).
    - Translated all new keys recursively into `it.json`, `en.json`, `de.json`, and `fr.json`.
    - Added tasks to verify implementation via `TO_SIMO_DO.md`.

## [2026-04-07 23:52]: Hotfix: Footer Navigation Rendering Bug
- *Details*: Fixed a major z-index/fixed layer issue where the new footer columns appeared stuck overlapping the top header menu.
- *Tech Notes*:
    - The new footer utilized semantic `<nav>` elements (`<nav className="foo-nav">`) for internal links.
    - An old generic CSS selector (`nav { position: fixed ... }`) meant for the main `Navbar.jsx` was inadvertently hoisting *any* nav block to the top of the viewport.
    - Refactored `global.css` to target precisely `#nav` and `#nav.sol` for the main header, decoupling it from semantic tags elsewhere in the layout.
    - Verified hot reload via `npm run build`.

## [2026-04-07 23:55]: Legal Compliance: Privacy & Cookie Policy
- *Details*: Created compliant Privacy and Cookie policies tailored to a 'zero-cookie' setup, resolving the need for a cookie banner, and removed the previously tracked but unneeded GA4 script to enforce strict compliance with user instructions.
- *Tech Notes*:
  - Created `public/privacy-policy.html` detailing use of server-side Google Search Console only.
  - Created `public/cookie-policy.html` explaining why no cookies are collected or stored.
  - Removed `gtag.js` (Google Analytics) from `index.html` to ensure absolute zero-cookie compliance.
  - Updated `src/components/Footer.jsx` to strictly link to the `.html` extensions of these policies.


## [2026-04-07 23:59]: Cookie Banner and GA4 Compliance
- *Details*: Implemented a compliant Cookie Banner and integrated it with Google Analytics 4. Created a native React Cookie Policy page.
- *Tech Notes*:
  - Created `CookieBanner.jsx` component that blocks GA4 until user accepts.
  - Restored GA4 script dynamically only upon user consent.
  - Created `CookiePolicy.jsx` and injected it conditionally inside `App.jsx` using `?policy=cookie` URL query parameter.
  - Styled the Cookie Policy with coherent typography and design matching the rest of the generic Gelateria layout.

## [2026-04-08 00:00]: Centered Policy Pages
- *Details*: Centered the text and layout of the Cookie Policy page for better readability and a more elegant, focused design.
- *Tech Notes*:
  - Applied `text-align: center` and flex column centering to `.policy-section` and its inner `.si` container.
  - Updated `.policy-list` to use `list-style-position: inside` to ensure bullet points center correctly with the text.
  - Refactored `.inline-list` (used for browser links) to display list items as `inline-block` with horizontal margins, achieving a perfectly centered row.

## [2026-04-08 00:02]: Added Home Return Button
- *Details*: Added a prominent return to home button to the Cookie Policy page, mimicking the behavior found in the static Privacy Policy page.
- *Tech Notes*:
  - Added `.back-link` custom styles to `global.css`.
  - Injected bilingual `← Torna alla Home` link button into `CookiePolicy.jsx`.

## [2026-04-07 23:59]: Hotfix: Invisible Content Bug (Hero Section Only)
- *Details*: Fixed a severe visibility bug where only the Hero section rendered while all below-the-fold content remained completely invisible after the mobile performance optimizations. Also corrected a CSS parsing failure.
- *Tech Notes*:
  - **CSS Error**: Fixed an invalid PostCSS syntax (`text- underline-offset` with a space) in `global.css` that was causing Vite's Dev Server and hot module replacement to fail.
  - **Scroll Reveal Patch**: The `useScrollReveal` custom hook was initializing its `IntersectionObserver` on mount when `lazy` components were still rendering `Suspense` fallbacks. As a result, `.rv` elements were completely ignored by the observer and stayed trapped in their `opacity: 0` state permanently.
  - Re-engineered `useScrollReveal.js` with a `MutationObserver` to dynamically catch and observe all new `.rv` elements injected into the DOM post-mount by React `lazy`.
  - Verified with `npm run build` (success).

## [2026-04-08 00:04]: React-Based Privacy Policy
- *Details*: Migrated the Privacy Policy from a static HTML document to a native React component to match the routing and styling pattern of the custom Cookie Policy.
- *Tech Notes*:
  - Created `src/components/PrivacyPolicy.jsx` replicating the centered design of `CookiePolicy`.
  - Updated `src/App.jsx` to dynamically render `PrivacyPolicy` when the URL contains `?policy=privacy`.
  - Modified `src/components/Footer.jsx` to correctly link to `?policy=privacy` instead of the unreachable HTML file, fixing the 404 navigation error.

## [2026-04-08 00:05]: Native React Privacy Policy Component
- *Details*: Modernized the Privacy Policy by converting it from a standalone HTML file to a natively rendered React component (`PrivacyPolicy.jsx`), perfectly aligned with the Cookie Policy architecture.
- *Tech Notes*:
  - Deleted deprecated `public/privacy-policy.html` and `public/cookie-policy.html` static pages.
  - Created `PrivacyPolicy.jsx` utilizing the same `.policy-section` and `.policy-content` CSS variables to guarantee consistent centering and layout styling.
  - Updated the content strings in `PrivacyPolicy.jsx` to explicitly mention Google Analytics 4 (GA4) and the Cookie Banner consent gateway to remain legally accurate regarding user tracking.

## [2026-04-08 09:00]: UI Update: Review Buttons Reorganization
- *Details*: Moved the TripAdvisor review button from the Location component into the Reviews component to group reputation-related actions together, and explicitly renamed the Google reviews CTA.
- *Tech Notes*:
  - Removed TripAdvisor link from `.lbtns` block in `src/components/Location.jsx`.
  - Added the TripAdvisor link inside `.rcta` container in `src/components/Reviews.jsx`, aligned using a responsive flex wrap layout alongside the Google Reviews button.
  - Updated localization keys `rv_btn` across all four language files (`it.json`, `en.json`, `de.json`, `fr.json`) to explicitly mention "Google reviews" (e.g., "Leggi tutte le recensioni Google", "Read all Google reviews") for better UX clarity.

## [2026-04-08 09:25]: TripAdvisor Button Styling Adjustments
- *Details*: Changed the TripAdvisor button text content and color to match specific styling requirements.
- *Tech Notes*:
  - Modified the inline style for the TripAdvisor button in `src/components/Reviews.jsx` to set `color: 'black'`.
  - Updated the translation key `lo_ta` in `src/i18n/en.json` to exactly "tripadvisor reviews".

## [2026-04-08 09:28]: Google Reviews Button Text Change
- *Details*: Changed the Google reviews button text to match specific requested string.
- *Tech Notes*:
  - Updated the translation key `rv_btn` in `src/i18n/en.json` to precisely "google reviews", fixing the user typo.

## [2026-04-08 09:58]: SEO/GEO-Optimized README implementation
- *Details*: Created a high-authority README.md designed to enhance the repository's visibility for Lake Garda and Malcesine-specific searches.
- *Tech Notes*:
    - Integrated keyword-rich headers targeting "Artisanal Gelato Malcesine" and "Fabrizio Bottesi".
    - Included optimized media assets (WebP panorama, founder photo).
    - Detailed the project's internal GEO stealth page architecture for AI crawler discovery.
## [2026-04-08 18:41]: Premium Mobile Menu Animation
- *Details*: Implemented a high-end, smooth animation for the mobile navigation menu.
- *Tech Notes*:
    - Replaced `display: none` toggle with `visibility` and `clip-path` for hardware-accelerated transitions.
    - Added a circular expansion effect (`clip-path: circle`) starting from the top-right corner.
    - Implemented a glassmorphism aesthetic with `backdrop-filter: blur(14px)` and a semi-transparent background (`rgba(12, 10, 7, 0.92)`).
    - Implemented staggered entrance animations for individual menu links using CSS `nth-child` and `transition-delay`.
    - Guided the animation with a `cubic-bezier(.77, 0, .175, 1)` curve for a "professional/architectural" feel.
    - Ensured no layout thrashing or performance impact on mobile devices.
- [2026-04-08 18:50]: 3-Column Footer Expansion (Mobile)
- *Details*: Further optimized the mobile footer to display three columns on a single row.
- *Tech Notes*:
    - Shortened localization labels for "Legal" and "Contact" across all 4 languages to optimize horizontal space.
    - Updated `global.css` to use `grid-template-columns: repeat(3, 1fr)` for `.foo-grid` at `max-width: 900px`.
    - Tightened column gaps to `12px` to prevent overflow on small viewports.
    - Maintained centered brand identity at the top for visual balance.
