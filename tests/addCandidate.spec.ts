import { test, expect } from '@playwright/test';
import RecruitmentPage from '../pages/RecruitmentPage';
import LoginPage from '../pages/LoginPage';
import Recruitment_Candidate from '../data/Recruitment_Candidate.json'; 
import Login from '../data/Login.json'; 
import { candidateData } from '../test-mapping/Recruitment_Candidate_Data';
import { userData } from '../test-mapping/Login_Data';

test.beforeEach('login_successfully', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToHomePage();
    await loginPage.loginWithValidAccount(userData);
    await page.waitForTimeout(5000);
})

test('add candidate successfully', async ({ page }) => {
   const recruitmentPage = new RecruitmentPage(page);
   await recruitmentPage.addCandidateSuccessfully(candidateData);
})
