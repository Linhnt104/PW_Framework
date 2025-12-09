import { Page, expect } from '@playwright/test';

export default class RecruitmentPage {
  readonly page: Page;

    private emailTextbox = '//input[@data-qa="login-email"]';
    private passwordTextbox = '//input[@data-qa="login-password"]';
    private loginButton = '//button[@data-qa="login-button"]';
    private loginFailMessage = '//p[text()="Your email or password is incorrect!"]';

  constructor(page: Page) {
    this.page = page;
  }

    async loginWithValidCredentials(user: string, pass: string): Promise<RecruitmentPage> {
    await this.page.fill(this.emailTextbox, user);
    await this.page.fill(this.passwordTextbox, pass);
    await this.page.click(this.loginButton);
    return new RecruitmentPage(this.page);
  }

}