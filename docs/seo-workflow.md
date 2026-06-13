# Kairos SEO Growth Workflow

## Goal

Improve qualified discovery for Kairos so more people searching for private sexual health, intimacy tracking, libido tracking, and relationship insight tools find the app and convert to App Store downloads.

## Working model

1. **Measure**
   - Use Google Search Console for indexing, queries, impressions, CTR, and page-level performance.
   - Use privacy-preserving public signals where available: App Store listing metadata, public rankings, backlinks, and page indexing status.
   - Kairos intentionally avoids in-app analytics SDKs and tracking pixels for app data; public-site analytics should stay privacy-preserving and consistent with the privacy policy.

2. **Prioritize**
   - Technical SEO issues that block crawling/indexing first.
   - High-intent landing pages second. Use `docs/landing-page-roadmap.md` as the implementation brief for private sexual health tracker, intimacy tracker, libido tracker, relationship desire tracker, and sexual wellness journal pages.
   - App Store Optimization (ASO) third: listing title/subtitle/keywords/screenshots/reviews.
   - Content/backlink work fourth.

3. **Implement**
   - Track Kairos SEO work in `/home/hermes/kairos-seo/kairos-seo-board.md` and the dedicated Kairos SEO Slack channel/thread unless Paul explicitly asks for repository issue tracking.
   - Use small PRs with one SEO hypothesis per PR when possible.
   - Validate with `npm run build` before merging.
   - Keep all new public pages on the shared layout so canonical tags, JSON-LD support, sitemap generation, and the privacy-preserving Umami tracker stay consistent.

4. **Verify**
   - Confirm generated pages include title, description, canonical URL, Open Graph/Twitter tags, structured data when relevant, robots.txt, and sitemap output.
   - After deploy, submit or inspect URLs in Google Search Console.
   - Re-check query/impression trends after enough time has passed for Google to crawl and rank changes.

## Cadence

Before each SEO planning pass, refresh the local Search Console baseline from Hermes:

```bash
/home/hermes/kairos-seo/search_console_flow.py --inspect
```

That command writes:

- `/home/hermes/kairos-seo/search-console/latest.md` — human-readable current baseline
- `/home/hermes/kairos-seo/search-console/latest.json` — machine-readable data for follow-up analysis

Use the `sc-domain:kairossexualhealth.com` property as the Search Console source of truth.
Route recurring SEO reports and planning updates to Slack target `slack:C0B8XH635FW:1780807305.138359`.

- **Initial setup:** technical crawl/indexing foundation, Search Console access, baseline keyword map, ASO audit.
- **Weekly:** review Search Console query/page data, choose the next small improvement, implement or open issues.
- **Monthly:** review App Store listing, screenshots, conversion copy, and competitor positioning.

## First target keyword clusters

- Private sexual health tracker
- Intimacy tracker app
- Libido tracker app
- Relationship desire tracker
- Partner intimacy tracking
- Sexual wellness journal
- Privacy-first health tracking app

## Guardrails

- Keep language clinical, warm, and privacy-first.
- Avoid sensational or exploitative phrasing.
- Public-site analytics must stay privacy-preserving, currently Umami Cloud for aggregate website traffic only; do not add in-app analytics or app-data tracking without explicit approval and privacy-policy updates.
- Be careful with health claims; position Kairos as insight/journaling support, not diagnosis or treatment.
