const { test,expect } = require("@playwright/test");
const path=require('path');

test ('upload a file',async ({page})=>{
    await page.goto("https://demo.guru99.com/test/upload/");
    const filePath="C:/Users/thoma/Downloads/Copy of MODULE 2 END ASSIGNMENT.pdf";
    await page.locator("#uploadfile_0").setInputFiles(filePath);
    await page.locator('#terms').check();
    await page.locator('#submitbutton').click();
    await expect(page.locator('#res')).toContainText('successfully uploaded.');


});