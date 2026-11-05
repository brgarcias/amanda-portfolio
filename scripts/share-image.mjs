// Renders public/images/og-image.jpg, the image shown when the link is
// shared, from scripts/share-image.html, with the site's own fonts, the
// portrait and the data of src/data/profile.ts. Run: node scripts/share-image.mjs
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from '@playwright/test';
import { disciplines, profile, site } from '../src/data/profile.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'public/images/og-image.jpg');
const [firstName, ...otherNames] = profile.name.split(' ');
// "Engenheira de segurança do trabalho e engenheira civil."
const role = `${profile.title} e ${profile.secondaryTitle}`.toLowerCase();

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});
await page.goto(`file://${path.join(root, 'scripts/share-image.html')}`);
await page.evaluate(
  (text) => {
    for (const [id, value] of Object.entries(text)) {
      document.getElementById(id).textContent = value;
    }
  },
  {
    'first-name': firstName,
    'last-name': otherNames.join(' '),
    role: `${role[0].toUpperCase()}${role.slice(1)}.`,
    location: profile.location,
    url: new URL(site.url).host,
    caption: profile.name,
    'callout-one': disciplines[0],
    'callout-two': disciplines[3],
  },
);
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(300);
await page.screenshot({ path: output, type: 'jpeg', quality: 88 });
await browser.close();
console.log(`Imagem gravada em ${path.relative(root, output)}`);
