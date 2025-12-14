import {Page, expect, Locator} from '@playwright/test';
import { LoginForm } from '../types/Login.types';

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
    async loginWithValidAccount(userInfo: LoginForm): Promise<void>{
        await this.page.fill(this.usernameTextbox, userInfo.username);
        await this.page.fill(this.passwordTextbox, userInfo.password);
        await this.page.click(this.loginBtn);
        await expect(this.dashboardLink).toBeVisible();
    }

}