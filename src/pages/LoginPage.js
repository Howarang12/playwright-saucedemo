import logger from '../utils/LoggerUtil';
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
        logger.info('Navigated to saucedemo login page');
    }

    async fillUsername(username) {
        await this.usernameInput.fill(username);
        logger.info('Filled username');
    }

    async fillPassword(password) {
        await this.passwordInput.fill(password);
        logger.info('Filled password');
    }

    async clickLoginButton() {
        await this.loginButton
            .click()
            .catch((error) => {
                logger.error(`Error clicking login button: ${error}`);
                throw error;
            })
            .then(() => logger.info('Clicked login button'));

        const inventoryPage = new InventoryPage(this.page);
        return inventoryPage;
    }
}
