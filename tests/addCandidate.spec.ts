import { test, expect } from '@playwright/test';
import path from 'path';

test.beforeEach('Login successfully', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/', { waitUntil: 'domcontentloaded' });
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.locator("//button[@type='submit']").click();
    await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();
});


test('add candidate successfully', async ({ page }) => {
    // input data
    await page.getByText("Recruitment").click();
    await page.locator("//button[contains(.,'Add')]").click();
    await page.getByPlaceholder("First Name").fill("Smith");
    await page.getByPlaceholder("Middle Name").fill("M");
    await page.getByPlaceholder("Last Name").fill("John");
    await page.locator("//label[text()='Vacancy']//parent::div//following-sibling::div[contains(.,'-- Select --')]").click();
    await page.locator("//div[@role='option']//span[text()='Sales Representative']").click();
    await page.locator("//label[text()='Email']//parent::div//following-sibling::div//input").fill("johnSmith@gmail.com");
    await page.locator("//label[text()='Contact Number']//parent::div//following-sibling::div//input").fill("029384923");//      --------------------------------------------
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByText("Browse").click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(path.join(__dirname, 'BTKTS_K25DTCN166.pdf'));
    await page.getByPlaceholder("Enter comma seperated words...").fill("Test1 Test1");
    await page.getByPlaceholder("yyyy-dd-mm").click();
    await page.locator("//div[@class='oxd-date-input-links']//div[text()='Today']").click();
    await page.locator("//textarea[@placeholder='Type here']").fill("123");
    await page.locator("//div[@class='oxd-checkbox-wrapper']//span").click();
    await page.locator("//button[text()=' Save ']").click();

    // verify correctly data

    await page.locator("//p[text()='Success']").isVisible();
    await expect(page.locator("//p[text()='Success']")).toHaveText("Success");
})
