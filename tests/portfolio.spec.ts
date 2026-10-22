import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('apresenta o portfólio sem erros de execução e sem rolagem horizontal', async ({
  page,
}, testInfo) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  const response = await page.goto('/');
  expect(response?.status()).toBe(200);
  await expect(page).toHaveTitle(/Amanda Assumpção.*Engenharia/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    /Cuidar de pessoas.*Construir um.*futuro seguro\./,
  );
  await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
  await expect(page.locator('img.hero-photo')).toHaveAttribute(
    'fetchpriority',
    'high',
  );
  await expect(
    page.getByRole('link', {
      name: /^Amanda Assumpção\s*Engenharia & segurança$/i,
    }),
  ).toHaveAttribute('href', '/#inicio');
  await page.evaluate(() => document.fonts.ready);
  await page
    .locator('img')
    .evaluateAll((images) =>
      Promise.all(images.map((image) => (image as HTMLImageElement).decode())),
    );
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  expect(errors).toEqual([]);
  await page.screenshot({
    path: `test-results/portfolio-${testInfo.project.name}.png`,
    fullPage: true,
  });
});

test('permite explorar as experiências profissionais', async ({ page }) => {
  await page.goto('/');
  const currentRole = page.locator('.timeline-item').first();
  await expect(
    currentRole.getByText('Implementação e atualização', { exact: false }),
  ).toBeVisible();
  await expect(page.locator('.timeline-item details[open]')).toHaveCount(5);
  const previousRole = page.locator('.timeline-item').nth(1);
  const activities = previousRole.getByText(
    'Suporte ao SESMT na consolidação',
    { exact: false },
  );
  await expect(activities).toBeVisible();
  await previousRole.getByText('Principais atividades').click();
  await expect(activities).toBeHidden();
  await previousRole.getByText('Principais atividades').press('Enter');
  await expect(activities).toBeVisible();
});

test('oferece o currículo original e canais de contato válidos', async ({
  page,
  request,
}) => {
  await page.goto('/');
  const downloadLink = page.getByRole('link', {
    name: 'Baixar currículo',
    exact: true,
  });
  const downloadPromise = page.waitForEvent('download');
  await downloadLink.click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe(
    'Amanda-Assumpcao-Engenheira-de-Seguranca-do-Trabalho.pdf',
  );
  const response = await request.get(
    '/documents/Amanda-Assumpcao-Engenheira-de-Seguranca-do-Trabalho.pdf',
  );
  expect(response.headers()['content-type']).toContain('application/pdf');
  expect((await response.body()).subarray(0, 5).toString()).toBe('%PDF-');
  await expect(
    page.getByRole('link', { name: /Conversar no WhatsApp/ }),
  ).toHaveAttribute('href', 'https://wa.me/5511996240704');
  await expect(page.locator('a[href^="mailto:"]')).toHaveAttribute(
    'href',
    'mailto:eng.amandaassumpcao@gmail.com',
  );
  await expect(page.locator('a[href^="tel:"]')).toHaveAttribute(
    'href',
    'tel:+5511996240704',
  );
  await expect(page.getByRole('link', { name: /LinkedIn/ })).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/amanda-assump%C3%A7%C3%A3o-285922328',
  );
});

test('publica os metadados de busca e compartilhamento', async ({
  page,
  request,
}) => {
  const siteUrl = 'https://arra-portfolio.netlify.app';
  await page.goto('/');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    `${siteUrl}/`,
  );
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    'content',
    `${siteUrl}/`,
  );
  await expect(
    page.locator('meta[name="google-site-verification"]'),
  ).toHaveAttribute('content', 'UQfTWpVprRBLVKKPX5-HYduU6JZc1pwnXqO9F9ry-QI');
  const shareImage = await page
    .locator('meta[property="og:image"]')
    .getAttribute('content');
  expect(shareImage).toMatch(new RegExp(`^${siteUrl}/`));
  const imageResponse = await request.get(new URL(shareImage!).pathname);
  expect(imageResponse.status()).toBe(200);
  expect(imageResponse.headers()['content-type']).toContain('image/jpeg');
  const structuredData = JSON.parse(
    (await page
      .locator('script[type="application/ld+json"]')
      .textContent()) as string,
  );
  expect(structuredData.url).toBe(`${siteUrl}/`);
  expect(structuredData.sameAs).toContain(
    'https://www.linkedin.com/in/amanda-assump%C3%A7%C3%A3o-285922328',
  );
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.status()).toBe(200);
  expect(await sitemap.text()).toContain(`<loc>${siteUrl}/</loc>`);
  const robots = await (await request.get('/robots.txt')).text();
  expect(robots).toContain(`Sitemap: ${siteUrl}/sitemap.xml`);
  for (const [icon, type] of [
    ['/favicon.ico', 'image/'],
    ['/favicon.svg', 'image/svg+xml'],
    ['/apple-touch-icon.png', 'image/png'],
  ]) {
    await expect(page.locator(`link[href="${icon}"]`)).toHaveCount(1);
    const response = await request.get(icon);
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain(type);
  }
});

