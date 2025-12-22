import RecruitmentPage from '../../pages/RecruitmentPage';
import { test, expect } from '../fixtures/auth';
import { candidateData } from '../../test-mapping/Recruitment_Candidate_Data';


test('add candidate with optional fields and full fields successfully', async ({ page, loginPage }) => {
   const recruitmentPage = new RecruitmentPage(page);
   await recruitmentPage.goToRecruitmentPage();
   await recruitmentPage.addCandidateSuccessfully(candidateData);
})
