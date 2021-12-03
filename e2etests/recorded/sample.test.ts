import { test, expect } from '@playwright/test';

test('recorded test', async ({ page }) => {

  // Go to https://deconv.com/explore
  await page.goto('https://deconv.com/explore');

  // Click text=Models
  await page.click('text=Models');

  // Go to https://deconv.com/explore/models
  await page.goto('https://deconv.com/explore/models');

  // Click [data-testid="listingSearchInput"]
  await page.click('[data-testid="listingSearchInput"]');

  // Fill [data-testid="listingSearchInput"]
  await page.fill('[data-testid="listingSearchInput"]', 'face');

  // Press Enter
  await page.press('[data-testid="listingSearchInput"]', 'Enter');

  // Click text=mclarifai/main/face 1visual-embedderUpdated at Nov 20, 2020Copy IDDelete
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://deconv.com/clarifai/main/models/3920518f06ca4d13bbbec5505236d089' }*/),
    page.click('text=mclarifai/main/face 1visual-embedderUpdated at Nov 20, 2020Copy IDDelete')
  ]);

  // Close page
  await page.close();

});