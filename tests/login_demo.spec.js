import {test,expect} from '@playwright/test'
test.only('demo login test 1',async({page}) => {
  await page.pause()
await page.goto('https://demo.applitools.com')

await page.locator('[placeholder="Enter your username"]').fill('Ragav');

await page.locator('[placeholder="Enter your password"]').fill('1234');

await page.locator('text=Sign in').click()

})

test('demo login test 2', async ({ page }) => {
   await page.pause()

   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login/', {
    waitUntil: 'domcontentloaded',
    timeout: 30000 // 30 seconds
  });
  
  
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
  
    // If you want to logout, first click on profile icon
    await page.getByRole('img', { name: 'profile picture' }).click(); // Profile dropdown
    await page.getByRole('menuitem', { name: 'Logout' }).click(); // Logout button
  
    // No need to close context or browser manually, Playwright handles it automatically in tests
  });

  test('demo login test 3', async ({ page }) => {
    await page.pause();
  await page.goto('https://admin-demo.nopcommerce.com/login/');
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('');
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('admin@yourstore.com');
  await page.getByRole('textbox', { name: 'Email:' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill('admin');
  await page.getByRole('button', { name: 'Log in' }).click();

  await page.getByRole('link', { name: 'Logout' }).click();
  
})
  
    




