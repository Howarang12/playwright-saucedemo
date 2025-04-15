import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import { encrypt, decrypt } from '../utils/CryptojsUtil';
import { encryptEnvFile } from '../utils/EncryptEnvFiles';

test('Login', async ({ page }) => {
    
    const loginPage = new LoginPage(page);
    console.log(process.env.USER)
    console.log(process.env.PASSWORD)
    await loginPage.goToLoginPage();
    await loginPage.fillUsername(decrypt(process.env.USER));
    await loginPage.fillPassword(decrypt(process.env.PASSWORD));
    
    const inventoryPage = await loginPage.clickLoginButton();
    await inventoryPage.expectTitleToBeVisible();
})

test.skip('sample env test', async ({ page }) => {
    // const plainText = 'Hello World';
    // const encryptedText = encrypt(plainText);
    // console.log('SALT: ', process.env.SALT);
    // console.log('Encrypted: ', encryptedText);

    // const decryptedText = decrypt(encryptedText);
    // console.log('Decrypted: ', decryptedText)

    encryptEnvFile();
});