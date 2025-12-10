import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
test('login_successfully', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToHomePage();
    await loginPage.loginWithValidAccount("Admin", "admin123");
})