const { test, expect } = require("@playwright/test");
test('Click on Twitter Button to open Window Based Popup ', async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo")
    const [windowPopup] = await Promise.all([
        page.waitForEvent('popup'),
        // Open the Popup
        page.locator("[title='Follow @Lambdatesting on Twitter']").click() 
      ])
      await windowPopup.waitForLoadState();
      // Print title of window popup
      console.log('Title of the POp Up is ', await windowPopup.title());
      windowPopup.close()
     // Print title of existing page
      console.log('Title of existing page ',await page.title());
})
test('Click on Facebook Button to open Window Based Popup ', async({page})=>{
  await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo")
  const [windowPopup] = await Promise.all([
      page.waitForEvent('popup'),
      // Open the Popup
      page.locator("[title='Follow @Lambdatesting on Facebook']").click() 
    ])
    await windowPopup.waitForLoadState();
    // Print title of window popup
    console.log('Title of the POp Up is ', await windowPopup.title());
    windowPopup.close()
    // Print title of existing page
    console.log('Title of existing page ',await page.title());
})