import { test, expect } from '@playwright/test';
import { ModelsPage } from  '../../pages/ModelsPage'

test('Models Page Object Model', async ({ page }) => {
    const SEARCH_STR = 'Face';

    const modelsPage = new ModelsPage(page);
    await modelsPage.navigateToModels();
    await modelsPage.searchModel(SEARCH_STR);
    await modelsPage.verifyFilterSection();

  });