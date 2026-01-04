import { Page, Response } from '@playwright/test';

export default class ApiBasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // res: actual response
  async waitForAPIResponse(
    endpointContains: string,
    method: string,
    statusCode: number,
    timeoutMs = 5000
  ): Promise<Response> {
    return await this.page.waitForResponse(
      (res) => {   
        const urlOk = res.url().includes(endpointContains);
        if (!urlOk) return false;  // check hết toàn bộ res trả về xem có res nào có url mapping với endpoint cần check không

        const methodOk = res.request().method() === method;
        const statusOk = res.status() === statusCode;

        console.log(
          `[API watch] urlMatched=${urlOk} methodOk=${methodOk} statusOk=${statusOk} | ` +
            `${res.request().method()} ${res.url()} -> ${res.status()}`
        );

        return methodOk && statusOk;
      },
      { timeout: timeoutMs }
    );
  }
}
