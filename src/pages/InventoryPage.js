import { expect } from '@playwright/test';

export default class InventoryPage {

    constructor(page) {
        this.page = page;
        this.title = page.locator('.title');
    }

    async expectTitleToBeVisible() {
        await expect(this.title).toBeVisible({ timeout: 15000 });
        logger.info("Service Title is visible");
    }
}