export interface RecruitmentVacancyForm{
    vacancyName: string, 
    description: string, 
    hiringManager: string, 
    numOfPosition: number
}

// export type RecruitmentVacancyRequiredForm = Pick<
//     RecruitmentVacancyForm,
//     'vacancyName' | 'hiringManager'
// >;

// export type RecruitmentVacancyOptionalForm = Pick<
//     RecruitmentVacancyForm,
//     'description' | 'numOfPosition'
// >;
// export interface RecruitmentVacancyForm{
//     vacancyName: string, 
//     description: string, 
//     hiringManager: string, 
//     numOfPosition: number
// }