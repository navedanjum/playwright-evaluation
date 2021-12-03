import { Locator, Page ,expect} from "@playwright/test";

export class LoginPage {
    readonly page: Page;

    // These can be placed in separate file for maintainability
    // Important page locators
    readonly EMAIL : Locator;
    readonly PASSWORD : Locator
    readonly SIGNIN_BTN: Locator;

    // https://playwright.dev/docs/api/class-locator
    // https://playwright.dev/docs/selectors

    constructor(page: Page) {
        this.page = page;
        this.EMAIL = page.locator('id=email');
        this.PASSWORD = page.locator('id=password');
        this.SIGNIN_BTN = page.locator('data-testid=signInButton');
    }


    // Action methods 
    async navigateToLogin(): Promise<void> {
        await this.page.goto('/login');
        await expect(this.page).toHaveURL('/login', {timeout: 15000});

    }

    async loginToApps(): Promise<void> {
        await this.EMAIL.type('foobarblahblah@clarifai.com');
        await this.PASSWORD.type('********');
        await this.SIGNIN_BTN.click();
    }
}