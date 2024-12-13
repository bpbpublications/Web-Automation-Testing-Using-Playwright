const { Given, When, Then } = require("@cucumber/cucumber");
const { chromium, expect } = require("@playwright/test");
const { LoginPage } = require("../login.spec");
let browser;
let page;
let loginPage;

Given("User navigates to the application", async () => {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  loginPage = new LoginPage(page);
  loginPage.gotoLoginPage();
});

When(
  "I enter the username {string} and password as {string}",
  async (username, password) => {
    loginPage.loginIntoApplication(username, password);
  }
);

When("I click on login button", async () => {
  loginPage.clickLoginButton();
});

Then("User should logged in successfully", async () => {
  loginPage.verifyUserInHomePage("PROFILE");
});
Then("Logout from the application", async () => {
  loginPage.logoutFromApplication();
});
