import {test,expect} from '@playwright/test'
test('assertion demo', async ({ page }) => {
    
    await page.goto('https://kitchen.applitools.com/');
 // Navigate to a page
    
    //Assertions
    //check  element is present or not
    await expect(page.locator('text=The Kitchen')).toHaveCount(1)
    if (await page.$('text=The Kitchen')){
        await page.locator('text=The Kitchen').click()
    }
    //check element hidden or visible
    await expect(page.locator('text=The Kitchen')).toBeVisible()
    //await expect.soft(page.locator('text=The Kitchen')).toBeHidden()

    //check element enabled or disabled
    await expect(page.locator('text=The Kitchen')).toBeEnabled()
   // await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()

    //check text
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
   // await expect(page.locator('text=The kitchen')).not.toHaveText('The Kitchen')

    //check attribute value
    const kitchenLocator = page.locator('h1');

    const classAttribute = await kitchenLocator.getAttribute('class');
    console.log('classAttribute:', classAttribute); // "chakra-heading css-dpmy2a"

    expect(classAttribute).not.toBeNull();
    expect(classAttribute).toContain('css-dpmy2a'); // OR use .toMatch(/css-dpmy2a/)

    //check page url and title
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle('The Kitchen')

    await page.pause(); 
    //visual validation with screenshot
    await expect(page).toHaveScreenshot()

});
