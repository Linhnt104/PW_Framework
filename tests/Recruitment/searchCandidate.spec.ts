import {test, expect} from '@playwright/test';
import RecruitmentPage from '../../pages/RecruitmentPage';
import LoginPage from '../../pages/LoginPage';
import { validUserData } from '../../test-mapping/Login_Data';

test.beforeEach('login_successfully', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToHomePage();
    await loginPage.loginWithValidAccount(validUserData);

})

test('search candidate has data and no data', async ({page}) => {
    const recruitmentPage = new RecruitmentPage(page);

    await recruitmentPage.goToRecruitmentPage();
    await recruitmentPage.searchCandidate();
    await page.waitForTimeout(5000);
})