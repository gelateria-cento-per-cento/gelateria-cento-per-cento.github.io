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
