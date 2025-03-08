import { expect, test } from '@playwright/test'
// import {test} from '../e2e/fixture/index' import when refractoring
import { faker } from "@faker-js/faker";
import LoginPage from './poms/login';
import FormAdd from './poms/formAdd';

test.describe('Neeto-form automation', () => {
    test.beforeEach(async ({ page }) => {
        const login = new LoginPage(page);
        await login.loginUser()
        const formAdd = new FormAdd(page)
        await formAdd.formAdd()
    })
 
    test('should create and submit a form', async ({ page, context }) => {
        
        let newPage;
      
        await test.step('Add form elements', async () => {
          await page.getByTestId('add-full-name-element').click();
          await expect(page.getByTestId('first-name-text-field')).toBeVisible();
          await expect(page.getByTestId('last-name-text-field')).toBeVisible();
          await page.getByTestId('add-phone-number-element').click();
          await expect(page.getByTestId('phone-number-input-field')).toBeVisible();
        });
      
        await test.step('Publish the form', async () => {
          await page.getByTestId('publish-button').click();
          await expect(page.getByTestId('publish-button')).toBeDisabled();
          
          // Wait for the new page before clicking the preview button
          const pagePromise = context.waitForEvent('page');
          await page.getByTestId('publish-preview-button').click();
          newPage = await pagePromise;
          
          await expect(page.getByTestId('email-text-field')).toBeVisible();
        });
      
        await test.step('Preview the form in new page', async () => {
          await expect(newPage.getByTestId('email-text-field')).toBeVisible();
          await expect(newPage.getByTestId('first-name-text-field')).toBeVisible();
          await expect(newPage.getByTestId('last-name-text-field')).toBeVisible();
          await expect(newPage.getByTestId('phone-number-input-field')).toBeVisible();
        });
      
        await test.step('Test empty form validation', async () => {
          await newPage.getByTestId('start-or-submit-button').click();
          await expect(newPage.getByText('Email address is required')).toBeVisible();
          await expect(newPage.getByText('First name is required')).toBeVisible();
          await expect(newPage.getByText('Last name is required')).toBeVisible();
          await expect(newPage.getByText('Phone number is invalid')).toBeVisible();
        });
      
        await test.step('Test invalid input validation', async () => {
          await newPage.getByTestId('email-text-field').fill('hello');
          await newPage.getByTestId('phone-number-input-field').fill('1');
          await newPage.getByTestId('start-or-submit-button').click();
          await expect(newPage.getByText('Email address is invalid')).toBeVisible();
          await expect(newPage.getByText('US numbers cannot start with a one.')).toBeVisible();
        });
      
        await test.step('Submit form with valid data', async () => {
          await newPage.getByTestId('email-text-field').fill(faker.internet.email());
          await newPage.getByTestId('first-name-text-field').fill(faker.person.firstName());
          await newPage.getByTestId('last-name-text-field').fill(faker.person.lastName());
          //check fill add it in constants
          await newPage.getByTestId('phone-number-input-field').fill('4082344567');
          await newPage.getByTestId('start-or-submit-button').click();
          await expect(newPage.getByText('🎉Thank You.Your response has')).toBeVisible();
        });
      });
    test('customize form field elements', async ({ page, context }) => {
        test.setTimeout(40000);

        await test.step('Add form elements', async () => {
            await page.getByTestId('add-single-choice-element').click();
            await expect(page.getByTestId('element-properties-dropdown').getByTestId('neeto-ui-spinner')).toBeVisible();
            await expect(page.getByTestId('element-properties-dropdown').getByTestId('neeto-ui-spinner')).toBeHidden();
            await page.getByTestId('add-multi-choice-element').click();
            await expect(page.getByTestId('element-properties-dropdown').getByTestId('neeto-ui-spinner')).toBeVisible();
            await expect(page.getByTestId('element-properties-dropdown').getByTestId('neeto-ui-spinner')).toBeHidden();
        });

        await test.step('Customize single-choice field', async () => {
            await page.getByTestId('single-choice-options-container').click();
            //check fill add it in constants
            await page.getByTestId('properties-panel').getByTestId('content-text-field').fill("Single-demo");
            await page.getByTestId('properties-panel').getByTestId('add-bulk-option-link').click();
            //check fill add it in constants
            await page.getByTestId('bulk-add-options-textarea').fill('Option5, Option6, Option7, Option8, Option9, Option10, Option11');
            await page.getByTestId('bulk-add-options-done-button').click();
            await page.getByTestId('randomize-switch-label').scrollIntoViewIfNeeded();
            await page.getByTestId('randomize-switch-label').click();
        });

        await test.step('Customize multi-choice field', async () => {
            await page.getByTestId('multi-choice-options-container').click();
            //check fill add it constants
            await page.getByTestId('properties-panel').getByTestId('content-text-field').fill("Multiple-demo");
            for (let i = 0; i < 6; i++) {
                await page.getByTestId('add-option-link').click();
            }
            await page.getByTestId('hide-question-toggle-label').scrollIntoViewIfNeeded();
            await page.getByTestId('hide-question-toggle-label').click();
        });

        await test.step('Publish and verify', async () => {
            await Promise.all([
                expect(page.getByTestId('publish-button')).toBeVisible(),
                expect(page.getByTestId('publish-button')).toBeDisabled(),
                expect(page.getByTestId('publish-button')).toBeVisible()
            ]);
            await page.getByTestId('publish-button').click();
            await expect(page.getByTestId('toastr-success-container')).toBeVisible();
            await expect(page.getByTestId('publish-button')).toBeDisabled();
        });

        await test.step('Validate published form', async () => {
            await page.getByTestId('publish-preview-button').click();
            const pagePromise = context.waitForEvent('page');
            await expect(page.getByTestId('email-text-field')).toBeVisible();
            const newPage = await pagePromise;
            await expect(newPage.getByTestId('email-text-field')).toBeVisible();
            //check these
            const originalSingleOptions = await page.getByTestId('single-choice-options-container').locator("div").allTextContents();
            const publishedSingleOptions = await newPage.getByTestId('single-choice-options-container').locator("div").allTextContents();
            expect(originalSingleOptions).not.toEqual(publishedSingleOptions);
            await expect(newPage.getByText('Multiple-demo')).toBeHidden();
        });

        await test.step('Unhide question and re-publish', async () => {
            await page.getByTestId('hide-question-toggle-label').scrollIntoViewIfNeeded();
            await page.getByTestId('hide-question-toggle-label').click();
            
            await Promise.all([
                expect(page.getByTestId('publish-button')).toBeVisible(),
                expect(page.getByTestId('publish-button')).toBeDisabled(),
                expect(page.getByTestId('publish-button')).toBeVisible(),
                page.getByTestId('publish-button').click()
            ]);
            
            await page.getByTestId('publish-button').click();
            await expect(page.getByTestId('toastr-success-container')).toBeVisible();
            await expect(page.getByTestId('publish-button')).toBeDisabled();
            
            await page.getByTestId('publish-preview-button').click();
            const newPagePromise = context.waitForEvent('page');
            const newPage = await newPagePromise; // Ensure new page is awaited
            await expect(newPage.getByText('Multiple-demo')).toBeVisible();
        });
        
    });
        test('verify form insights', async ({ page, context }) => {
            await test.step('Publish the form', async () => {
                await page.getByTestId('publish-button').click();
                await expect(page.getByTestId('publish-button')).toBeDisabled();
            });
        
            await test.step('Navigate to analytics tab', async () => {
                await page.getByTestId('more-dropdown-icon').click();
                await page.getByTestId('analytics-more-tab').click();
            });
        
            await test.step('Verify initial insights metrics', async () => {
                await Promise.all([
                    expect(page.getByTestId('visits-metric').getByTestId('insights-count')).toHaveText('0'),
                    expect(page.getByTestId('starts-metric').getByTestId('insights-count')).toHaveText('0'),
                    expect(page.getByTestId('submissions-metric').getByTestId('insights-count')).toHaveText('0'),
                    expect(page.getByTestId('completion-rate-metric').getByTestId('insights-count')).toHaveText('0%')
                ]);
            });
        
            await test.step('Open preview and visit form', async () => {
                await page.getByTestId('publish-preview-button').click();
                const newPage = await context.waitForEvent('page');
                await newPage.waitForLoadState();
                await expect(newPage.getByTestId('welcome-screen')).toBeVisible();
                await newPage.getByTestId('email-text-field').fill(faker.internet.email());
            });
        
            await test.step('Reload and verify updated insights', async () => {
                await page.reload({ waitUntil: 'load' });
                await expect(page.getByTestId('visits-metric').getByTestId('insights-count')).toHaveText('1');
                await expect(page.getByTestId('starts-metric').getByTestId('insights-count')).toHaveText('1');
            });
        
            await test.step('Submit the form', async () => {
                await page.getByTestId('publish-preview-button').click();
                const finalNewPage = await context.waitForEvent('page');
                await finalNewPage.waitForLoadState();
                await finalNewPage.getByTestId('start-or-submit-button').click();
            });
        
            await test.step('Reload and validate final insights', async () => {
                await page.reload({ waitUntil: 'load' });
                await expect(page.getByTestId('visits-metric').getByTestId('insights-count')).toHaveText('2');
                await expect(page.getByTestId('starts-metric').getByTestId('insights-count')).toHaveText('1');
                await expect(page.getByTestId('submissions-metric').getByTestId('insights-count')).toHaveText('1');
                await expect(page.getByTestId('completion-rate-metric').getByTestId('insights-count')).toHaveText('100%');
            });
        });
        


});



