const { expect, chromium, devices } = require("@playwright/test");

const config=({
  testdir:'./test',
  retries:1,
  workers:3,
  fullyParallel: true,
  timeout:40*1000,
  expect:{
    timeout:5000,
  },
  reporter:'html',
  projects:[{

  name:'Sapharie',

  use:{
    browsername:'Webkit',
    headless:true,
    screenshot:'on',
    trace:'on'
  },
},
{
name:'chrome',
use:{
    browsername:'chromium',
    headless:false,
    ignoreHttpserror:true,
    Permissions:[
      'geolocation'],
    screenshot:'on',
    trace:'on',
    //trace: 'retain-on-failure',
    video:'on',

    launchOptions: {
            slowMo: 1000
        }
  },
}
]
})
module.exports=config;