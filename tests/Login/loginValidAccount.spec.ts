import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/UI/LoginPage';
import { validUserData } from '../../test-mapping/Login_Data';

test('login_successfully', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToHomePage();
    await loginPage.loginWithValidAccount(validUserData);
})