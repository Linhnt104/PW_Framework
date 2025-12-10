import { test, expect } from '@playwright/test';
import path from 'path';
import RecruitmentPage from '../pages/RecruitmentPage';
import LoginPage from '../pages/LoginPage';

test.beforeEach('login_successfully', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToHomePage();
    await loginPage.loginWithValidAccount("Admin", "admin123");
    await page.waitForTimeout(5000);
})

test('add candidate successfully', async ({ page }) => {
   const recruitmentPage = new RecruitmentPage(page);
   recruitmentPage.loginWithValidAccount("Smith", "M", "John", "Senior QA Lead", "admin1@gmail.com", "02934893", "123", "234");
})
