import {Page, expect, Locator} from '@playwright/test';

export default class LoginPage{
    readonly page: Page;
    private usernameTextbox = "//input[@name='username']";
    private passwordTextbox = "//input[@name='password']";
    private loginBtn = "//button[text()=' Login ']";

    constructor(page: Page){
        this.page = page;
    }

    private get dashboardLink(): Locator {
    return this.page.locator("//h6[text()='Dashboard']");
    }

    async goToHomePage(): Promise<void>{
        await this.page.goto("https://opensource-demo.orangehrmlive.com/", {waitUntil: 'domcontentloaded'});
    }
    async loginWithValidAccount(username: string, password: string): Promise<void>{
        await this.page.fill(this.usernameTextbox, username);
        await this.page.fill(this.passwordTextbox, password);
        await this.page.click(this.loginBtn);
        await expect(this.dashboardLink).toBeVisible();
    }

}