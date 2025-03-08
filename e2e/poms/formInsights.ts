// import { Page, expect } from '@playwright/test';

// export default class FormInsights {
//   private page: Page;

//   constructor(page: Page) {
//     this.page = page;
//   }

//   async navigateToInsights() {
//     await this.page.getByTestId('more-dropdown-icon').click();
//     await this.page.getByTestId('analytics-more-tab').click();
//   }

//   async verifyMetrics(expectedValues: { visits?: number; starts?: number; submissions?: number; completionRate?: string }) {
//     if (expectedValues.visits !== undefined) {
//       await expect(this.page.getByTestId('visits-metric').getByTestId('insights-count')).toHaveText(`${expectedValues.visits}`);
//     }
//     if (expectedValues.starts !== undefined) {
//       await expect(this.page.getByTestId('starts-metric').getByTestId('insights-count')).toHaveText(`${expectedValues.starts}`);
//     }
//     if (expectedValues.submissions !== undefined) {
//       await expect(this.page.getByTestId('submissions-metric').getByTestId('insights-count')).toHaveText(`${expectedValues.submissions}`);
//     }
//     if (expectedValues.completionRate !== undefined) {
//       await expect(this.page.getByTestId('completion-rate-metric').getByTestId('insights-count')).toHaveText(expectedValues.completionRate);
//     }
//   }
// }


// import { Page, expect } from "@playwright/test";
// import { INSIGHTS_SELECTORS } from "../constants/selectors/formInsightSelectors";


// export default class FormInsights {

//   constructor(private page: Page) {
//     this.page = page;
//   }

//   async navigateToInsights() {
//     await this.page.getByTestId(INSIGHTS_SELECTORS.moreDropdown).click();
//     await this.page.getByTestId(INSIGHTS_SELECTORS.analyticsTab).click();
//   }

//   async verifyMetrics(expectedValues: { visits?: number; starts?: number; submissions?: number; completionRate?: string }) {
//     if (expectedValues.visits !== undefined) {
//       await expect(
//         this.page.getByTestId(INSIGHTS_SELECTORS.visitsMetric).getByTestId(INSIGHTS_SELECTORS.insightsCount)
//       ).toHaveText(String(expectedValues.visits));
//     }
//     if (expectedValues.starts !== undefined) {
//       await expect(
//         this.page.getByTestId(INSIGHTS_SELECTORS.startsMetric).getByTestId(INSIGHTS_SELECTORS.insightsCount)
//       ).toHaveText(String(expectedValues.starts));
//     }
//     if (expectedValues.submissions !== undefined) {
//       await expect(
//         this.page.getByTestId(INSIGHTS_SELECTORS.submissionsMetric).getByTestId(INSIGHTS_SELECTORS.insightsCount)
//       ).toHaveText(String(expectedValues.submissions));
//     }
//     if (expectedValues.completionRate !== undefined) {
//       await expect(
//         this.page.getByTestId(INSIGHTS_SELECTORS.completionRateMetric).getByTestId(INSIGHTS_SELECTORS.insightsCount)
//       ).toHaveText(String(expectedValues.completionRate));
//     }
//   }
// }


import { Page, expect } from "@playwright/test";
import { INSIGHTS_SELECTORS } from "../constants/selectors/formInsightSelectors";

export default class FormInsights {
  constructor(private page: Page) {}

  async navigateToInsights(): Promise<void> {
    await this.page.getByTestId(INSIGHTS_SELECTORS.moreDropdown).click();
    await this.page.getByTestId(INSIGHTS_SELECTORS.analyticsTab).click();
  }

  async verifyMetrics(expectedValues: { visits?: number; starts?: number; submissions?: number; completionRate?: string }): Promise<void> {
    const metrics = {
      visits: INSIGHTS_SELECTORS.visitsMetric,
      starts: INSIGHTS_SELECTORS.startsMetric,
      submissions: INSIGHTS_SELECTORS.submissionsMetric,
      completionRate: INSIGHTS_SELECTORS.completionRateMetric,
    };

    for (const [key, selector] of Object.entries(metrics)) {
      const expectedValue = expectedValues[key as keyof typeof expectedValues];
      if (expectedValue !== undefined) {
        await expect(
          this.page.getByTestId(selector).getByTestId(INSIGHTS_SELECTORS.insightsCount)
        ).toHaveText(String(expectedValue));
      }
    }
  }
}
