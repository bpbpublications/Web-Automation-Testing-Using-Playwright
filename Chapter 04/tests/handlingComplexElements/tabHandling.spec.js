const { test, expect } = require("@playwright/test");
test('Open New Tab and back to original Page', async({context}) => {
    const page = await context.newPage();
    await page.goto("https://the-internet.herokuapp.com/windows");
    
    // Wait for a new page to be created
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        await page.locator('//a[normalize-space()="Click Here"]').click() 
    ]);

    // Wait for the new page to load
    await newPage.waitForLoadState();          

    // Get the Title of the new tab page
    console.log('New Tab --- >>>', await newPage.title());

    // Close the new tab and navigate back to the original page 
    await newPage.close();

    // Title of the existing page
    console.log('Existing page --- >>> ', await page.title());

    await page.close();
});
