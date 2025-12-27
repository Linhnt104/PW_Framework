import { Page, expect, Locator } from '@playwright/test';
import path from 'path';
import { RecruitmentCandidateForm } from '../types/Recruitment_Candidate.types';
import { RecruitmentVacancyForm } from '../types/Recruitment_Vacancy.types';
import { BaseTest } from '../common/BaseTest';
import requiredFieldsCandidateData from '../data/Recruitment_Candidate.json';
import requiredFieldsVacancyData from '../data/Recruitment_Vacancy.json';
import searchCandidateData from '../data/Recruitment_SearchCandidate.json';
import { RecruitmentSearchCandidateForm } from '../types/Recruitment_SearchCandidate.types';

export default class RecruitmentPage extends BaseTest {
  readonly page: Page;
  
  // add candidate 
    private recruitmentBtn = "//span[text()='Recruitment']";
    private addBtn = "//button[contains(.,'Add')]";
    private firstNameTextbox = "//input[@name='firstName']";
    private middleNameTextbox = "//input[@name='middleName']";
    private lastNameTextbox = "//input[@name='lastName']";
    private selectVacancy = "//label[text()='Vacancy']//parent::div//following-sibling::div[contains(.,'-- Select --')]";
    private vacancyOption = "//span[text()='Sales Representative']";
    private emailTextbox = "//label[text()='Email']//parent::div//following-sibling::div//input";
    private contactNum = "//label[text()='Contact Number']//parent::div//following-sibling::div//input";
    private browseBtn = "//div[text()='Browse']";
    private keyword = "//input[@placeholder='Enter comma seperated words...']";
    private selectDateByApp = "//input[@placeholder='yyyy-dd-mm']";
    private selectDate = "//div[text()='Today']";
    private note = "//textarea[@placeholder='Type here']";
    private consentCheckbox = "//label[text()='Consent to keep data']//ancestor::div[contains(@class, 'save-candidate-page-grid-checkbox')]//span[contains(@class,'checkbox-input')]";
    private saveBtn = "//button[text()=' Save ']";
  // search candidate
    private searchSelectJobTitle = "//label[text()='Job Title']//parent::div//following-sibling::div//div[text()='-- Select --']";
    private searchJobTitleOption = "//span[text()='Chief Executive Officer']";
    private searchSelectVacancy = "//label[text()='Vacancy']//parent::div//following-sibling::div//div[text()='-- Select --']";
    private searchVacancyOption = "//span[text()='Payroll Administrator']";
    private searchSelectHiringManager = "//label[text()='Hiring Manager']//parent::div//following-sibling::div//div[text()='-- Select --']";
    private searchHiringManagerOption = "//span[text()='Virat Kohli']";
    private searchSelectStatus = "//label[text()='Status']//parent::div//following-sibling::div//div[text()='-- Select --']";
    private searchStatusOption = "//span[text()='Application Initiated']";
    private searchCandidateNameKey = "//input[@placeholder='Type for hints...']";
    private searchCandidateNameOption = "(//span[text()='John  Doe'])[1]";
    private searchKeywords = "//input[@placeholder='Enter comma seperated words...']";
    private searchSelectDateOfAppFrom = "//input[@placeholder='From']";
    private searchDateOfAppFromOption = "//div[text()='17']";
    private searchSelectDateOfAppTo = "//input[@placeholder='To']";
    private searchDateOfAppToOption = "//div[text()='20']";
    private searchSelectMethodOfApp = "//label[text()='Method of Application']//parent::div//following-sibling::div//div[text()='-- Select --']";
    private searchMethodOfAppOption = "//span[text()='Manual']";
    private searchCandidateBtn = "//button[text()=' Search ']";

  // add vacancy
    private vacancyTab = "//a[text()='Vacancies']";
    private addVacancyBtn = "//button[text()=' Add ']";
    private vacancyName = "//label[text()='Vacancy Name']//parent::div//following-sibling::div//input[contains(@class,'oxd-input')]";
    private selectJobTitle = "//div[text()='-- Select --']";
    private jobTitleOption = "//span[text()='Account Assistant']";
    private description = "//textarea[@placeholder='Type description here']";
    private hiringManager = "//input[@placeholder='Type for hints...']";
    private selectHiringResult = "//span[text()='Ranga  Akunuri']";
    private numOfPositions = "//label[text()='Number of Positions']//parent::div//following-sibling::div//input[contains(@class,'oxd-input')]";
    private triggerActive = "//p[text()='Active']//parent::div//span[contains(@class,'oxd-switch-input')]";
    private triggerPublish = "//p[contains(.,'Publish')]//parent::div//span[contains(@class,'oxd-switch-input')]";
    private saveVacancyBtn = "//button[text()=' Save ']";

