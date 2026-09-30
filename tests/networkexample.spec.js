const {test,expect} = require('@playwright/test');

test ('networkmock',async({page})=>{
    await page.route('*/**/api/v1/fruits',async route=>{
        const mockData=[{
            name:'Mockapple',
            id:'101'
        },
        {
            name:'Mockmango',
            id:'102'
        }
    ];
    await route.fulfill({
        status:200,
        contenttype:'application/json',
        body:JSON.stringify(mockData)

    });
    });
    await page.goto("https://demo.playwright.dev/api-mocking");
    await expect(page.getByText('Mockapple')).toBeVisible();
    await expect(page.getByText('Mockmango')).toBeVisible();

     
});