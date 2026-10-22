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
  const previousRole = page.locator('.timeline-item').nth(1);
  const activities = previousRole.getByText(
    'Suporte ao SESMT na consolidação',
    { exact: false },
  );
  await expect(activities).toBeHidden();
  await previousRole.getByText('Principais atividades').click();
  await expect(activities).toBeVisible();
  await previousRole.getByText('Principais atividades').press('Enter');
  await expect(activities).toBeHidden();
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
  expect(download.suggestedFilename()).toBe('curriculo-amanda-assumpcao.pdf');
  const response = await request.get(
    '/documents/curriculo-amanda-assumpcao.pdf',
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
});

test('mantém as rotas antigas úteis e oferece uma página 404', async ({
  request,
  page,
}) => {
  const routes = {
    '/story': '/#experiencia',
    '/contact': '/#contato',
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
  await page.goto('/');
  const result = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
    .analyze();
  expect(result.violations).toEqual([]);
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
  await page.goto('/');
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.locator('html')).toHaveCSS('scroll-behavior', 'auto');
});

test('mantém todo texto visível com pelo menos 12 px', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => {
    for (const details of document.querySelectorAll('details')) {
      details.open = true;
    }
  });
  for (const width of [320, 820, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
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
    expect(smallTexts, `largura de ${width} px`).toEqual([]);
  }
});
