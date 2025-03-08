// import { Page, expect } from "@playwright/test";

// export default class FormAdd {
//     page:Page;
//     constructor(page:Page) {
//         this.page = page;
//     }

//     formAdd = async() => {
//         await this.page.getByTestId('add-form-button').click();
//         await this.page.getByTestId('start-from-scratch-button').click();
//     }
// }


// import { Page } from "@playwright/test";
// import { FORM_SELECTORS } from "../constants/selectors";

// export default class FormAdd {
//     page: Page;

//     constructor(page: Page) {
//         this.page = page;
//     }

//     formAdd = async () => {
//         await this.page.getByTestId(FORM_SELECTORS.addFormButton).click();
//         await this.page.getByTestId(FORM_SELECTORS.startFromScratchButton).click();
//     };
// }


import { Page } from "@playwright/test";
import { FORM_SELECTORS } from "../constants/selectors";

export default class FormAdd {
  constructor(private page: Page) {}

  async formAdd(): Promise<void> {
    await this.page.getByTestId(FORM_SELECTORS.addFormButton).click();
    await this.page.getByTestId(FORM_SELECTORS.startFromScratchButton).click();
  }
}
