// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  const browserContext = page.context();
  await browserContext.tracing.start({ snapshots: true, screenshots: true });
 // await browsercontext.tracing.start({snapshots : true,screenshots : true})
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


