import { test } from '@playwright/test';

test('Authenticate from saved storage state', async ({ browser }) => {
    // Use context instead of test fixture to load storage state, check command line section in playwright doc
    const context = await browser.newContext({
        storageState: './auth.json'

    });
    const page = await context.newPage();
    await page.goto('/explore');

    await page.waitForTimeout(5000);
    console.log('do nothing');

});