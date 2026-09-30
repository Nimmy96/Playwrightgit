const { test,expect } = require("@playwright/test");
require("dotenv").config();
const users=require("../test-data/users.json");

users.forEach((user)=>{



test(`@web Login with ${user.username}`,async({page})=>{
    await page.goto(process.env.URL);
    await page.locator("#user-name").fill(user.username);
    await page.locator("#password").fill(user.password);
    await page.locator("#login-button").click();
    await expect(page).toHaveURL(/inventory.html/);
});
})