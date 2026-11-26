import { Page } from '@playwright/test';

export class LoginPage {

    constructor(private page: Page){}

    emailTextbox = this.page.getByPlaceholder('you@organization.com');

    passwordTextbox = this.page.locator('input[type="password"]');

    signInButton = this.page.getByRole('button', {
        name: 'Sign in'
    });

    async navigate() {
        await this.page.goto('/login');
    }

    async login(email:string,password:string) {

        await this.emailTextbox.fill(email);

        await this.passwordTextbox.fill(password);

        await this.signInButton.click();
    }
}+