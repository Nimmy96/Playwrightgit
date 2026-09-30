export default class Login1{
    constructor(page){
        this.page=page;
        this.username=page.locator("#user-name");
        this.password=page.locator("#password");
        this.login=page.locator("#login-button");

    }
    async goto(){
        await this.page.goto("https://www.saucedemo.com");

    }
    async validLogin(userName,passWord){
        await this.username.fill(userName);
        await this.password.fill(passWord);
        await this.login.click();


    }

}
