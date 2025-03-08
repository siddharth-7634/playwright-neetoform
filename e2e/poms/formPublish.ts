// import { Page, expect } from '@playwright/test';

// export default class FormPublish {
//   private page: Page;

//   constructor(page: Page) {
//     this.page = page;
//   }

//   async publishForm() {
//     await this.page.getByTestId('publish-button').click();
//     await expect(this.page.getByTestId('toastr-success-container')).toBeVisible();
//     await expect(this.page.getByTestId('publish-button')).toBeDisabled();
//   }

//   async openPreview(context) {
//     const pagePromise = context.waitForEvent('page');
//     await this.page.getByTestId('publish-preview-button').click();
//     const newPage = await pagePromise;
//     await newPage.waitForLoadState();
//     return newPage;
//   }
// // }
// import { Page, expect } from "@playwright/test";
// import { PUBLISH_SELECTORS } from "../constants/selectors/formPublishSelectors";

// export default class FormPublish {

//   constructor(private page: Page) {
//     this.page = page;
//   }

//   async publishForm() {
//     await this.page.getByTestId(PUBLISH_SELECTORS.publishButton).click();
//     await expect(this.page.getByTestId(PUBLISH_SELECTORS.successToast)).toBeVisible();
//     await expect(this.page.getByTestId(PUBLISH_SELECTORS.publishButton)).toBeDisabled();
//   }

//   async openPreview(context) {
//     const pagePromise = context.waitForEvent("page");
//     await this.page.getByTestId(PUBLISH_SELECTORS.previewButton).click();
//     const newPage = await pagePromise;
//     await newPage.waitForLoadState();
//     return newPage;
//   }
// }


import { Page, BrowserContext, expect } from "@playwright/test";
import { PUBLISH_SELECTORS } from "../constants/selectors/formPublishSelectors";

export default class FormPublish {
  constructor(private page: Page) {}

  async publishForm(): Promise<void> {
    await this.page.getByTestId(PUBLISH_SELECTORS.publishButton).click();
    await expect(this.page.getByTestId(PUBLISH_SELECTORS.successToast)).toBeVisible();
    await expect(this.page.getByTestId(PUBLISH_SELECTORS.publishButton)).toBeDisabled();
  }

  async openPreview(context: BrowserContext): Promise<Page> {
    const pagePromise = context.waitForEvent("page");
    await this.page.getByTestId(PUBLISH_SELECTORS.previewButton).click();
    //change names for page
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    return newPage;
  }
}

