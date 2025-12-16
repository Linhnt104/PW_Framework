import {test, expect} from '@playwright/test';
import LoginPage from '../../pages/LoginPage';
import {invalidPasswordData } from '../../test-mapping/Login_Data';
test('login with invalid password', async ({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.loginWithInvalidPassword(invalidPasswordData);
})