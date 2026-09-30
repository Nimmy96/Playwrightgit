export async function login(username,password,page){
    await page.goto("https://www.saucedemo.com");
    await page.fill("#user-name",username);
    await page.fill("#password",password);
    await page.click("#login-button");
}
    
