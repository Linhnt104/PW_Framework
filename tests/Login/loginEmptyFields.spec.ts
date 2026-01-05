import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/UI/LoginPage';

test('login with empty account', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToHomePage();
    await loginPage.loginWithEmptyFields();
    await page.waitForTimeout(5000);
})