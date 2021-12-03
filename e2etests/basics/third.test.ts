import { test, expect } from '@playwright/test';

test('third basic test', async ({ page }) => {
  await page.goto('/explore');
  console.log('my third test Testing in CI');
  await page.close();

});