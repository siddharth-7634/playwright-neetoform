// import { Page, expect } from '@playwright/test';

// export default class FormCustomization {
//   private page: Page;

//   constructor(page: Page) {
//     this.page = page;
//   }

//   async addSingleChoiceElement() {
//     await this.page.getByTestId('add-single-choice-element').click();
//     await expect(this.page.getByTestId('element-properties-dropdown').getByTestId('neeto-ui-spinner')).toBeVisible();
//     await expect(this.page.getByTestId('element-properties-dropdown').getByTestId('neeto-ui-spinner')).toBeHidden();
//   }

//   async addMultiChoiceElement() {
//     await this.page.getByTestId('add-multi-choice-element').click();
//     await expect(this.page.getByTestId('element-properties-dropdown').getByTestId('neeto-ui-spinner')).toBeVisible();
//     await expect(this.page.getByTestId('element-properties-dropdown').getByTestId('neeto-ui-spinner')).toBeHidden();
//   }

//   async customizeFields() {
//     await this.page.getByTestId('single-choice-options-container').click();
//     await this.page.getByTestId('properties-panel').getByTestId('content-text-field').fill("Single-demo");
//     await this.page.getByTestId('properties-panel').getByTestId('add-bulk-option-link').click();
//     await this.page.getByTestId('bulk-add-options-textarea').fill('Option5, Option6, Option7, Option8, Option9, Option10, Option11');
//     await this.page.getByTestId('bulk-add-options-done-button').click();
//     await this.page.getByTestId('randomize-switch-label').click();

//     await this.page.getByTestId('multi-choice-options-container').click();
//     await this.page.getByTestId('properties-panel').getByTestId('content-text-field').fill("Multiple-demo");
//     for (let i = 0; i < 6; i++) {
//       await this.page.getByTestId('add-option-link').click();
//     }
//     await this.page.getByTestId('hide-question-toggle-label').click();
//   }
// }


// import { Page, expect } from "@playwright/test";
// import { FORM_SELECTORS } from "../constants/selectors";

// export default class FormCustomization {

//   constructor(private page: Page) {
//     this.page = page;
//   }

//   async addSingleChoiceElement() {
//     await this.page.getByTestId(FORM_SELECTORS.addSingleChoice).click();
//     await expect(this.page.getByTestId(FORM_SELECTORS.elementPropertiesDropdown).getByTestId(FORM_SELECTORS.spinner)).toBeVisible();
//     await expect(this.page.getByTestId(FORM_SELECTORS.elementPropertiesDropdown).getByTestId(FORM_SELECTORS.spinner)).toBeHidden();
//   }

//   async addMultiChoiceElement() {
//     await this.page.getByTestId(FORM_SELECTORS.addMultiChoice).click();
//     await expect(this.page.getByTestId(FORM_SELECTORS.elementPropertiesDropdown).getByTestId(FORM_SELECTORS.spinner)).toBeVisible();
//     await expect(this.page.getByTestId(FORM_SELECTORS.elementPropertiesDropdown).getByTestId(FORM_SELECTORS.spinner)).toBeHidden();
//   }

//   async customizeFields() {
//     await this.page.getByTestId(FORM_SELECTORS.singleChoiceContainer).click();
    
//     await this.page.getByTestId(FORM_SELECTORS.propertiesPanel).getByTestId(FORM_SELECTORS.contentTextField).fill("Single-demo");
//     await this.page.getByTestId(FORM_SELECTORS.propertiesPanel).getByTestId(FORM_SELECTORS.addBulkOption).click();
//     await this.page.getByTestId(FORM_SELECTORS.bulkOptionsTextarea).fill("Option5, Option6, Option7, Option8, Option9, Option10, Option11");
//     await this.page.getByTestId(FORM_SELECTORS.bulkOptionsDoneButton).click();
//     await this.page.getByTestId(FORM_SELECTORS.randomizeSwitch).click();

//     await this.page.getByTestId(FORM_SELECTORS.multiChoiceContainer).click();
//     await this.page.getByTestId(FORM_SELECTORS.propertiesPanel).getByTestId(FORM_SELECTORS.contentTextField).fill("Multiple-demo");
    
//     for (let i = 0; i < 6; i++) {
//       await this.page.getByTestId(FORM_SELECTORS.addOptionLink).click();
//     }
    
//     await this.page.getByTestId(FORM_SELECTORS.hideQuestionToggle).click();
//   }
// }



import { Page, expect } from "@playwright/test";
import { FORM_SELECTORS } from "../constants/selectors";

export default class FormCustomization {
  constructor(private page: Page) {}

  async addSingleChoiceElement(): Promise<void> {
    await this.page.getByTestId(FORM_SELECTORS.addSingleChoice).click();
    const spinner = this.page.getByTestId(FORM_SELECTORS.elementPropertiesDropdown).getByTestId(FORM_SELECTORS.spinner);
    await expect(spinner).toBeVisible();
    await expect(spinner).toBeHidden();
  }

  async addMultiChoiceElement(): Promise<void> {
    await this.page.getByTestId(FORM_SELECTORS.addMultiChoice).click();
    const spinner = this.page.getByTestId(FORM_SELECTORS.elementPropertiesDropdown).getByTestId(FORM_SELECTORS.spinner);
    await expect(spinner).toBeVisible();
    await expect(spinner).toBeHidden();
  }

  async customizeFields(): Promise<void> {
    await this.page.getByTestId(FORM_SELECTORS.singleChoiceContainer).click();
    await this.page.getByTestId(FORM_SELECTORS.propertiesPanel).getByTestId(FORM_SELECTORS.contentTextField).fill("Single-demo");
    await this.page.getByTestId(FORM_SELECTORS.propertiesPanel).getByTestId(FORM_SELECTORS.addBulkOption).click();
    await this.page.getByTestId(FORM_SELECTORS.bulkOptionsTextarea).fill("Option5, Option6, Option7, Option8, Option9, Option10, Option11");
    await this.page.getByTestId(FORM_SELECTORS.bulkOptionsDoneButton).click();
    await this.page.getByTestId(FORM_SELECTORS.randomizeSwitch).click();

    await this.page.getByTestId(FORM_SELECTORS.multiChoiceContainer).click();
    await this.page.getByTestId(FORM_SELECTORS.propertiesPanel).getByTestId(FORM_SELECTORS.contentTextField).fill("Multiple-demo");
    
    for (let i = 0; i < 6; i++) {
      await this.page.getByTestId(FORM_SELECTORS.addOptionLink).click();
    }
    
    await this.page.getByTestId(FORM_SELECTORS.hideQuestionToggle).click();
  }
}
