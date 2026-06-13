import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const site = 'https://kairossexualhealth.com';
const pages = [
  {
    slug: 'libido-tracker',
    title: 'Libido Tracker for Private Desire Insights | Kairos',
    description: 'Track libido, desire, mood, energy, sleep, and intimacy patterns privately on iPhone with Kairos.'
  },
  {
    slug: 'private-sexual-health-tracker',
    title: 'Private Sexual Health Tracker for iPhone | Kairos',
    description: 'Track libido, intimacy, mood, and sexual wellness privately with Kairos. Local-first iPhone tracking, encrypted iCloud sync, and no third-party analytics.'
  },
  {
    slug: 'intimacy-tracker-app',
    title: 'Intimacy Tracker App for Individuals and Couples | Kairos',
    description: 'Kairos helps individuals and couples privately track intimacy, desire, mood, and relationship timing with clear trends and optional partner sync.'
  },
  {
    slug: 'relationship-desire-tracker',
    title: 'Relationship Desire Tracker for Couples | Kairos',
    description: 'Track desire, intimacy, mood, and connection privately. Kairos helps couples understand relationship timing and patterns without judgment.'
  },
  {
    slug: 'sexual-wellness-journal',
    title: 'Private Sexual Wellness Journal | Kairos',
    description: 'Use Kairos as a private sexual wellness journal for desire, intimacy, mood, symptoms, notes, and personal patterns.'
  }
];

const expectedInternalLinks = pages.map((page) => `href="/${page.slug}/"`);
const appStoreUrl = 'https://apps.apple.com/us/app/kairos-intimacy-tracker/id6759538995';
const sitemap = readFileSync('dist/sitemap-0.xml', 'utf8');

const failures = [];

for (const page of pages) {
  const htmlPath = join('dist', page.slug, 'index.html');
  let html;
  try {
    html = readFileSync(htmlPath, 'utf8');
  } catch {
    failures.push(`${htmlPath} was not generated`);
    continue;
  }

  const url = `${site}/${page.slug}/`;
  const checks = [
    [`<title>${page.title}</title>`, 'title'],
    [`<meta name="description" content="${page.description}">`, 'meta description'],
    [`<link rel="canonical" href="${url}">`, 'canonical'],
    [`<meta property="og:url" content="${url}">`, 'Open Graph URL'],
    ['<script type="application/ld+json">', 'JSON-LD'],
    ['https://cloud.umami.is/script.js', 'Umami script'],
    ['data-website-id="23d622d0-b4aa-466c-b342-ed1ce8242f94"', 'Umami website ID'],
    [`href="${appStoreUrl}"`, 'App Store link'],
    ['data-umami-event="app-store-click"', 'App Store click event'],
    [`data-umami-event-page="${page.slug}"`, 'page-specific App Store click event'],
    ['Explore more ways to use Kairos', 'internal link cluster heading']
  ];

  for (const [needle, label] of checks) {
    if (!html.includes(needle)) failures.push(`${page.slug}: missing ${label}`);
  }

  for (const link of expectedInternalLinks) {
    if (!html.includes(link)) failures.push(`${page.slug}: missing internal link ${link}`);
  }

  if (!sitemap.includes(`<loc>${url}</loc>`)) failures.push(`sitemap missing ${url}`);
}

const homeHtml = readFileSync('dist/index.html', 'utf8');
if (!homeHtml.includes('Private intimacy and libido tracking for iPhone')) {
  failures.push('homepage hero headline was not updated');
}
if (!homeHtml.includes('data-umami-event="app-store-click"')) {
  failures.push('homepage App Store links are missing Umami event attributes');
}

const privacyHtml = readFileSync('dist/privacy/index.html', 'utf8');
if (!privacyHtml.includes('data-umami-event="app-store-click"')) {
  failures.push('privacy page App Store link is missing Umami event attributes');
}

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join('\n'));
  process.exit(1);
}

console.log(`Verified ${pages.length} SEO landing pages, sitemap entries, metadata, JSON-LD, Umami script, CTA events, internal links, and homepage CTA tracking.`);
