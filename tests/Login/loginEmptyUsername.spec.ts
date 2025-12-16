import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';
import {emptyUsernameData } from '../../test-mapping/Login_Data';
test('login with empty username', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToHomePage();
    await loginPage.loginWithEmptyUsername(emptyUsernameData);
    await page.waitForTimeout(5000);
})