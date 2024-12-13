const { test, expect } = require("@playwright/test");
test("LambdaTest Playground Example  ", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );

  //Assert checkbox is Un-Checked
  expect(await page.getByTestId("isAgeSelected").isChecked()).toBeFalsy();
  await page.getByTestId("isAgeSelected").click();

  //Assert checkbox is Checked
  expect(await page.getByTestId("isAgeSelected").isChecked()).toBeTruthy();

  //Assert checkbox is Un-Checked again
  await page.getByTestId("isAgeSelected").click();
  expect(await page.getByTestId("isAgeSelected").isChecked()).toBeFalsy();
});

test("Multiple Check Box Example  ", async ({page}) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
  //Assert Check First checkbox
  expect(await page.getByTestId("ex1-check1").isChecked()).toBeFalsy();
  await page.getByTestId("ex1-check1").click();
  expect(await page.getByTestId("ex1-check1").isChecked()).toBeTruthy();

  //Assert Check Second checkbox
  expect(await page.getByTestId("ex1-check2").isChecked()).toBeFalsy();
  await page.getByTestId("ex1-check2").click();
  expect(await page.getByTestId("ex1-check2").isChecked()).toBeTruthy();

  //Assert Check Third checkbox
  expect(await page.getByTestId("ex1-check3").first().isChecked()).toBeFalsy();
  await page.getByTestId("ex1-check3").first().click();
  expect(await page.getByTestId("ex1-check3").first().isChecked()).toBeTruthy();
});