    // search vacancy
    private searchVSelectJobTitle = "//label[text()='Job Title']//parent::div//following-sibling::div//div[text()='-- Select --']";
    private searchVJobTitleOption = "//span[text()='Chief Technical Officer']";
    private searchVSelectVacancy = "//label[text()='Vacancy']//parent::div//following-sibling::div//div[text()='-- Select --']";
    private searchVVacancyOption = "//span[text()='Internship Developer']";
    private searchVSelectHiringManager = "//label[text()='Hiring Manager']//parent::div//following-sibling::div//div[text()='-- Select --']";
    private searchVHiringManagerOption = "//span[text()='Virat Kohli']";
    private searchVSelectStatus = "//label[text()='Status']//parent::div//following-sibling::div//div[text()='-- Select --']";
    private searchVStatusOption = "//span[text()='Active']";
  constructor(page: Page) {
    super(page); // super để khi khởi tạo page object sẽ dùng tất cả những method từ thằng cha
    this.page = page;
  }

  private get successMess(): Locator {
    return this.page.locator("//p[text()='Success']");
  }
  private get editVacancyText(): Locator{
    return this.page.locator("//h6[text()='Edit Vacancy']");
  }
  private get requiredMessVacancyName(): Locator{
    return this.page.locator("//label[text()='Vacancy Name']//parent::div//following-sibling::span[text()='Required']");
  }
  private get requiredMessJobTitle(): Locator{
    return this.page.locator("//label[text()='Job Title']//parent::div//following-sibling::span[text()='Required']");
  }
  private get requiredMessHiringManager(): Locator{
    return this.page.locator("//label[text()='Hiring Manager']//parent::div//following-sibling::span[text()='Required']");
  }

  private get requiredMessFirstName(): Locator{
    return this.page.locator("//input[@name='firstName']//parent::div//following-sibling::span[text()='Required']");
  }
  private get requiredMessLastName(): Locator{
    return this.page.locator("//input[@name='lastName']//parent::div//following-sibling::span[text()='Required']");
  }
  private get requiredMessEmail(): Locator{
    return this.page.locator("//label[text()='Email']//parent::div//following-sibling::span[text()='Required']");
  }
  private get applicationStageText(): Locator{
    return this.page.locator("//h6[text()='Application Stage']");
  }

  private get noRecordsText(): Locator{
    return this.page.locator("//span[text()='No Records Found']");
  }
  private get multipleRecordsFoundText(): Locator{
    return this.page.locator("//span[contains(.,' Records Found')]");
  }
  private get singleRecordFoundText(): Locator{
    return this.page.locator("//span[contains(.,' Record Found')]");
  }


  // test scrips
  async goToRecruitmentPage(): Promise<void>{
    await expect(this.page.locator(this.recruitmentBtn)).toBeVisible();
    await this.page.click(this.recruitmentBtn);
  }

  async addCandidateSuccessfully(
    recruitmentCandidateInfo: RecruitmentCandidateForm): Promise<RecruitmentPage> {
    await this.page.click(this.addBtn);
    // input optional fields for candidate form 
    await this.page.click(this.saveBtn);
    await expect(this.requiredMessFirstName).toBeVisible();
    await expect(this.requiredMessLastName).toBeVisible();
    await expect(this.requiredMessEmail).toBeVisible();
    await this.page.fill(this.firstNameTextbox, recruitmentCandidateInfo.firstName);
    await this.page.fill(this.middleNameTextbox, recruitmentCandidateInfo.middleName);
    await this.page.fill(this.lastNameTextbox, recruitmentCandidateInfo.lastName);
    await this.page.click(this.selectVacancy);
    await this.page.click(this.vacancyOption);
    await this.page.fill(this.emailTextbox, recruitmentCandidateInfo.email);
    await this.page.fill(this.contactNum, recruitmentCandidateInfo.contactNumber);
    const fileChooserPromise = this.page.waitForEvent('filechooser');
    await this.page.click(this.browseBtn);
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(path.join(__dirname, 'BTKTS_K25DTCN166.pdf'));
    await this.page.fill(this.keyword, recruitmentCandidateInfo.keyword);
    await this.page.click(this.selectDateByApp);
    await this.page.click(this.selectDate);
    await this.page.fill(this.note, recruitmentCandidateInfo.note);
    await this.page.click(this.consentCheckbox);
    await this.page.click(this.saveBtn);
    await this.page.waitForTimeout(5000);

    // verify correctly data
    await expect(this.applicationStageText).toBeVisible();
  return new RecruitmentPage(this.page);
  }

  async addRequiredFieldsCandidate(): Promise<void>{
    await this.page.click(this.addBtn);
    await this.page.fill(this.firstNameTextbox, requiredFieldsCandidateData.requiredFieldsCandidate.firstName);
    await this.page.fill(this.lastNameTextbox, requiredFieldsCandidateData.requiredFieldsCandidate.lastName);
    await this.page.fill(this.emailTextbox, requiredFieldsCandidateData.requiredFieldsCandidate.email);
    await this.page.click(this.saveBtn);
    // verify add candidate successfully
    await expect(this.applicationStageText).toBeVisible();
  }
  

