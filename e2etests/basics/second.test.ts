import { test } from '@playwright/test';

test('second basic test', async ({ page }) => {
  await page.goto('/explore');
  console.log('my second  test Testing in CI');

});