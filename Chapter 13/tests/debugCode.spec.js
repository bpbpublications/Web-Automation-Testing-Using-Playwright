// @ts-check
const { test,expect } = require("@playwright/test");
const playwright = require("@playwright/test");

test("Verify ChatGPT debussing capibility", async ({ page }) => {
  const browser = await playwright.chromium.launch();

  await page.goto("https://www.saucedemo.com/");

  // Enter the username and password
  await page.fill("#user-names", "standard_user");
  await page.fill("#password", "secret_sauce");

  // Click the login button
  await page.click('[type="submit"]');

  const title = await page.title();
  expect(title).toHaveProperty('Example Domain');

  // Close the browser
  await browser.close();
});