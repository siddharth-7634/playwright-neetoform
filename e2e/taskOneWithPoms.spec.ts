import { test, expect } from '../e2e/fixture/index';
import { faker } from "@faker-js/faker";

test.describe('Neeto-form automation', () => {

  test.beforeEach("Step 1", async ({ login, formAdd }) => {
    await login.loginUser();
    await formAdd.formAdd();
  });

  test('should create and submit a form', async ({ formActions, context }) => {
    test.setTimeout(120000);

    await test.step('Step 2 : Add basic form fields', () => formActions.addBasicFields());

    await test.step('Step 3 :Publish the form', () => formActions.publishForm());

    let newPage;
    await test.step('Step 4 :Open form preview', async () => {
      newPage = await formActions.openPreview(context);
    });

    await test.step('Step 5 :Validate form preview', () => formActions.validateFormPreview(newPage));

    await test.step('Step 6 :Submit form with valid data', () => formActions.submitValidForm(newPage, faker));
  });


  test('customize form field elements', async ({ formCustomization, formActions }) => {
    await test.step('Step 7 :Add single-choice element', () => formCustomization.addSingleChoiceElement());

    await test.step('Step 8 :Add multi-choice element', () => formCustomization.addMultiChoiceElement());

    await test.step('Step 9 :Customize form fields', () => formCustomization.customizeFields());

    await test.step('Step 10 :Publish the form', () => formActions.publishForm());
  });



  test('verify form insights', async ({ formInsights, formActions, context, page }) => {
    await test.step('Publish the form', () => formActions.publishForm())

    await test.step('Step 11 :Navigate to analytics tab', async () => {
      await formInsights.navigateToInsights();
    });

    await test.step('Step 12 :Verify initial insights metrics', async () => {
      await formInsights.verifyMetrics({
        visits: 0,
        starts: 0,
        submissions: 0,
        completionRate: '0%',
      });
    });

    await test.step('Step 13 :Open preview and visit form', async () => {
      const newPage = await formActions.openPreview(context);
      await expect(newPage.getByTestId('welcome-screen')).toBeVisible();
      await newPage.getByTestId('email-text-field').fill(faker.internet.email());
    });

    await test.step('Step 14 :Reload and verify updated insights', async () => {
      await page.reload({ waitUntil: 'load' });
      await formInsights.verifyMetrics({
        visits: 1,
        starts: 1,
      });
    });

    await test.step('Step 15 :Submit the form', async () => {
      const finalNewPage = await formActions.openPreview(context);
      await finalNewPage.getByTestId('start-or-submit-button').click();
    });

    await test.step('Step 16 :Reload and validate final insights', async () => {
      await page.reload({ waitUntil: 'load' });
      await formInsights.verifyMetrics({
        visits: 2,
        starts: 1,
        submissions: 1,
        completionRate: '100%',
      });
    });
  });

});


