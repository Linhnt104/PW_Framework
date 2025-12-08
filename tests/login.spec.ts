import {test, expect} from '@playwright/test';

test('Login successfully', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/', { waitUntil: 'domcontentloaded' });
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.locator("//button[@type='submit']").click();
    await page.waitForTimeout(5000); 
    await expect(page.locator("//h6[text(🙁'Dashboard']")).toBeVisible();
    await page.waitForTimeout(5000);
});