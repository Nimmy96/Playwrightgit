const { test, expect } = require("@playwright/test");


test.describe('sauce demo login test',()=>{
    test.beforeEach(async({page})=>{
        await page.goto("https://www.saucedemo.com/");
    });
    test.afterEach(async({page})=>{
        console.log("Test completed");
        await page.close();
    });
    test('Valid login',async ({page})=>{
        await page.fill('#user-name','standard_user');
        await page.fill('#password','secret_sauce');
        await page.click('#login-button');
        await expect(page.locator('.title')).toHaveText('Products');
    });
    test('Invalid Login',async({page})=>{
        await page.fill('#user-name','standard_user');
        await page.fill('#password','Wrong password');
        await page.click('#login-button');
        await expect(page.locator('[data-test="error"]')).toBeVisible();
    });

});