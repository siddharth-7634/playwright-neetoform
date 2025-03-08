// import { Page, expect } from "@playwright/test";

// export default class LoginPage {
//     page:Page;
//     constructor(page:Page) {
//         this.page = page;
//     }

//     loginUser = async() => {
//         await this.page.goto('/');
//         await this.page.getByTestId('login-email-text-field').fill('oliver@example.com');
//         await this.page.getByTestId('login-password-text-field').fill('welcome');
//         await this.page.getByTestId('login-submit-button').click();
//     }
// }


// import { Page } from "@playwright/test";
// import { LOGIN_SELECTORS } from "../constants/selectors";

// export default class LoginPage {
//     page: Page;

//     constructor(page: Page) {
//         this.page = page;
//     }

//     loginUser = async () => {
//         await this.page.goto("/");
//         await this.page.getByTestId(LOGIN_SELECTORS.emailField).fill(process.env.DEFAULT_USERNAME);
//         await this.page.getByTestId(LOGIN_SELECTORS.passwordField).fill(process.env.DEFAULT_PASSWORD);
//         await this.page.getByTestId(LOGIN_SELECTORS.submitButton).click();
//     };
// }



import { Page } from "@playwright/test";
import { LOGIN_SELECTORS } from "../constants/selectors";

export default class LoginPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    loginUser = async () => {
        await this.page.goto("/");

        const username = process.env.DEFAULT_USERNAME ?? "oliver@example.com";
        const password = process.env.DEFAULT_PASSWORD ?? "welcome";

        await this.page.getByTestId(LOGIN_SELECTORS.emailField).fill(username);
        await this.page.getByTestId(LOGIN_SELECTORS.passwordField).fill(password);
        await this.page.getByTestId(LOGIN_SELECTORS.submitButton).click();
    };
}
