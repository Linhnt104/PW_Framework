import RecruitmentCandidateData from '../data/Recruitment_Candidate.json';
import type {RecruitmentCandidateForm} from '../types/Recruitment_Candidate.types';


export const candidateData: RecruitmentCandidateForm = {
    firstName: RecruitmentCandidateData.firstName, 
    middleName: RecruitmentCandidateData.middleName, 
    lastName: RecruitmentCandidateData.lastName,
    email: RecruitmentCandidateData.email,
    contactNumber: RecruitmentCandidateData.contactNumber, 
    keyword: RecruitmentCandidateData.keyword, 
    note: RecruitmentCandidateData.note
};