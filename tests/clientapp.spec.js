const { test,expect } = require("@playwright/test");
const { count } = require("node:console");

test ('client app shopping application',async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
    await page.locator(".inventory_item_name ").first().waitFor();
    console.log(await page.locator(".inventory_item_name ").allTextContents());
    const productname="Sauce Labs Backpack";
    const count1=await page.locator(".inventory_item_name ").count();
    console.log(count1);

    for(let i=0;i<count1;i++){
        if(await page.locator(".inventory_item_name ").nth(i).textContent()===productname){
            //await page.locator(text="Add to cart").nth(i).locator("Add to cart").click();
            await page.locator(".inventory_item").nth(i).locator("text=Add to cart").click();
            break;

        }
    }

   //await page.locator(".shopping_cart_badge").click();
   await page.locator(".shopping_cart_link").click()
   expect(await page.locator(".inventory_item_name ").isVisible()).toBeTruthy();
   await page.locator("#checkout").click();
   await page.locator("#first-name").fill("Nimmy");
   await page.locator("#last-name").fill("Thomas");
   await page.locator("#postal-code").fill("12345");
   await page.locator("#continue").click();
   await page.locator("#finish").click();
   expect(await page.locator(".complete-header")).toHaveText("Thank you for your order!");

});