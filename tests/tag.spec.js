const { test,expect } = require("@playwright/test");

test.describe('sauce demo login',()=>{
    test.beforeEach(async ({page})=>{
        await page.goto('https://www.saucedemo.com/');
    })
    test('@smoke @login user logs in successfully with valid credentials',async ({page})=>{
        await page.fill('#user-name','standard_user');
        await page.fill('#password','secret_sauce');
        await page.click('#login-button');

    })
    test('@regression @login user sees an error message with invalid credential',async ({page})=>{
        await page.fill('#user-name','standard_user');
        await page.fill('#password','wrong password');
        await page.click('#login-button');


    })
    test('@regression @login user sees an validation error when username is empty',async({page})=>{
        await page.fill('#password','secret_sauce');
        await page.click('#login-button');
    })

})