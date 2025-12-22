import RecruitmentPage from '../../pages/RecruitmentPage';
import { test, expect } from '../fixtures/auth';

test('add required fields for candidate form', async ({page, loginPage}) => {
    const recruitmentPage = new RecruitmentPage(page);
    await recruitmentPage.goToRecruitmentPage();
    await recruitmentPage.addRequiredFieldsCandidate();
})