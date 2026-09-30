const {  test,expect } = require("@playwright/test")
const { login } = require("../utils/login")

test.describe('utility function example',()=>{
    test('login',async({page})=>{
        await login("standard_user","secret_sauce",page);
        await expect(page).toHaveURL(/inventory/);

    })
})