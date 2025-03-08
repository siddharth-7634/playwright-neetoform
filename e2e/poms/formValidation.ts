// import { Page, expect } from '@playwright/test';

// export default class FormValidation {
//   private page: Page;

//   constructor(page: Page) {
//     this.page = page;
//   }

//   async testEmptyFormValidation() {
//     await this.page.getByTestId('start-or-submit-button').click();
//     await expect(this.page.getByText('Email address is required')).toBeVisible();
//     await expect(this.page.getByText('First name is required')).toBeVisible();
//     await expect(this.page.getByText('Last name is required')).toBeVisible();
//     await expect(this.page.getByText('Phone number is invalid')).toBeVisible();
//   }

//   async testInvalidInputValidation() {
//     await this.page.getByTestId('email-text-field').fill('invalidemail');
//     await this.page.getByTestId('phone-number-input-field').fill('1');
//     await this.page.getByTestId('start-or-submit-button').click();
//     await expect(this.page.getByText('Email address is invalid')).toBeVisible();
//     await expect(this.page.getByText('US numbers cannot start with a one.')).toBeVisible();
//   }
// }
// import { Page, expect } from "@playwright/test";
// import { FORM_VALIDATION_SELECTORS } from "../constants/selectors/formValidationSelectors";
// import { FORM_VALIDATION_TEXTS } from "../constants/texts/formValidationTexts";


// export default class FormValidation {

//   constructor(private page: Page) {
//     this.page = page;
//   }

//   async testEmptyFormValidation() {
//     await this.page.getByTestId(FORM_VALIDATION_SELECTORS.submitButton).click();

//     await expect(this.page.getByText(FORM_VALIDATION_TEXTS.emailRequired)).toBeVisible();
//     await expect(this.page.getByText(FORM_VALIDATION_TEXTS.firstNameRequired)).toBeVisible();
//     await expect(this.page.getByText(FORM_VALIDATION_TEXTS.lastNameRequired)).toBeVisible();
//     await expect(this.page.getByText(FORM_VALIDATION_TEXTS.phoneInvalid)).toBeVisible();
//   }

//   async testInvalidInputValidation() {
//     await this.page.getByTestId(FORM_VALIDATION_SELECTORS.emailField).fill("invalidemail");
//     await this.page.getByTestId(FORM_VALIDATION_SELECTORS.phoneField).fill("1");
//     await this.page.getByTestId(FORM_VALIDATION_SELECTORS.submitButton).click();

//     await expect(this.page.getByText(FORM_VALIDATION_TEXTS.emailInvalid)).toBeVisible();
//     await expect(this.page.getByText(FORM_VALIDATION_TEXTS.phoneUSInvalid)).toBeVisible();
//   }
// }


import { Page, expect } from "@playwright/test";
import { FORM_VALIDATION_SELECTORS } from "../constants/selectors/formValidationSelectors";
import { FORM_VALIDATION_TEXTS } from "../constants/texts/formValidationTexts";

export default class FormValidation {
  constructor(private page: Page) {}

  async validateEmptyForm(): Promise<void> {
    await this.page.getByTestId(FORM_VALIDATION_SELECTORS.submitButton).click();
//create funciton for redundant
    await expect(this.page.getByText(FORM_VALIDATION_TEXTS.emailRequired)).toBeVisible();
    await expect(this.page.getByText(FORM_VALIDATION_TEXTS.firstNameRequired)).toBeVisible();
    await expect(this.page.getByText(FORM_VALIDATION_TEXTS.lastNameRequired)).toBeVisible();
    await expect(this.page.getByText(FORM_VALIDATION_TEXTS.phoneInvalid)).toBeVisible();
  }

  async validateInvalidInputs(): Promise<void> {
    //create funciton for redundant
    await this.page.getByTestId(FORM_VALIDATION_SELECTORS.emailField).fill("invalidemail");
    await this.page.getByTestId(FORM_VALIDATION_SELECTORS.phoneField).fill("1");
    await this.page.getByTestId(FORM_VALIDATION_SELECTORS.submitButton).click();

    await expect(this.page.getByText(FORM_VALIDATION_TEXTS.emailInvalid)).toBeVisible();
    await expect(this.page.getByText(FORM_VALIDATION_TEXTS.phoneUSInvalid)).toBeVisible();
  }
}
