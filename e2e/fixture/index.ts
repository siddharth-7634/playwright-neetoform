import { test as base } from '@playwright/test';
import LoginPage from '../poms/login';
import FormAdd from '../poms/formAdd';
import FormActions from '../poms/formActions';
import FormCustomization from '../poms/formCustomization';
import FormInsights from '../poms/formInsights';


export const test = base.extend<{
  login: LoginPage;
  formAdd: FormAdd;
  formActions: FormActions;
  formCustomization: FormCustomization;
  formInsights: FormInsights;
}>({
  login: async ({ page }, use) => {
    const login = new LoginPage(page);
    await use(login);
  },

  formAdd: async ({ page }, use) => {
    const formAdd = new FormAdd(page);
    await use(formAdd);
  },

  formActions: async ({ page }, use) => {
    const formAction = new FormActions(page)
    await use(formAction);
  },

  formCustomization: async ({ page }, use) => {
    const formCustomization  = new FormCustomization(page)
    await use(formCustomization);
  },

  formInsights: async ({ page }, use) => {
    const formInsights = new FormInsights(page)
    await use(formInsights);
  },
});

export { expect } from '@playwright/test';
