import { Page, expect, Locator } from '@playwright/test';
import path from 'path';
import { RecruitmentCandidateForm } from '../types/Recruitment_Candidate.types';

export default class RecruitmentPage {
  readonly page: Page;

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
    
  constructor(page: Page) {
    this.page = page;
  }

  private get successMess(): Locator {
    return this.page.locator("//p[text()='Success']");
  }


  async addCandidateSuccessfully(
    recruitmentCandidateInfo: RecruitmentCandidateForm): Promise<RecruitmentPage> {
    // input data
    await this.page.waitForTimeout(5000);
    await this.page.click(this.recruitmentBtn);
    await this.page.click(this.addBtn);
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


    // verify correctly data
    await expect(this.successMess).toBeVisible();
  return new RecruitmentPage(this.page);
  }

}