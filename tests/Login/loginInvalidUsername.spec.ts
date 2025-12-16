import {test, expect} from '@playwright/test';
import LoginPage from '../../pages/LoginPage';
import {invalidUsernameData } from '../../test-mapping/Login_Data';
test('login with invalid username', async ({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.loginWithInvalidUsername(invalidUsernameData);
})