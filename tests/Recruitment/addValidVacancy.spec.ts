import { test, expect } from '../fixtures/auth';
import RecruitmentPage from '../../pages/RecruitmentPage';
import { validVacancyData } from '../../test-mapping/Recruitment_Vacancy_Data';

test('add vacancy with optional fields and full fields successfully', async ({page, loginPage})=>{
    const recruitmentPage = new RecruitmentPage(page);
    await recruitmentPage.goToRecruitmentPage();
    await recruitmentPage.addVacancySuccessfully(validVacancyData);
})
