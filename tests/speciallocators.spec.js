const {test,expect} = require("@playwright/test");

test('special locators',async({page})=>{
    await page.goto('https://selenium.qabible.in/index.php');
    await page.getByRole('link',{name:'Input Form'}).click();
    await page.getByRole('link',{name:'Checkbox Demo'}).click();
    await page.getByLabel("Click on this check box").check();
    await page.getByRole('link',{name:'Radio Buttons Demo'}).click();
    await page.getByLabel('1 to 18').check();
    await page.getByRole('link',{name:'Select Input'}).click();
    await page.getByLabel("Select Color").selectOption("Red");
    await page.getByRole('link',{name:'Form Submit',exact:true}).click();
    await page.getByPlaceholder("First name").fill("Nimmy");
    await page.getByPlaceholder("Last name").fill("Thomas");
    await page.getByPlaceholder("Username").fill("Nimmy96");
    await page.getByPlaceholder("City").fill("Kochi");
    await page.getByPlaceholder("State").fill("Kerala");
    await page.getByPlaceholder("Zip").fill("1234");
    await page.getByLabel("Agree to terms and conditions").check();
    await page.getByRole('Button',{name:'Submit form'}).click();

})