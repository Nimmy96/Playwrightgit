const { test,expect } = require("../fixtures/fixture");

test('login test',async({loginpage})=>{
    await loginpage.validLogin('standard_user','secret_sauce');
    await expect(loginpage.page).toHaveURL(/inventory.html/);
 

});