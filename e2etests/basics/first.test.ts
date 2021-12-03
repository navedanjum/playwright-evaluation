import { test, expect } from '@playwright/test';

test('first basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await title.waitFor({state:'visible', timeout:1000 });
  await expect(title).toHaveText('Playwright', {timeout: 15000});
  console.log('Testing in CI');
  await page.close();

  // Reference: waitforlocation timeout and assertion timeout
  // https://playwright.dev/docs/api/class-locator#locator-wait-for
  // https://playwright.dev/docs/test-assertions/

});