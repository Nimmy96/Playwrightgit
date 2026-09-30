# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\jsonexample.spec.js >> @web Login with problem_user
- Location: tests\jsonexample.spec.js:9:1

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /inventory.html/
Received string:  "https://www.saucedemo.com/"
Timeout: 8000ms

Call log:
  - Expect "toHaveURL" with timeout 8000ms
    19 × locator resolved to <html lang="en">…</html>
       - unexpected value "https://www.saucedemo.com/"

```

```yaml
- text: Swag Labs
- textbox "Username": user.username
- textbox "Password": user.password
- 'heading "Epic sadface: Username and password do not match any user in this service" [level=3]':
  - button
  - text: "Epic sadface: Username and password do not match any user in this service"
- button "Login"
- heading "Accepted usernames are:" [level=4]
- text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
- heading "Password for all users:" [level=4]
- text: secret_sauce
```

# Test source

```ts
  1  | const { test,expect } = require("@playwright/test");
  2  | require("dotenv").config();
  3  | const users=require("../test-data/users.json");
  4  | 
  5  | users.forEach((user)=>{
  6  | 
  7  | 
  8  | 
  9  | test(`@web Login with ${user.username}`,async({page})=>{
  10 |     await page.goto(process.env.URL);
  11 |     await page.locator("#user-name").fill("user.username");
  12 |     await page.locator("#password").fill("user.password");
  13 |     await page.locator("#login-button").click();
> 14 |     await expect(page).toHaveURL(/inventory.html/);
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  15 | });
  16 | })
```