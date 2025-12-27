import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';
import { invalidAccountData } from '../../test-mapping/Login_Data';

test('login with invalid account', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToHomePage();
    await loginPage.loginWithInvalidAccount(invalidAccountData);
})