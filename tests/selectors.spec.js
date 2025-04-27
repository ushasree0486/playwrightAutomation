import {test ,expect} from '@playwright/test'
import { fill } from 'lodash';

test('selectors demo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.pause()
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('Edison')
    await page.locator('[id=user-name]').fill('Einstein')
    //using css selector
    await page.locator('#login-button').click()
    //using xpath
    await page.locator('xpath=//input[@id="user-name"]').fill('Faraday')
    await page.locator('//input[@id="user-name"]').fill('Ramanujan')
    //using text
    await page.locator('text=LOGIN').click();
    await page.locator('input:has-text("LOGIN")').click();

  });
   