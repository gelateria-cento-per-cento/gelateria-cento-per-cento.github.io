# TO_SIMO_DO — Manual Actions Required

## ⚠️ CRITICAL: Enable GitHub Pages (1 minute)
1. Go to **https://github.com/simo-hue/cento-per-cento-Fabri-malcesine/settings/pages**
2. Under **Build and deployment → Source**, select **GitHub Actions**
3. Click **Save**
4. The deploy workflow has already triggered — once you change this setting, future pushes to `main` will auto-deploy
5. Your site will be live at: **https://gelateria-cento-per-cento.github.io/cento-per-cento-Fabri-malcesine.github.io/**

## ⚠️ Post-Deployment: Google Search Console
1. **Register the site** on [Google Search Console](https://search.google.com/search-console)
2. **Submit the sitemap**: `https://gelateria-cento-per-cento.github.io/cento-per-cento-Fabri-malcesine.github.io/sitemap.xml`
3. **Request indexing** for the main page

## ⚠️ Post-Deployment: Bing Webmaster Tools
1. **Register on** [Bing Webmaster Tools](https://www.bing.com/webmasters) (ChatGPT uses Bing)
2. **Submit the sitemap** so BingBot (and therefore ChatGPT) discovers all pages
## 🔜 Future: Custom Domain
- When ready, register `gelateriacentopercento.it` (or similar)
- Point it to the GitHub Pages site (CNAME record)
- Update canonical URLs, sitemap, and schema across all files