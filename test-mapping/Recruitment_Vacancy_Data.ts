import RecruitmentVacancyData from '../data/Recruitment_Vacancy.json';
import type {RecruitmentVacancyForm, RecruitmentVacancyOptionalForm, RecruitmentVacancyRequiredForm} from '../types/Recruitment_Vacancy.types';

export const validVacancyData: RecruitmentVacancyForm = RecruitmentVacancyData.validVacancy;
export const requiredFieldsData: RecruitmentVacancyRequiredForm = RecruitmentVacancyData.requiredFieldsVacancy;
export const optionalFieldsData: RecruitmentVacancyOptionalForm = RecruitmentVacancyData.optionalFieldsVacancy;
