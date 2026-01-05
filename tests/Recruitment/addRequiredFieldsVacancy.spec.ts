import { test, expect } from '../fixtures/auth';
import RecruitmentPage from '../../pages/UI/RecruitmentPage';

test('add vacancy successfully', async ({page, loginPage})=>{
    const recruitmentPage = new RecruitmentPage(page);
    await recruitmentPage.goToRecruitmentPage();
    await recruitmentPage.addVacancyWithRequiredFields();
})
