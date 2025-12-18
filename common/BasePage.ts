// BasePage.ts
import { Page } from '@playwright/test';

export class BasePage {
  page: Page;
  
  constructor(page: Page) {
    this.page = page;
  }

  public randomData() {
    return Math.floor(Math.random() * 1000) + 1;
  }
}