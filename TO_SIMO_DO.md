# TO_SIMO_DO — Manual Actions Required

## ⚠️ Deployment: GitHub Pages Setup
1. **Create the GitHub organization** `gelateria-cento-per-cento` if not already done
2. **Create the repository** `cento-per-cento-Fabri-malcesine.io` under that org
3. **Push the code** to the new repo
4. **Enable GitHub Pages** in Settings → Pages → Source: deploy from `gh-pages` branch or GitHub Actions
5. **Configure Vite deployment**: You can use the following GitHub Action or manually build + deploy:
   - Run `npm run build` 
   - Push the `dist/` folder content to the `gh-pages` branch
6. **Verify all URLs work**:
   - Main site: `https://gelateria-cento-per-cento.github.io/cento-per-cento-Fabri-malcesine.io/`
   - GEO pages: `https://gelateria-cento-per-cento.github.io/cento-per-cento-Fabri-malcesine.io/geo/best-gelato-malcesine.html`
   - robots.txt: `https://gelateria-cento-per-cento.github.io/cento-per-cento-Fabri-malcesine.io/robots.txt`
   - sitemap.xml: `https://gelateria-cento-per-cento.github.io/cento-per-cento-Fabri-malcesine.io/sitemap.xml`

## ⚠️ Post-Deployment: Google Search Console
1. **Register the site** on [Google Search Console](https://search.google.com/search-console)
2. **Submit the sitemap**: `https://gelateria-cento-per-cento.github.io/cento-per-cento-Fabri-malcesine.io/sitemap.xml`
3. **Request indexing** for the main page

## ⚠️ Post-Deployment: Bing Webmaster Tools
1. **Register on** [Bing Webmaster Tools](https://www.bing.com/webmasters) (ChatGPT uses Bing)
2. **Submit the sitemap** so BingBot (and therefore ChatGPT) discovers all pages

## ✅ Flavor List — DONE
- All 33 flavors have been integrated into the JSON-LD schema and all 6 GEO stealth pages

## 🔜 Future: Custom Domain
- When ready, register `gelateriacentopercento.it` (or similar)
- Point it to the GitHub Pages site (CNAME record)
- Update canonical URLs, sitemap, and schema across all files