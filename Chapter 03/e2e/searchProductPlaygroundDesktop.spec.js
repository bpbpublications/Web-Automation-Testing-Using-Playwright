const { test, expect } = require("@playwright/test");
test("LambdaTest Playground Example  ", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
  await page.getByPlaceholder("Please enter first value").fill("1");
  await page.getByPlaceholder("Please enter second value").fill("2");
  await expect(page.getByRole("button", { name: "Get Sum" })).toBeVisible();
  await page.getByRole("button", { name: "Get Sum" }).click();
  await expect(page.locator("#addmessage")).toHaveText("3");
});

//await expect(page.getByText('Single Input Field')).toBeVisible();
//await expect(page.getByText('Single Input Field', { exact: true })).toBeVisible();
//await page.getByAltText('Logo').first().click();
//await expect(page.getByText(/single, [A-Za-z]+$/i)).toBeVisible();

//await page.getByTestId("sum1").fill("1");
//await page.getByTestId("sum2").fill("4");

//await expect(page.getByTitle('Poco Electro')).toBeVisible();
