import { Page, expect, Locator, request } from '@playwright/test';
import path from 'path';
import { RecruitmentCandidateForm } from '../../types/Recruitment_Candidate.types';
import { RecruitmentVacancyForm } from '../../types/Recruitment_Vacancy.types';
import requiredFieldsCandidateData from '../../data/Recruitment_Candidate.json';
import requiredFieldsVacancyData from '../../data/Recruitment_Vacancy.json';
import searchCandidateData from '../../data/Recruitment_SearchCandidate.json';
import { RecruitmentSearchCandidateForm } from '../../types/Recruitment_SearchCandidate.types';
import BasePage from '../../common/API/waitAPI';
import RecruitmentApiPage from '../API/RecruitmentApiPage';
import { BaseTest } from '../../common/Pages/BaseTest';

export default class RecruitmentPage extends BaseTest {
  // readonly page: Page;
  
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
    private options = "//div[@role='option']//span";
    private searchSelectVacancy = "//label[text()='Vacancy']//parent::div//following-sibling::div//div[text()='-- Select --']";
    private searchSelectHiringManager = "//label[text()='Hiring Manager']//parent::div//following-sibling::div//div[text()='-- Select --']";
    private searchSelectStatus = "//label[text()='Status']//parent::div//following-sibling::div//div[text()='-- Select --']";
    private searchCandidateNameKey = "//input[@placeholder='Type for hints...']";
    private searchCandidateNameOption = "(//span[text()='John  Doe'])[1]";
    private searchKeywords = "//input[@placeholder='Enter comma seperated words...']";
    private searchSelectDateOfAppFrom = "//input[@placeholder='From']";
    private searchSelectDateOfAppTo = "//input[@placeholder='To']";
    private searchSelectMethodOfApp = "//label[text()='Method of Application']//parent::div//following-sibling::div//div[text()='-- Select --']";
    private searchCandidateBtn = "//button[text()=' Search ']";
    private resetCandidateSearchBtn = "//button[text()=' Reset ']";
    private rowsLocator = "//div[@lass='oxd-table-card']";
    private cellsLocator = "//div[contains(@class,'oxd-table-cell']";;
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

  // constructor(page: Page, private recruitmentApi: RecruitmentApiPage) {
  //   super(page); // super để khi khởi tạo page object sẽ dùng tất cả những method từ thằng cha
  //   this.page = page;
  //   this.recruitmentApi = recruitmentApi;
  // }

  private recruitmentApi: RecruitmentApiPage;