test('mantém as rotas antigas úteis e oferece uma página 404', async ({
  request,
  page,
}) => {
  const routes = {
    '/story': '/#experiencia',
    '/contact': '/#contato',
    '/documents/curriculo-amanda-assumpcao.pdf':
      '/documents/Amanda-Assumpcao-Engenheira-de-Seguranca-do-Trabalho.pdf',
    '/documents/Amanda-Assumpcao-Curriculo.pdf':
      '/documents/Amanda-Assumpcao-Engenheira-de-Seguranca-do-Trabalho.pdf',
    '/services/service-1': '/#atuacao',
    '/projects-3': '/#atuacao',
  };
  for (const [route, destination] of Object.entries(routes)) {
    const response = await request.get(route, { maxRedirects: 0 });
    expect(response.status()).toBe(308);
    expect(response.headers().location).toBe(destination);
  }
  const response = await page.goto('/pagina-inexistente');
  expect(response?.status()).toBe(404);
  await page.getByRole('link', { name: 'Voltar ao portfólio' }).click();
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Cuidar de pessoas.',
  );
});

test('atende às verificações automáticas de acessibilidade WCAG AA', async ({
  page,
}) => {
  for (const path of ['/', '/avaliar']) {
    await page.goto(path);
    const result = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(result.violations, path).toEqual([]);
  }
});

test('navega entre as seções e permite fechar o menu com Escape', async ({
  page,
  isMobile,
}) => {
  await page.goto('/');
  const menu = page.getByRole('button', { name: /^(Abrir|Fechar) menu$/ });
  if (isMobile) {
    await menu.click();
    await expect(menu).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Escape');
    await expect(menu).toHaveAttribute('aria-expanded', 'false');
    await expect(menu).toBeFocused();
    await menu.click();
  }
  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Formação', exact: true })
    .click();
  await expect(page).toHaveURL(/#formacao$/);
  await expect(
    page.getByRole('heading', { name: /Aprender para.*ir além/ }),
  ).toBeInViewport();
  if (isMobile) await expect(menu).toHaveAttribute('aria-expanded', 'false');
});

test('preserva o layout em telas estreitas e com movimento reduzido', async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 740 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  for (const path of ['/', '/avaliar']) {
    await page.goto(path);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      path,
    ).toBe(true);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  }
  await expect(page.locator('html')).toHaveCSS('scroll-behavior', 'auto');
});

test('mantém todo texto visível com pelo menos 12 px', async ({ page }) => {
  for (const [path, width] of ['/', '/avaliar'].flatMap((path) =>
    [320, 820, 1024, 1440].map((width) => [path, width] as const),
  )) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(path);
    await page.evaluate(() => {
      for (const details of document.querySelectorAll('details')) {
        details.open = true;
      }
    });
    const smallTexts = await page.evaluate(() =>
      [...document.querySelectorAll('body *')]
        .filter((element) =>
          [...element.childNodes].some(
            (node) =>
              node.nodeType === Node.TEXT_NODE && node.textContent?.trim(),
          ),
        )
        .filter((element) => element.getClientRects().length > 0)
        .filter(
          (element) => parseFloat(getComputedStyle(element).fontSize) < 12,
        )
        .map((element) => element.textContent?.trim()),
    );
    expect(smallTexts, `${path} com ${width} px`).toEqual([]);
  }
});

