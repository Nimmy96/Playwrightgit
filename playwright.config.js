const { expect, chromium } = require("@playwright/test");// This is a import

const config=({
  testdir:'./tests',
  fullyParallel: true,
  timeout:80*1000,
  expect:{
    timeout:8000,
  },
  reporter:'html',
  use:{
    browsername:'chromium',
    headless:false,
  },
})
module.exports=config;