const {test} = require("@playwright/test");

test('Alerthandling',async({page})=>{
await page.goto("https://selenium.qabible.in/javascript-alert.php");

//simple alert
page.once('dialog',async dialog=>{
    console.log(dialog.message());
    await dialog.accept();
});
await page.locator("button:has-text('Click me!')").first().click();

//confirm Alert
page.once('dialog',async dialog=>{
    console.log(dialog.message());
    await dialog.dismiss();
})
await page.locator("button:has-text('Click me!')").nth(1).click();

//Prompt Alert
page.once('dialog',async dialog=>{
    console.log(dialog.message());
    await dialog.accept("Nimmy");
    
});
await page.getByRole('button',{name:'Click for Prompt Box'}).click();
});


test('iframe handling',async({page})=>{
await page.goto('https://demoqa.com/frames');
const framepage=page.frameLocator("#frame1");
console.log(await framepage.locator("#sampleHeading").textContent());
await page.pause();

})