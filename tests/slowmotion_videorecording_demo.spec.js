import { test, expect } from '@playwright/test';
import { chromium } from 'playwright'; // ✅ Needed for manual browser launch

test('slow motion video recording demo', async () => {
  const browser = await chromium.launch({
    slowMo: 500, // ✅ Slow motion
    headless: false
  });

  const context = await browser.newContext({
    recordVideo: {
      dir: 'videos/', // ✅ Save location
      size: { width: 800, height: 600 }
    }
  });

  const page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
  await page.pause();

  await page.click('#user-name');
  await page.fill('#user-name', 'Edison');
  await page.fill('#user-name', 'Einstein');

  await page.click('#login-button');
  await page.fill('xpath=//input[@id="user-name"]', 'Faraday');
  await page.fill('//input[@id="user-name"]', 'Ramanujan');

  // The below selectors using "text=LOGIN" will not work as expected
  // because the login button on SauceDemo is <input type="submit"> — it has no inner text.
  // So these will not match anything:
  // await page.locator('text=LOGIN').click();
  // await page.locator('input:has-text("LOGIN")').click();

  await context.close();
  await browser.close();
});
