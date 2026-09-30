const {test,expect} = require("@playwright/test");

test('browser context playwright test',async({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://google.com");
    console.log(await page.title());
})


test('UI controls',async({page})=>{
await page.goto("https://selenium.qabible.in/index.php");
await page.locator("//a[normalize-space()='Input Form']").click();
await page.locator("a[href='check-box-demo.php']").click();
await page.locator("#gridCheck").check();
await page.locator("a[href='radio-button-demo.php']").click();
await page.locator("#inlineRadio2").click();
} )