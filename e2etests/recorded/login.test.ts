import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://deconv.com/explore
  await page.goto('/explore');

  // Click text=Log in
  await page.click('text=Log in');
  await expect(page).toHaveURL('/login?from=%2Fexplore');

  // Click [placeholder="Email"]
  await page.click('[placeholder="Email"]');

  // Fill [placeholder="Email"]
  await page.fill('[placeholder="Email"]', '*****@clarifai.com');

  // Click [placeholder="Password"]
  await page.click('[placeholder="Password"]');

  // Click [placeholder="Password"]
  await page.click('[placeholder="Password"]');

  // Fill [placeholder="Password"]
  await page.fill('[placeholder="Password"]', '*********');

  // Click [data-testid="signInButton"]
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://deconv.com/explore' }*/),
    page.click('[data-testid="signInButton"]')
  ]);

  // Click text=Explore the full power of ClarifaiSomething exciting is coming for developers ev
  await page.click('text=Explore the full power of ClarifaiSomething exciting is coming for developers ev');

  // Click [data-testid="close-icon"] >> :nth-match(path, 2)
  await page.click('[data-testid="close-icon"]');

  // Click button:has-text("FU")
  await page.click('button:has-text("FU")');

  // Click text=Account
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://deconv.com/frontend-user/settings' }*/),
    page.click('text=Account')
  ]);

  // Click text=fe@clarifai.com PRIMARY
  await page.click('text=fe@clarifai.com PRIMARY');

  // Click text=Profile
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://deconv.com/frontend-user/apps' }*/),
    page.click('text=Profile')
  ]);

  // Click text=Apps
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://deconv.com/frontend-user/apps' }*/),
    page.click('text=Apps')
  ]);

  // Click text=Models
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://deconv.com/frontend-user/models' }*/),
    page.click('text=Models')
  ]);

  // Click text=Workflows
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://deconv.com/frontend-user/workflows' }*/),
    page.click('text=Workflows')
  ]);

  // Click text=CommunityBETA
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://deconv.com/explore' }*/),
    page.click('text=CommunityBETA')
  ]);

  // Click [data-testid="dialogBackdrop"]
  await page.click('[data-testid="dialogBackdrop"]');

  // Click [data-testid="dialogBackdrop"]
  await page.click('[data-testid="dialogBackdrop"]');

  // Click [data-testid="close-icon"]
  await page.click('[data-testid="close-icon"]');

  // Click button:has-text("FU")
  await page.click('button:has-text("FU")');

  // Click text=Sign out
  await page.click('text=Sign out');

  // Close page
  await page.close();

});