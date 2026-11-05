// Renders the résumé PDF from the data of src/data/profile.ts, with the
// site's own fonts, so the site and the document never disagree. The
// layout is a single column of real text, which recruiters' systems read.
// Run: node scripts/resume.mjs
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from '@playwright/test';
import {
  courses,
  education,
  experience,
  expertise,
  profile,
  site,
} from '../src/data/profile.ts';
import { formatMonth } from '../src/lib/dates.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'public', profile.resume);
const title = `${profile.name} — ${profile.title}`;
const generatedOn = formatMonth(
  new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: '2-digit',
  }).format(new Date()),
);

const escape = (value) =>
  String(value).replace(
    /[&<>"]/g,
    (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[char],
  );
const items = (list) => list.map((item) => `<li>${escape(item)}</li>`).join('');

const body = `
  <header class="head">
    <div>
      <h1>${escape(profile.name)}</h1>
      <p class="headline">${escape(profile.title)} · ${escape(profile.secondaryTitle)}</p>
    </div>
    <div class="contact">
      <span>${escape(profile.location)}</span>
      <a href="${escape(profile.phoneHref)}">${escape(profile.phone)}</a>
      <a href="mailto:${escape(profile.email)}">${escape(profile.email)}</a>
      <a href="${escape(profile.linkedin)}">${escape(decodeURIComponent(profile.linkedin).replace('https://www.', ''))}</a>
      <a href="${escape(site.url)}">${escape(new URL(site.url).host)}</a>
    </div>
  </header>
  <section>
    <h2>Resumo</h2>
    <p class="summary">${escape(profile.summary)}</p>
  </section>
  <section>
    <h2>Experiência profissional</h2>
    ${experience
      .map(
        (role) => `
      <article class="role">
        <h3>${escape(role.role)}</h3>
        <p class="meta">${escape(role.company)} · ${escape(role.period)}</p>
        <ul>${items(role.responsibilities)}</ul>
      </article>`,
      )
      .join('')}
  </section>
  <section>
    <h2>Formação acadêmica</h2>
    ${education
      .map(
        (item) => `
      <article class="role">
        <h3>${escape(item.kind)} em ${escape(item.title)}</h3>
        <p class="meta">${escape(item.institution)} · ${escape(item.period)} · ${escape(item.status)}</p>
      </article>`,
      )
      .join('')}
  </section>
  <section>
    <h2>Cursos e idiomas</h2>
    <ul class="plain">
      ${courses
        .map(
          (course) =>
            `<li><span>${escape(course.title)} — ${escape(course.institution)}</span><span>${escape(course.year)}</span></li>`,
        )
        .join('')}
    </ul>
  </section>
  <section>
    <h2>Competências</h2>
    <div class="skills">
      ${expertise
        .map(
          (area) =>
            `<p><strong>${escape(area.title)}:</strong> ${escape(area.tools.join(', '))}</p>`,
        )
        .join('')}
    </div>
  </section>
  <p class="foot">Currículo atualizado em ${escape(generatedOn.toLowerCase())} · ${escape(site.url)}</p>
`;

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(`file://${path.join(root, 'scripts/resume.html')}`);
await page.evaluate(
  ({ html, documentTitle }) => {
    document.body.innerHTML = html;
    document.title = documentTitle;
  },
  { html: body, documentTitle: title },
);
await page.evaluate(() => document.fonts.ready);
// RESUME_PREVIEW=caminho.png also saves a picture of the page, to check the
// layout without opening the PDF.
if (process.env.RESUME_PREVIEW) {
  await page.setViewportSize({ width: 794, height: 1123 });
  await page.emulateMedia({ media: 'print' });
  await page.screenshot({ path: process.env.RESUME_PREVIEW, fullPage: true });
}
// Tagged, the PDF keeps the headings, lists and reading order for screen
// readers and for the parsers recruiters use, and the outline lets a reader
// jump between sections.
await page.pdf({
  path: output,
  format: 'A4',
  printBackground: true,
  preferCSSPageSize: true,
  tagged: true,
  outline: true,
});
await browser.close();
console.log(`Currículo gravado em ${path.relative(root, output)}`);