  async searchCandidate(searchCandidateInfo: RecruitmentSearchCandidateForm): Promise<void>{
    await this.page.click(this.searchSelectJobTitle);
    await this.page.getByText(searchCandidateInfo.jobTitle).click();
    await this.page.click(this.searchSelectVacancy);
    await this.page.locator("span").filter({ hasText: searchCandidateInfo.vacancy }).click();
    await this.page.click(this.searchSelectHiringManager);
    await this.page.locator("//div[@role='option']//span").filter({ hasText: searchCandidateInfo.hiringManager }).click();
    await this.page.click(this.searchSelectStatus);
    await this.page.locator("span").filter({ hasText: searchCandidateInfo.status }).click();
    await this.page.fill(this.searchCandidateNameKey, searchCandidateInfo.candidateNameKey);
    await this.page.locator("//div[@role='option']//span").filter({ hasText: searchCandidateInfo.candidateNameOption }).click();
    await this.page.fill(this.searchKeywords, searchCandidateInfo.keywords);
    await this.page.click(this.searchSelectDateOfAppFrom);
    await this.page.getByText(searchCandidateInfo.dateOfAppFrom).click();
    await this.page.click(this.searchSelectDateOfAppTo);
    await this.page.getByText(searchCandidateInfo.dateOfAppTo).click();
    await this.page.click(this.searchSelectMethodOfApp);
    await this.page.getByText(searchCandidateInfo.methodOfApp).click();
    await this.page.click(this.searchCandidateBtn);
    // no record
    // await expect(this.noRecordsText).toBeVisible();

    // have record
    // await expect(this.multipleRecordsFoundText).toBeVisible();

    // have data 
    const rows = await this.page.locator("//div[contains(@class,'oxd-table-row')]").all();
    console.log(typeof rows);
    for (const row of rows) {
    const cells = await row.locator("//div[contains(@class,'oxd-table-cell')]").allTextContents();
    // const vacancy = cells[2]?.toLowerCase();
    const candidate = cells[3]?.toLowerCase();
    const hiringManager = cells[4]?.toLowerCase();
    const dateOfApp = cells[5]?.toLowerCase();
    const status = cells[6]?.toLowerCase();
    // expect(vacancy).toContain(searchCandidateData.vacancy.toLowerCase());
    expect(candidate).toContain(searchCandidateData.candidateNameOption.toLowerCase());
    expect(hiringManager).toContain(searchCandidateData.hiringManager.toLowerCase());
    expect(dateOfApp).toContain(searchCandidateData.dateOfAppFrom.toLowerCase());
    expect(status).toContain(searchCandidateData.status.toLowerCase());
  }
}


  async addVacancySuccessfully(recruitmentVacancyInfo: RecruitmentVacancyForm): Promise<RecruitmentPage>{
    await this.page.click(this.vacancyTab);
    await this.page.click(this.addVacancyBtn);
    // add optional fields for vacancy form 
    await this.page.click(this.saveVacancyBtn);
    await expect(this.requiredMessVacancyName).toBeVisible();
    await expect(this.requiredMessJobTitle).toBeVisible();
    await expect(this.requiredMessHiringManager).toBeVisible();
    // add vacancy successfully
    await this.page.fill(this.vacancyName, `${recruitmentVacancyInfo.vacancyName} ${this.randomData()}`);
    await this.page.click(this.selectJobTitle);
    await this.page.click(this.jobTitleOption);
    await this.page.fill(this.description, recruitmentVacancyInfo.description);
    await this.page.fill(this.hiringManager, recruitmentVacancyInfo.hiringManager);
    await this.page.click(this.selectHiringResult);
    await this.page.fill(this.numOfPositions, recruitmentVacancyInfo.numOfPosition.toString());
    await this.page.click(this.triggerActive);
    await this.page.click(this.triggerPublish);
    await this.page.click(this.saveVacancyBtn);

    // verify successfully
    await expect(this.editVacancyText).toBeVisible();
  return new RecruitmentPage(this.page);
  }

  async addVacancyWithRequiredFields(): Promise<RecruitmentPage>{
    await this.page.click(this.vacancyTab);
    await this.page.click(this.addVacancyBtn);
    await this.page.fill(this.vacancyName, `${requiredFieldsVacancyData.requiredFieldsVacancy.vacancyName} ${this.randomData()}`);
    await this.page.click(this.selectJobTitle);
    await this.page.click(this.jobTitleOption);
    await this.page.fill(this.hiringManager, requiredFieldsVacancyData.requiredFieldsVacancy.hiringManager);
    await this.page.click(this.selectHiringResult);
    await this.page.click(this.triggerActive);
    await this.page.click(this.triggerPublish);
    await this.page.click(this.saveVacancyBtn);

    // verify successfully
    await expect(this.editVacancyText).toBeVisible();
  return new RecruitmentPage(this.page);
  }

  async searchVacancy(): Promise<void>{
    await this.page.click(this.vacancyTab);
    await this.page.click(this.searchVSelectJobTitle);
    await this.page.click(this.searchVJobTitleOption);
    await this.page.click(this.searchVSelectVacancy);
    await this.page.click(this.searchVVacancyOption);
    await this.page.click(this.searchVSelectHiringManager);
    await this.page.click(this.searchVHiringManagerOption);
    await this.page.click(this.searchVSelectStatus);
    await this.page.click(this.searchVStatusOption);
    await this.page.click(this.searchCandidateBtn);
    await expect(this.singleRecordFoundText).toBeVisible();
  }
}