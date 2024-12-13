const { test, expect } = require("@playwright/test");
test("LambdaTest Playground Example  ", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/radiobutton-demo");

  // Select First Radio Option "Male" using click() method
 await page.locator("//input[@name='optradio']").first().click()
  expect(await page.locator("//input[@name='optradio']").first()).toBeChecked()
  expect(await page.locator("//input[@name='optradio']").first().isChecked()).toBeTruthy()


  
  // Select Second Radio Option "Female" using check() method
  await page.locator("//input[@name='optradio']").last().check()
  expect(await page.locator("//input[@name='optradio']").last()).toBeChecked()
  expect(await page.locator("//input[@name='optradio']").last().isChecked()).toBeTruthy()

  //First Radio Option 'Male' should be un-selected
  expect(await page.locator("//input[@name='optradio']").first().isChecked()).toBeFalsy()

});