import {test} from '@playwright/test'
test.skip ('test one',async({page}) => {

})

test('not yet ready', async ({ page }) => {
    test.fail(); // Marks the test as expected to fail
    
  });

  test.fixme('test to be fixed', async ({ page }) => {
});

test('slow test', async ({ page }) => {
    test.slow();
  });

  /*test.only('focus this test', async ({ page }) => {
    // Run only focused tests in the entire project
  });*/
//Tags
  test('Test full report @smoke', async ({ page }) => {
    // Your test steps here
  });