test('aplica os cabeçalhos de segurança sem bloquear a página', async ({
  page,
}) => {
  await page.addInitScript(() => {
    const violations: string[] = [];
    Object.assign(window, { cspViolations: violations });
    document.addEventListener('securitypolicyviolation', (event) =>
      violations.push(`${event.violatedDirective} ${event.blockedURI}`),
    );
  });
  const response = await page.goto('/');
  const headers = response!.headers();
  expect(headers['content-security-policy']).toContain(
    "frame-ancestors 'none'",
  );
  expect(headers['content-security-policy']).toContain("object-src 'none'");
  expect(headers['permissions-policy']).toContain('camera=()');
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await expect(page.locator('.site-footer')).toBeInViewport();
  expect(
    await page.evaluate(
      () => (window as unknown as { cspViolations: string[] }).cspViolations,
    ),
  ).toEqual([]);
});

test('recebe avaliações de clientes pelo formulário', async ({
  page,
  request,
  isMobile,
}) => {
  let payload: URLSearchParams | undefined;
  await page.route('**/__forms.html', async (route) => {
    if (route.request().method() !== 'POST') return route.fallback();
    payload = new URLSearchParams(route.request().postData() ?? '');
    await route.fulfill({ status: 200, body: '' });
  });
  await page.goto('/');
  if (isMobile) await page.getByRole('button', { name: 'Abrir menu' }).click();
  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Avaliações', exact: true })
    .click();
  await expect(page).toHaveURL(/#avaliacoes$/);
  await expect(page.locator('#avaliacoes h2')).toBeInViewport();
  await page.getByRole('link', { name: /Avaliar meu trabalho/ }).click();
  await expect(page).toHaveURL(/\/avaliar$/);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    'content',
    'noindex',
  );
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Como foi trabalhar',
  );
  const form = page.locator('form.review-form');
  expect(
    await form.evaluate((element: HTMLFormElement) => element.checkValidity()),
  ).toBe(false);

  await form
    .locator('label')
    .filter({ has: page.getByRole('radio', { name: '4 estrelas' }) })
    .click();
  await expect(page.getByRole('radio', { name: '4 estrelas' })).toBeChecked();
  await page.getByLabel('Nome', { exact: true }).fill('Cliente de teste');
  await page.getByLabel(/Cargo e empresa/).fill('Gerente de operações');
  await page
    .getByLabel('Serviço prestado')
    .selectOption('Segurança do trabalho');
  await page
    .getByLabel('Depoimento', { exact: true })
    .fill('Atendimento cuidadoso e documentação muito bem organizada.');
  await page.getByLabel('E-mail').fill('cliente@example.com');
  await page.getByLabel(/Autorizo a publicação/).check();
  await page.getByRole('button', { name: 'Enviar avaliação' }).click();

  await expect(
    page.getByRole('heading', { name: 'Obrigada pela avaliação!' }),
  ).toBeFocused();
  expect(payload?.get('form-name')).toBe('avaliacoes');
  expect(payload?.get('avaliacao')).toBe('4');
  expect(payload?.get('nome')).toBe('Cliente de teste');
  expect(payload?.get('servico')).toBe('Segurança do trabalho');
  expect(payload?.get('consentimento')).toBe('sim');
  expect(payload?.get('bot-field')).toBe('');
  const staticForm = await (await request.get('/__forms.html')).text();
  expect(staticForm).toContain('name="avaliacoes"');
  for (const field of payload!.keys()) {
    expect(staticForm, field).toContain(`name="${field}"`);
  }
});

test('avisa quando a avaliação não pode ser enviada', async ({ page }) => {
  await page.route('**/__forms.html', (route) =>
    route.request().method() === 'POST'
      ? route.fulfill({ status: 500, body: '' })
      : route.fallback(),
  );
  await page.goto('/avaliar');
  await page
    .locator('form.review-form label')
    .filter({ has: page.getByRole('radio', { name: '5 estrelas' }) })
    .click();
  await page.getByLabel('Nome', { exact: true }).fill('Cliente de teste');
  await page.getByLabel('Serviço prestado').selectOption('Outro serviço');
  await page
    .getByLabel('Depoimento', { exact: true })
    .fill('Excelente trabalho.');
  await page.getByLabel('E-mail').fill('cliente@example.com');
  await page.getByLabel(/Autorizo a publicação/).check();
  await page.getByRole('button', { name: 'Enviar avaliação' }).click();
  await expect(
    page
      .getByRole('alert')
      .filter({ hasText: 'Não foi possível enviar agora' }),
  ).toBeVisible();
  await expect(
    page.getByRole('button', { name: 'Enviar avaliação' }),
  ).toBeEnabled();
});
