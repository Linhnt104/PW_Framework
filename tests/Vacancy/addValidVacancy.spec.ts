import {test, expect} from '@playwright/test';
import LoginPage from '../../pages/LoginPage';
import { validUserData } from '../../test-mapping/Login_Data';
import RecruitmentPage from '../../pages/RecruitmentPage';
import { validVacancyData } from '../../test-mapping/Recruitment_Vacancy_Data';

test.beforeEach('login_successfully', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToHomePage();
    await loginPage.loginWithValidAccount(validUserData);
});

test('add vacancy with required fields', async ({page})=>{
    const recruitmentPage = new RecruitmentPage(page);
    await recruitmentPage.addVacancySuccessfully(validVacancyData);
})
