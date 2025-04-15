import InventoryPage from './InventoryPage';

export default class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    } 

    async goToLoginPage() {
        await this.page.goto('/');
    }

    async fillUsername(username) {
        await this.usernameInput.fill(username);
    }

    async fillPassword(password) {
        await this.passwordInput.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton
            .click()
            .catch((error) => {
                console.log(`Error clicking login button: ${error}`);
                throw error;
            });

        const inventoryPage = new InventoryPage(this.page);
        return inventoryPage;
    }
}
