// tests/fixtures/auth.ts
import { test as base, expect, Page } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';
import { validUserData } from '../../test-mapping/Login_Data';

type Fixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    // Login luôn chạy trước mỗi test (vì fixture tạo ra per-test)
    await loginPage.goToHomePage();
    await loginPage.loginWithValidAccount(validUserData);
    await use(loginPage);
  },
});

export { expect };