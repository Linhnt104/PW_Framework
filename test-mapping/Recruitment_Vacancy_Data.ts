import RecruitmentVacancyData from '../data/Recruitment_Vacancy.json';
import type {RecruitmentVacancyForm} from '../types/Recruitment_Vacancy.types';

export const vacancyData: RecruitmentVacancyForm = {
    vacancyName: RecruitmentVacancyData.vacancyName,
    description: RecruitmentVacancyData.description,
    hiringManager: RecruitmentVacancyData.hiringManager,
    numOfPosition: RecruitmentVacancyData.numOfPosition
}
