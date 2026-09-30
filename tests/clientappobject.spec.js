const { test,expect } = require("@playwright/test");
const Login = require("../page-objects/login");

test('pageobject model shopping cart application',async({page})=>{
    const login=new Login(page);
    await login.goto();
    await login.validLogin("standard_user","secret_sauce");
})