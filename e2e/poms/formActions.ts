// import { Page, expect } from '@playwright/test';

// export default class FormActions {
//   private page: Page;

//   constructor(page: Page) {
//     this.page = page;
//   }

//   async addBasicFields() {
//     await this.page.getByTestId('add-full-name-element').click();
//     await expect(this.page.getByTestId('first-name-text-field')).toBeVisible();
//     await expect(this.page.getByTestId('last-name-text-field')).toBeVisible();

//     await this.page.getByTestId('add-phone-number-element').click();
//     await expect(this.page.getByTestId('phone-number-input-field')).toBeVisible();
//   }

//   async publishForm() {
//     await this.page.getByTestId('publish-button').click();
//     await expect(this.page.getByTestId('publish-button')).toBeDisabled();
//     await expect(this.page.getByTestId('toastr-success-container')).toBeVisible();
//   }

//   async openPreview(context) {
//     const newPagePromise = context.waitForEvent('page');
//     await this.page.getByTestId('publish-preview-button').click();
//     return await newPagePromise;
//   }

//   async validateFormPreview(newPage) {
//     await expect(newPage.getByTestId('email-text-field')).toBeVisible();
//     await expect(newPage.getByTestId('first-name-text-field')).toBeVisible();
//     await expect(newPage.getByTestId('last-name-text-field')).toBeVisible();
//     await expect(newPage.getByTestId('phone-number-input-field')).toBeVisible();
//   }

//   async submitValidForm(newPage, faker) {
//     await newPage.getByTestId('email-text-field').fill(faker.internet.email());
//     await newPage.getByTestId('first-name-text-field').fill(faker.person.firstName());
//     await newPage.getByTestId('last-name-text-field').fill(faker.person.lastName());
//     await newPage.getByTestId('phone-number-input-field').fill('4082344567');
//     await newPage.getByTestId('start-or-submit-button').click();
//     await expect(newPage.getByText('🎉Thank You.Your response has')).toBeVisible();
//   }
// }



// import { Page, expect } from "@playwright/test";
// import { FORM_SELECTORS } from "../constants/selectors";
// import { FORM_TEXTS } from "../constants/texts";

// export default class FormActions {

//   constructor(private page: Page) {
//     this.page = page;
//   }

//   async addBasicFields() {
//     await this.page.getByTestId(FORM_SELECTORS.addFullName).click();
//     await expect(this.page.getByTestId(FORM_SELECTORS.firstNameField)).toBeVisible();
//     await expect(this.page.getByTestId(FORM_SELECTORS.lastNameField)).toBeVisible();

//     await this.page.getByTestId(FORM_SELECTORS.addPhoneNumber).click();
//     await expect(this.page.getByTestId(FORM_SELECTORS.phoneNumberField)).toBeVisible();
//   }

//   async publishForm() {
//     await this.page.getByTestId(FORM_SELECTORS.publishButton).click();
//     await expect(this.page.getByTestId(FORM_SELECTORS.publishButton)).toBeDisabled();
//     await expect(this.page.getByTestId(FORM_SELECTORS.toastrSuccess)).toBeVisible();
//   }

//   async openPreview(context) {
//     const newPagePromise = context.waitForEvent("page");
//     await this.page.getByTestId(FORM_SELECTORS.publishPreview).click();
//     return await newPagePromise;
//   }

//   async validateFormPreview(newPage) {
//     await expect(newPage.getByTestId(FORM_SELECTORS.emailField)).toBeVisible();
//     await expect(newPage.getByTestId(FORM_SELECTORS.firstNameField)).toBeVisible();
//     await expect(newPage.getByTestId(FORM_SELECTORS.lastNameField)).toBeVisible();
//     await expect(newPage.getByTestId(FORM_SELECTORS.phoneNumberField)).toBeVisible();
//   }

//   async submitValidForm(newPage, faker) {
//     await newPage.getByTestId(FORM_SELECTORS.emailField).fill(faker.internet.email());
//     await newPage.getByTestId(FORM_SELECTORS.firstNameField).fill(faker.person.firstName());
//     await newPage.getByTestId(FORM_SELECTORS.lastNameField).fill(faker.person.lastName());
//     //check fill
//     await newPage.getByTestId(FORM_SELECTORS.phoneNumberField).fill("4082344567");
//     await newPage.getByTestId(FORM_SELECTORS.submitButton).click();
//     await expect(newPage.getByText(FORM_TEXTS.successMessage)).toBeVisible();
//   }
// }



import { Page, expect, BrowserContext } from "@playwright/test";
import { FORM_SELECTORS } from "../constants/selectors";
import { FORM_TEXTS } from "../constants/texts";
import { faker } from "@faker-js/faker";

export default class FormActions {
  constructor(private page: Page) {}

  async addBasicFields (): Promise<void>  {
    await this.page.getByTestId(FORM_SELECTORS.addFullName).click();
    await expect(this.page.getByTestId(FORM_SELECTORS.firstNameField)).toBeVisible();
    await expect(this.page.getByTestId(FORM_SELECTORS.lastNameField)).toBeVisible();

    await this.page.getByTestId(FORM_SELECTORS.addPhoneNumber).click();
    await expect(this.page.getByTestId(FORM_SELECTORS.phoneNumberField)).toBeVisible();
  }

  async publishForm(): Promise<void> {
    await this.page.getByTestId(FORM_SELECTORS.publishButton).click();
    await expect(this.page.getByTestId(FORM_SELECTORS.publishButton)).toBeDisabled();
    await expect(this.page.getByTestId(FORM_SELECTORS.toastrSuccess)).toBeVisible();
  }

  async openPreview(context: BrowserContext): Promise<Page> {
    const newPagePromise = context.waitForEvent("page");
    await this.page.getByTestId(FORM_SELECTORS.publishPreview).click();
    return await newPagePromise;
  }

  async validateFormPreview(newPage: Page): Promise<void> {
    //add a function to for repetitive work
    await expect(newPage.getByTestId(FORM_SELECTORS.emailField)).toBeVisible();
    await expect(newPage.getByTestId(FORM_SELECTORS.firstNameField)).toBeVisible();
    await expect(newPage.getByTestId(FORM_SELECTORS.lastNameField)).toBeVisible();
    await expect(newPage.getByTestId(FORM_SELECTORS.phoneNumberField)).toBeVisible();
  }

  async submitValidForm(newPage: Page,faker): Promise<void> {
    await newPage.getByTestId(FORM_SELECTORS.emailField).fill(faker.internet.email());
    await newPage.getByTestId(FORM_SELECTORS.firstNameField).fill(faker.person.firstName());
    await newPage.getByTestId(FORM_SELECTORS.lastNameField).fill(faker.person.lastName());
    //use faker
    await newPage.getByTestId(FORM_SELECTORS.phoneNumberField).fill("4082344567");

    await newPage.getByTestId(FORM_SELECTORS.submitButton).click();
    await expect(newPage.getByText(FORM_TEXTS.successMessage)).toBeVisible();
  }
}
