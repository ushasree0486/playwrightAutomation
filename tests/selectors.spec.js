import {test ,expect} from '@playwright/test'

test('selectors demo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.pause()
    await page.click('id=user-name')
  });
   