  constructor(page: Page) {
      super(page);
      this.recruitmentApi = new RecruitmentApiPage(page);
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

  private get noRecordsText(): Locator{https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index
    return this.page.locator("//span[text()='No Records Found']");
  }
  private get multipleRecordsFoundText(): Locator{
    return this.page.locator("//span[contains(.,' Records Found')]");
  }
  private get singleRecordFoundText(): Locator{
    return this.page.locator("//span[contains(.,' Record Found')]");
  }


  // test scrips
  async goToRecruitmentPage() {
    await Promise.all([
      this.recruitmentApi.waitForRecruitmentListLoaded(),
      this.page.click(this.recruitmentBtn)
    ]);
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
    await Promise.all([
      this.recruitmentApi.waitForCandidateDetail(),
      expect(this.successMess).toBeVisible()
    ]);
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
  

  async searchCandidateBySingleField(searchCandidateInfo: RecruitmentSearchCandidateForm): Promise<void>{
    // select by vacancy
    await this.page.click(this.searchSelectVacancy);
    await this.page.locator(this.options).filter({hasText: searchCandidateInfo.vacancy}).click();
    await this.page.click(this.searchCandidateBtn);
    if(await this.multipleRecordsFoundText.isVisible() || await this.singleRecordFoundText.isVisible()){
      const rows = await this.page.locator(this.rowsLocator).all();
      for(const row of rows){
        const cells = row.locator(this.cellsLocator);
        const vacancy = await cells.nth(1).textContent();
        expect(vacancy).toContain(searchCandidateData.vacancy);
      }
    }else if(await this.noRecordsText.isVisible()){
      await expect(this.noRecordsText).toBeVisible();
    }
    await this.page.click(this.resetCandidateSearchBtn);
     // search by candidate name
    await this.page.fill(this.searchCandidateNameKey, searchCandidateData.candidateNameKey);
    await this.page.click(this.searchCandidateBtn);
    if(await this.multipleRecordsFoundText.isVisible() || await this.singleRecordFoundText.isVisible()){
      const rows = await this.page.locator(this.rowsLocator).all();
      for(const row of rows){
        const cells = row.locator(this.cellsLocator);
        const candidateName = await cells.nth(2).textContent();
        expect(candidateName).toContain(searchCandidateData.candidateNameOption);
      }
    }else if(await this.noRecordsText.isVisible()){
      await expect(this.noRecordsText).toBeVisible();
    }
    await this.page.click(this.resetCandidateSearchBtn);
    // search by hiring manager
    await this.page.click(this.searchSelectHiringManager);
    await this.page.locator(this.options).filter({hasText: searchCandidateInfo.hiringManager}).click();
    await this.page.click(this.searchCandidateBtn);
    if(await this.multipleRecordsFoundText.isVisible() || await this.singleRecordFoundText.isVisible()){
      const rows = await this.page.locator(this.rowsLocator).all();
      for(const row of rows){
        const cells = row.locator(this.cellsLocator);
        const hiringManager = await cells.nth(3).textContent();
        expect(hiringManager).toContain(searchCandidateData.hiringManager);
      }
    }else if(await this.noRecordsText.isVisible()){
      await expect(this.noRecordsText).toBeVisible();
    }
    await this.page.click(this.resetCandidateSearchBtn);

     // search by date of app from
    await this.page.click(this.searchSelectDateOfAppFrom);
    await this.page.locator(this.options).filter({hasText: searchCandidateInfo.dateOfAppFrom}).click();
    await this.page.click(this.searchCandidateBtn);
    if(await this.multipleRecordsFoundText.isVisible() || await this.singleRecordFoundText.isVisible()){
      const rows = await this.page.locator(this.rowsLocator).all();
      for(const row of rows){
        const cells = row.locator(this.cellsLocator);
        const dateOfAppFrom = await cells.nth(4).textContent();
        expect(dateOfAppFrom).toContain(searchCandidateData.dateOfAppFrom);
      }
    }else if(await this.noRecordsText.isVisible()){
      await expect(this.noRecordsText).toBeVisible();
    }
    await this.page.click(this.resetCandidateSearchBtn);
    // search by status
    await this.page.click(this.searchSelectStatus);
    await this.page.locator(this.options).filter({hasText: searchCandidateInfo.status}).click();
    await this.page.click(this.searchCandidateBtn);
    if(await this.multipleRecordsFoundText.isVisible() || await this.singleRecordFoundText.isVisible()){
      const rows = await this.page.locator(this.rowsLocator).all();
      for(const row of rows){
        const cells = row.locator(this.cellsLocator);
        const status = await cells.nth(5).textContent();
        expect(status).toContain(searchCandidateData.status);
      }
    }else if(await this.noRecordsText.isVisible()){
      await expect(this.noRecordsText).toBeVisible();
    }
    await this.page.click(this.resetCandidateSearchBtn);
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
    await this.page.fill(this.vacancyName, `${recruitmentVacancyInfo.vacancyName} ${BaseTest.prototype.randomData()}`);
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
    await Promise.all([
      this.recruitmentApi.waitForVacancyDetail(),
      expect(this.editVacancyText).toBeVisible()
    ]);
  return new RecruitmentPage(this.page);
  }

  async addVacancyWithRequiredFields(): Promise<RecruitmentPage>{
    await this.page.click(this.vacancyTab);
    await this.page.click(this.addVacancyBtn);
    // await this.page.fill(this.vacancyName, `${requiredFieldsVacancyData.requiredFieldsVacancy.vacancyName} ${this.randomData()}`);
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