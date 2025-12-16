// BasePage.ts
import { Page } from '@playwright/test';

export class BasePage {
  constructor(public page: Page) {}

  public randomData() {
    return Math.floor(Math.random() * 1000) + 1;
  }
}