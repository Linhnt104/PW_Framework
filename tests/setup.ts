import {test, expect} from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import { validUserData } from '../test-mapping/Login_Data';


test.beforeEach('login_successfully', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToHomePage();
    await loginPage.loginWithValidAccount(validUserData);

})