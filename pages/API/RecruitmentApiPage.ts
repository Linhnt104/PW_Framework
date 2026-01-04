import ApiBasePage from '../../common/API/waitAPI';
import { Response } from '@playwright/test';

export default class ApiPage extends ApiBasePage {
  async waitForRecruitmentListLoaded(): Promise<Response> {
    const recruitmentEndpoint = 'api/v2/recruitment/candidates/statuses';
    return await this.waitForAPIResponse(
      recruitmentEndpoint,
      'GET',
      200
    );
  }
}