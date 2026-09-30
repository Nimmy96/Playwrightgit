import {test as base,expect} from '@playwright/test'
import Login1 from '../page-objects/login1';


export const test=base.extend({
    loginpage:async ({page},use)=>{
      await page.goto("https://www.saucedemo.com/");
      const loginpage=new Login1(page);
      await use(loginpage); 

    }

});
export{expect};