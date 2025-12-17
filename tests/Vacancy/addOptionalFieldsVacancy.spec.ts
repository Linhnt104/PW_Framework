import {test, expect} from '@playwright/test';
import LoginPage from '../../pages/LoginPage';
import { validUserData } from '../../test-mapping/Login_Data';
import RecruitmentPage from '../../pages/RecruitmentPage';
import { optionalFieldsData, validVacancyData } from '../../test-mapping/Recruitment_Vacancy_Data';

test.beforeEach('login_successfully', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToHomePage();
    await loginPage.loginWithValidAccount(validUserData);
   
});

test('add vacancy with optional fields', async ({page})=>{
    const recruitmentPage = new RecruitmentPage(page);
    await recruitmentPage.addVacancyWithOptionalFields(optionalFieldsData);
    await page.waitForTimeout(5000);
})
