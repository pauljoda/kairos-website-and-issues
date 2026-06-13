# Kairos Landing Page Roadmap

## Purpose

Increase qualified discovery for Kairos by adding search-intent landing pages beyond the homepage and privacy policy. Current live sitemap coverage is only:

- `/`
- `/privacy/`

Google Search Console shows the homepage is indexed, but query data is still thin. The next growth step is to create focused pages that match the terms users are likely to search before they know Kairos by name.

## Measurement and privacy constraints

Kairos is privacy-first. Website analytics must support that positioning.

- Keep the existing Umami tracker on every public page through the shared site layout:

```html
<script
  defer
  src="https://cloud.umami.is/script.js"
  data-website-id="23d622d0-b4aa-466c-b342-ed1ce8242f94"
  data-do-not-track="true">
</script>
```

- Do **not** add Google Analytics, Meta Pixel, TikTok Pixel, PostHog, Mixpanel, or similar behavioral trackers unless the privacy policy and product positioning are intentionally changed.
- Add privacy-preserving Umami event attributes to App Store CTA links so we can measure which pages drive App Store clicks without tracking app usage or personal data.

Example CTA event:

```html
<a
  href="https://apps.apple.com/us/app/kairos-intimacy-tracker/id6759538995"
  data-umami-event="app-store-click"
  data-umami-event-page="libido-tracker">
  Download on the App Store
</a>
```

Primary measurement question:

> Which landing pages generate App Store clicks?

## Implementation priority

If time is limited, implement in this order:

1. `/libido-tracker/`
2. `/private-sexual-health-tracker/`
3. `/intimacy-tracker-app/`
4. Add Umami events to all App Store CTA links.
5. Update homepage hero copy.
6. Add `/relationship-desire-tracker/` and `/sexual-wellness-journal/`.

Reasoning:

- `libido tracker` and `private sexual health tracker` are strong high-intent queries.
- `intimacy tracker app` aligns with the App Store title.
- CTA event tracking is needed before we can compare landing-page quality.

## Shared requirements for every landing page

Each page should include:

- Unique `<title>`.
- Unique meta description.
- Canonical URL.
- Open Graph title, description, and URL.
- Twitter title and description.
- Visible H1 matching the page intent.
- App Store CTA above the fold and near the bottom.
- Internal links to the other Kairos landing pages.
- JSON-LD structured data (`WebPage`; add `FAQPage` only when the FAQ is visible on the page).
- Existing Umami tracker via shared layout.
- Umami event attributes on App Store CTA links.
- Inclusion in the generated sitemap.

Use careful health-adjacent language. Kairos should be positioned as insight, journaling, and pattern recognition — not diagnosis, treatment, or medical advice.

Prefer words like:

- private
- local-first
- encrypted iCloud sync
- intimacy
- libido
- desire
- sexual wellness
- journal
- patterns
- mood
- connection
- couples
- partner sync

Avoid or minimize words/claims like:

- clinical-grade
- diagnose
- treat
- therapy
- medical advice
- fix libido
- sexual dysfunction

## Page: Private Sexual Health Tracker

URL:

```text
/private-sexual-health-tracker/
```

Target queries:

```text
private sexual health tracker
private sexual health app
privacy-first sexual health app
sexual health tracker no tracking
```

Suggested title:

```text
Private Sexual Health Tracker for iPhone | Kairos
```

Suggested meta description:

```text
Track libido, intimacy, mood, and sexual wellness privately with Kairos. Local-first iPhone tracking, encrypted iCloud sync, and no third-party analytics.
```

Suggested H1:

```text
A private sexual health tracker that keeps your data yours
```

Suggested sections:

1. What you can track.
2. Why privacy matters for intimate health.
3. Local-first storage and encrypted iCloud sync.
4. No third-party analytics or data transmission.
5. App Store CTA.
6. FAQ.

Example copy:

> Kairos helps you understand patterns in desire, mood, intimacy, and connection without sending your most personal data to an analytics platform. Your entries stay local on your device, with optional encrypted iCloud sync for your own devices.

FAQ ideas:

- Is Kairos private?
- Does Kairos sell or share my data?
- Can I use Kairos without a partner?
- Does Kairos use analytics or tracking SDKs?

## Page: Intimacy Tracker App

URL:

```text
/intimacy-tracker-app/
```

Target queries:

```text
intimacy tracker app
track intimacy in relationship
couples intimacy tracker
relationship intimacy app
```

Suggested title:

```text
Intimacy Tracker App for Individuals and Couples | Kairos
```

Suggested meta description:

```text
Kairos helps individuals and couples privately track intimacy, desire, mood, and relationship timing with clear trends and optional partner sync.
```

Suggested H1:

```text
Track intimacy patterns with care, privacy, and context
```

