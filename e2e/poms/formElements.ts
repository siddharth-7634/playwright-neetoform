// import { Page, expect } from '@playwright/test';

// export default class FormElements {
//   private page: Page;

//   constructor(page: Page) {
//     this.page = page;
//   }

//   async addFullNameElement() {
//     await this.page.getByTestId('add-full-name-element').click();
//     await expect(this.page.getByTestId('first-name-text-field')).toBeVisible();
//     await expect(this.page.getByTestId('last-name-text-field')).toBeVisible();
//   }

//   async addPhoneNumberElement() {
//     await this.page.getByTestId('add-phone-number-element').click();
//     await expect(this.page.getByTestId('phone-number-input-field')).toBeVisible();
//   }

//   async addSingleChoiceElement() {
//     await this.page.getByTestId('add-single-choice-element').click();
//     await expect(this.page.getByTestId('element-properties-dropdown').getByTestId('neeto-ui-spinner')).toBeHidden();
//   }

//   async addMultiChoiceElement() {
//     await this.page.getByTestId('add-multi-choice-element').click();
//     await expect(this.page.getByTestId('element-properties-dropdown').getByTestId('neeto-ui-spinner')).toBeHidden();
//   }
// }


// import { Page, expect } from '@playwright/test';
// import { FORM_SELECTORS } from '../constants/selectors';

// export default class FormElements {

//   constructor(private page: Page) {
//     this.page = page;
//   }

//   async addFullNameElement() {
//     await this.page.getByTestId(FORM_SELECTORS.addFullName).click();
//     await expect(this.page.getByTestId(FORM_SELECTORS.firstNameField)).toBeVisible();
//     await expect(this.page.getByTestId(FORM_SELECTORS.lastNameField)).toBeVisible();
//   }

//   async addPhoneNumberElement() {
//     await this.page.getByTestId(FORM_SELECTORS.addPhoneNumber).click();
//     await expect(this.page.getByTestId(FORM_SELECTORS.phoneNumberField)).toBeVisible();
//   }

//   async addSingleChoiceElement() {
//     await this.page.getByTestId(FORM_SELECTORS.addSingleChoice).click();
//     await expect(this.page.getByTestId(FORM_SELECTORS.elementPropertiesDropdown).getByTestId(FORM_SELECTORS.spinner)).toBeHidden();
//   }

//   async addMultiChoiceElement() {
//     await this.page.getByTestId(FORM_SELECTORS.addMultiChoice).click();
//     await expect(this.page.getByTestId(FORM_SELECTORS.elementPropertiesDropdown).getByTestId(FORM_SELECTORS.spinner)).toBeHidden();
//   }
// }

import { Page, expect } from "@playwright/test";
import { FORM_SELECTORS } from "../constants/selectors";

export default class FormElements {
  constructor(private page: Page) {}

  async addFullNameElement(): Promise<void> {
    await this.page.getByTestId(FORM_SELECTORS.addFullName).click();
    await expect(this.page.getByTestId(FORM_SELECTORS.firstNameField)).toBeVisible();
    await expect(this.page.getByTestId(FORM_SELECTORS.lastNameField)).toBeVisible();
  }

  async addPhoneNumberElement(): Promise<void> {
    await this.page.getByTestId(FORM_SELECTORS.addPhoneNumber).click();
    await expect(this.page.getByTestId(FORM_SELECTORS.phoneNumberField)).toBeVisible();
  }

  async addSingleChoiceElement(): Promise<void> {
    await this.page.getByTestId(FORM_SELECTORS.addSingleChoice).click();
    const spinner = this.page.getByTestId(FORM_SELECTORS.elementPropertiesDropdown).getByTestId(FORM_SELECTORS.spinner);
    await expect(spinner).toBeHidden();
  }

  async addMultiChoiceElement(): Promise<void> {
    await this.page.getByTestId(FORM_SELECTORS.addMultiChoice).click();
    const spinner = this.page.getByTestId(FORM_SELECTORS.elementPropertiesDropdown).getByTestId(FORM_SELECTORS.spinner);
    await expect(spinner).toBeHidden();
  }
}

