import {Page, Response} from '@playwright/test';

export default class BasePage{
    protected page: Page;

    constructor(page: Page){
        this.page = page;
    }
    async waitForAPIResponse(endpoint: string, method: string, statusCode: number): Promise<Response>{
        return await this.page.waitForResponse(response =>{
            console.log(`Checking: ${response.url()} | Method: ${response.request().method()} | Status: ${response.status()}`);
            return response.url().includes(endpoint) && 
            response.request().method() === method &&
            response.status() === statusCode 
        });
    }
   
}