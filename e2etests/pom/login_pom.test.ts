import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('Login Page Object Model', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLogin();
    await loginPage.loginToApps();
    await expect(page.locator('text=Login successful')).toBeVisible();
    await expect(page.locator('button:has-text("FU")')).toBeVisible();
  });