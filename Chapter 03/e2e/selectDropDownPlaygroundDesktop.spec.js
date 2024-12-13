const { test, expect } = require("@playwright/test");
test("LambdaTest Playground Example  ", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
  await page.locator("#select-demo").click();

  //By using text Select Day : Monday
  await page.locator("#select-demo").selectOption("Monday");

  //By using Index Select First option
  await page.locator("#select-demo").selectOption({ index: 1 });

  //By using value Select Day : Tuesday
  await page.locator("#select-demo").selectOption({ value: "Tuesday" });

  //By text Select Day : Tuesday
  await page.selectOption("#select-demo", "Tuesday");

  //By using label Select Day : Tuesday
  await page.locator("#select-demo").selectOption({ label: "Friday" });
});

//Assert checkbox is Checked
//expect(await page.getByTestId("isAgeSelected").isChecked()).toBeTruthy();

//Assert checkbox is Un-Checked again
//await page.getByTestId("isAgeSelected").click();
//expect(await page.getByTestId("isAgeSelected").isChecked()).toBeFalsy();

//const options = await page.locator("#select-demo option");
//await expect(options).toHaveCount(8)

//const options = await page.$$("#select-demo option");
//await expect(options.length).toBe(8)
