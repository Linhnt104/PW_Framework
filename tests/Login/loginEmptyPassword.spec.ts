import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';
import {emptyPasswordData} from '../../test-mapping/Login_Data';
test('login with empty password', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToHomePage();
    await loginPage.loginWithEmptyPassword(emptyPasswordData);
    await page.waitForTimeout(5000);
})