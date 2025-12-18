import {Page, expect, Locator} from '@playwright/test';
import { LoginForm } from '../types/Login.types';
import { userInfo } from 'os';
import loginData from '../data/Login.json';

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

    private get invalidCredentials(): Locator{
        return this.page.locator("//p[text()='Invalid credentials']");
    }

    private get requiredUsernameMess(): Locator{
        return this.page.locator("//label[text()='Username']//parent::div//following-sibling::span[text()='Required']");
    }
    private get requiredPasswordMess(): Locator{
        return this.page.locator("//label[text()='Password']//parent::div//following-sibling::span[text()='Required']");
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

    async loginWithInvalidAccount(userInfo: LoginForm): Promise<void>{
        await this.page.fill(this.usernameTextbox, userInfo.username);
        await this.page.fill(this.passwordTextbox, userInfo.password);
        await this.page.click(this.loginBtn);
        await expect(this.invalidCredentials).toBeVisible();
    }

    async loginWithEmptyFields(): Promise<void>{
        await this.page.click(this.loginBtn);
        await expect(this.requiredUsernameMess).toBeVisible();
        await expect(this.requiredPasswordMess).toBeVisible();
        await this.page.fill(this.usernameTextbox, loginData.validAccount.username);
        await this.page.click(this.loginBtn);
        await expect(this.requiredPasswordMess).toBeVisible();
        await this.page.fill(this.usernameTextbox, "");
        await this.page.fill(this.passwordTextbox, loginData.validAccount.password);
        await this.page.click(this.loginBtn);
        await expect(this.requiredUsernameMess).toBeVisible();
    }
}