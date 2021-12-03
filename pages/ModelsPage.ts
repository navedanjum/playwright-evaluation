import { expect, Locator, Page } from "@playwright/test";

export class ModelsPage {

    readonly page: Page;

    // Rather use it as Objects - Bad example on playwright documentation because of high chance of object being uninitialized from constructor
    // This is a bad way of writing test,here only for exploration purpose
     MODELS_TAB : Locator;
     SEARCH_FIELD : Locator
     INPUT_TYPE: Locator;
     MODEL_TYPE: Locator;
     OUTPUT_TYPE: Locator;
     USE_CASE: Locator;


    constructor(page: Page) {
        this.page = page;

    }
    
    async navigateToModels(): Promise<void> {
        await this.page.goto('/explore', {waitUntil: "load", timeout:20000});
        await this.page.goto('/explore/models', {waitUntil: "load", timeout:20000});
        
    }
    
    async searchModel(name: string): Promise<void> {
        this.SEARCH_FIELD = this.page.locator('data-testid=listingSearchInput');
        await this.SEARCH_FIELD.click();
        await this.SEARCH_FIELD.fill(name);
        
    }
    
    async verifyFilterSection(): Promise<void> {
        this.INPUT_TYPE = this.page.locator('text=Input Type');
        this.OUTPUT_TYPE = this.page.locator('text=Output Type').first();
        this.MODEL_TYPE = this.page.locator('text=Model Type').first();
        this.USE_CASE = this. page.locator('text=Use Cases').first();
        await expect(this.INPUT_TYPE).toBeVisible({timeout: 30000});
        await expect(this.OUTPUT_TYPE).toBeVisible({timeout: 30000});
        await expect(this.MODEL_TYPE).toBeVisible({timeout: 30000});
        await expect(this.USE_CASE).toBeVisible({timeout: 30000});
    }
}