Suggested sections:

1. For individuals and couples.
2. Solo and partnered activity as separate streams.
3. Partner connection and timing.
4. Optional partner sync.
5. Privacy-first design.
6. App Store CTA.

Reasoning:

This page should sell the relationship/couples use case without making the app feel couples-only. Kairos supports both solo and partnered use.

## Page: Libido Tracker

URL:

```text
/libido-tracker/
```

Target queries:

```text
libido tracker
track libido
desire tracker
sexual desire tracker
```

Suggested title:

```text
Libido Tracker for Private Desire Insights | Kairos
```

Suggested meta description:

```text
Track libido, desire, mood, energy, sleep, and intimacy patterns privately on iPhone with Kairos.
```

Suggested H1:

```text
Understand your libido patterns over time
```

Suggested sections:

1. Daily desire check-ins.
2. Mood, sleep, energy, and timing context.
3. Trends without judgment.
4. Privacy-first tracking.
5. App Store CTA.

Recommended phrasing:

> Kairos helps you notice patterns in desire and context over time.

Avoid phrasing like:

> Diagnose libido problems.

Reasoning:

`libido tracker` is likely one of the strongest high-intent keywords, but it is health-adjacent. Keep the page focused on self-understanding and patterns, not medical claims.

## Page: Relationship Desire Tracker

URL:

```text
/relationship-desire-tracker/
```

Target queries:

```text
relationship desire tracker
mismatched libido tracker
track desire in relationship
couples desire app
```

Suggested title:

```text
Relationship Desire Tracker for Couples | Kairos
```

Suggested meta description:

```text
Track desire, intimacy, mood, and connection privately. Kairos helps couples understand relationship timing and patterns without judgment.
```

Suggested H1:

```text
Understand desire and timing in your relationship
```

Suggested sections:

1. Desire varies naturally.
2. Track connection and context.
3. Optional partner sync.
4. Field-level sharing controls.
5. Privacy and consent.
6. App Store CTA.

Reasoning:

This page can address a real pain point, but it should be emotionally careful. The goal is to help people understand patterns, not imply that either partner is broken.

## Page: Sexual Wellness Journal

URL:

```text
/sexual-wellness-journal/
```

Target queries:

```text
sexual wellness journal
sexual health journal
intimacy journal app
private wellness journal
```

Suggested title:

```text
Private Sexual Wellness Journal | Kairos
```

Suggested meta description:

```text
Use Kairos as a private sexual wellness journal for desire, intimacy, mood, symptoms, notes, and personal patterns.
```

Suggested H1:

```text
A private journal for sexual wellness and self-understanding
```

Suggested sections:

1. Journal entries with context.
2. Mood, energy, symptoms, protection, and notes.
3. Trends over time.
4. Local-first privacy.
5. App Store CTA.

Reasoning:

`journal` makes Kairos feel warmer and less clinical. It also reaches users who may not think to search for a tracker.

## Homepage copy improvement

Current homepage positioning is good, but it should include the highest-value use cases earlier.

Suggested hero headline:

```text
Private intimacy and libido tracking for iPhone
```

Suggested subhead:

```text
Kairos helps individuals and couples track desire, intimacy, mood, and sexual wellness patterns — with local-first data, encrypted iCloud sync, and no third-party tracking.
```

Reasoning:

The homepage should immediately include the main search/conversion terms:

- intimacy
- libido
- desire
- couples
- privacy
- iPhone

## Internal linking pattern

Add a page cluster section near the bottom of each landing page:

```text
Explore more ways to use Kairos
```

Link to:

- Private sexual health tracker
- Intimacy tracker app
- Libido tracker
- Relationship desire tracker
- Sexual wellness journal

Reasoning:

Internal links help Google understand the topic cluster and help users find the framing that best matches their intent.

## Validation checklist

Before merging:

```bash
npm run build
```

Then inspect generated output:

- `dist/sitemap-index.xml`
- `dist/sitemap-0.xml`
- each generated HTML page

Verify each new page has:

- title
- meta description
- canonical
- Open Graph URL
- JSON-LD
- Umami script
- App Store CTA event attributes
- internal links

After deployment, verify live URLs:

```bash
curl -L https://kairossexualhealth.com/private-sexual-health-tracker/
curl -L https://kairossexualhealth.com/intimacy-tracker-app/
curl -L https://kairossexualhealth.com/libido-tracker/
curl -L https://kairossexualhealth.com/relationship-desire-tracker/
curl -L https://kairossexualhealth.com/sexual-wellness-journal/
curl -L https://kairossexualhealth.com/sitemap-0.xml
```

After the pages are live, inspect or submit the URLs in Google Search Console and monitor page-level clicks, impressions, CTR, average position, and App Store CTA events.
