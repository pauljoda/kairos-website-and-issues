# Kairos SEO Growth Workflow

## Goal

Improve qualified discovery for Kairos so more people searching for private sexual health, intimacy tracking, libido tracking, and relationship insight tools find the app and convert to App Store downloads.

## Working model

1. **Measure**
   - Use Google Search Console for indexing, queries, impressions, CTR, and page-level performance.
   - Use privacy-preserving public signals where available: App Store listing metadata, public rankings, backlinks, and page indexing status.
   - Kairos intentionally avoids third-party analytics SDKs and tracking pixels; SEO decisions should respect that privacy promise.

2. **Prioritize**
   - Technical SEO issues that block crawling/indexing first.
   - High-intent landing pages second: private sexual health tracker, intimacy tracker, libido tracker, relationship desire tracking, partner intimacy tracking.
   - App Store Optimization (ASO) third: listing title/subtitle/keywords/screenshots/reviews.
   - Content/backlink work fourth.

3. **Implement**
   - Track work in this repository's GitHub issues.
   - Use small PRs with one SEO hypothesis per PR when possible.
   - Validate with `npm run build` before merging.

4. **Verify**
   - Confirm generated pages include title, description, canonical URL, Open Graph/Twitter tags, structured data when relevant, robots.txt, and sitemap output.
   - After deploy, submit or inspect URLs in Google Search Console.
   - Re-check query/impression trends after enough time has passed for Google to crawl and rank changes.

## Cadence

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
- Do not add tracking pixels or third-party analytics unless explicitly approved and consistent with the privacy policy.
- Be careful with health claims; position Kairos as insight/journaling support, not diagnosis or treatment.
