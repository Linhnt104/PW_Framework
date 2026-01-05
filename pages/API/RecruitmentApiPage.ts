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
  };
  async waitForCandidateDetail(): Promise<Response>{
    const candidateDetailEndpoint = 'api/v2/recruitment/candidates';
    return await this.waitForAPIResponse(
      candidateDetailEndpoint,
      'GET',
      200
    );
  };
  async waitForVacancyDetail(): Promise<Response>{
    const vacancyDetailEndpoint = 'api/v2/recruitment/vacancies';
    return await this.waitForAPIResponse(
      vacancyDetailEndpoint,
      'GET',
      200
    )
  }
}