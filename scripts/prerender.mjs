// Prerender each route to static HTML after `vite build`.
// Crawlers and AI answer engines (Googlebot's first pass, GPTBot, ClaudeBot,
// PerplexityBot) then get real content instead of an empty <div id="root">.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const ssrDir = resolve(root, 'dist-ssr');
const SITE = 'https://deixvlabs.dei.ac.in';

const { render, faq } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href);
const template = await readFile(resolve(dist, 'index.html'), 'utf8');

const routes = [
  { url: '/', file: 'index.html', faq: true },
  {
    url: '/themes',
    file: 'themes/index.html',
    title: "Themes | DEI x VLABS Hackathon '26 Innovation Tracks",
    description:
      "Explore the provisional innovation tracks for DEI x VLABS Hackathon '26, the national student hackathon by Dayalbagh Educational Institute and Virtual Labs (MoE, Govt of India).",
  },
  { url: '/404', file: '404.html', noindex: true },
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function faqJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
  return `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;
}

function setAttr(html, selector, value) {
  // selector is e.g. 'name="description"' or 'property="og:url"'
  const re = new RegExp(`(<meta ${selector} content=")[^"]*(")`);
  return html.replace(re, `$1${esc(value)}$2`);
}

for (const route of routes) {
  const appHtml = await render(route.url);
  let html = template.replace('<div id="root"></div>', `<div id="root" data-route="${route.url}">${appHtml}</div>`);

  if (route.title) {
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(route.title)}</title>`);
    html = setAttr(html, 'property="og:title"', route.title);
    html = setAttr(html, 'name="twitter:title"', route.title);
  }
  if (route.description) {
    html = setAttr(html, 'name="description"', route.description);
    html = setAttr(html, 'property="og:description"', route.description);
    html = setAttr(html, 'name="twitter:description"', route.description);
  }
  if (route.noindex) {
    html = html.replace(/<meta name="robots" content="[^"]*" \/>/, '<meta name="robots" content="noindex, follow" />');
    html = html.replace(/\s*<link rel="canonical"[^>]*>/, '');
    html = html.replace(/<title>[^<]*<\/title>/, "<title>Page not found | DEI x VLABS Hackathon '26</title>");
  } else {
    const abs = SITE + (route.url === '/' ? '/' : route.url);
    html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${abs}$2`);
    html = setAttr(html, 'property="og:url"', abs);
  }
  html = html.replace('<!--faq-jsonld-->', route.faq ? faqJsonLd() : '');

  const out = resolve(dist, route.file);
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, html);
  if (route.alsoAs) await writeFile(resolve(dist, route.alsoAs), html);
  console.log(`prerendered ${route.url} -> dist/${route.file} (${(appHtml.length / 1024).toFixed(1)} KB of HTML)`);
}

await rm(ssrDir, { recursive: true, force: true });
