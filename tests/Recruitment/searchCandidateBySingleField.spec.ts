import { test } from '../fixtures/auth';
import RecruitmentPage from '../../pages/UI/RecruitmentPage';
import { recruitmentSearchCandidateData } from '../../test-mapping/Recruitment_SearchCandidate_Data';


test('search candidate by single field', async ({page, loginPage})=>{
    const recruitmentPage = new RecruitmentPage(page);
    await recruitmentPage.goToRecruitmentPage();
    await recruitmentPage.searchCandidateBySingleField(recruitmentSearchCandidateData);
    // await recruitmentPage.searchCandidateBySingleField(recruitmentSearchCandidateData);
})
