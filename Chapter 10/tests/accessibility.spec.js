const { test, expect } = require("@playwright/test");
import AxeBuilder from "@axe-core/playwright"; 

test("Scan the Complete Page", async ({page}) => {
  await page.goto("https://www.thetesttribe.com/my-account/edit-account/");
  const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
  expect(accessibilityScanResults.violations).toEqual([]); 
});

test("Scan the Partial Page Include Login Credentials Section during Scan", async ({page}) => {
  await page.goto("https://www.thetesttribe.com/my-account/edit-account/");
  const accessibilityScanResults = await new AxeBuilder({ page }).include('.woocommerce').analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Scan the Complete Page related to WCAG A or AA violations", async ({page}) => {
  await page.goto("https://www.thetesttribe.com/my-account/edit-account/");
  const accessibilityScanResults = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});


test("Scan the Complete Page related to WCAG A or AA violations with disabling the rule 'region'", async ({page}) => {
  await page.goto("https://www.thetesttribe.com/my-account/edit-account/");
  const accessibilityScanResults = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).disableRules(["region"]).analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Include Customer Login Credentials during Scan", async ({page}) => {
  await page.goto("https://www.thetesttribe.com/my-account/edit-account/");
  const accessibilityScanResults = await new AxeBuilder({ page }).include('#customer_login').analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
test("Include Login Button ONLY during Scan", async ({page}) => {
  await page.goto("https://www.thetesttribe.com/my-account/edit-account/");
  const accessibilityScanResults = await new AxeBuilder({ page }).include('#woocommerce-login-nonce').analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
test("Include Email Address Field ONLY during Scan", async ({page}) => {
  await page.goto("https://www.thetesttribe.com/my-account/edit-account/");
  const accessibilityScanResults = await new AxeBuilder({ page }).include('#username').analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
test("Include Password Field ONLY during Scan", async ({page}) => {
  await page.goto("https://www.thetesttribe.com/my-account/edit-account/");
  const accessibilityScanResults = await new AxeBuilder({ page }).include('#password').analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Scan only the Username text field of the Login Credentials Screen", async ({page}) => {
  await page.goto("https://www.thetesttribe.com/my-account/edit-account/");
  const accessibilityScanResults = await new AxeBuilder({ page }).include('#username').analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
test("Exclude Top Banner Section Scan", async ({page}) => {
  await page.goto("https://www.thetesttribe.com/my-account");
  const accessibilityScanResults = await new AxeBuilder({ page }).exclude('#termly-code-snippet-support').analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
test("Exclude Login Tab during Scan", async ({page}) => {
  await page.goto("https://www.thetesttribe.com/my-account");
  const accessibilityScanResults = await new AxeBuilder({ page }).exclude('[data-id="tab1"]').analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test("Disable Rules login_credentials during Scan", async ({page}) => {
  await page.goto("https://www.thetesttribe.com/my-account/edit-account/");
  const accessibilityScanResults = await new AxeBuilder({ page }).disableRules(["region"]).analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
