const {test,expect} = require("@playwright/test");

test('Handling dropdown using 3 methods',async({page})=>{
    await page.goto("https://selenium.qabible.in/select-input.php");
    await page.locator("#single-input-field").selectOption({label:'Red'});
    console.log("selectByLabel",await page.locator("#single-input-field").inputValue());
    await page.locator("#single-input-field").selectOption({value:'Yellow'});
    console.log("selectByValue",await page.locator("#single-input-field").inputValue());
    await page.locator("#single-input-field").selectOption({index:3});
    console.log("selectByIndex",await page.locator("#single-input-field").inputValue());
});