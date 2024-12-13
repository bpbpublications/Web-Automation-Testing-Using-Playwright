const { Given, When, Then } = require("@cucumber/cucumber");
const { chromium, expect } = require("@playwright/test");
const { SauceLoginPage } = require("../saucelogin.spec");
let browser;
let page;
let loginPage;

Given("Open the URL", async () => {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  loginPage = new SauceLoginPage(page);
  loginPage.gotoLoginPage();
});
When(
  "User enter the username {string} and password {string}",
  async (username, password) => {
    loginPage.loginIntoApplication(username, password);
  }
);
When("User click on login button", async () => {
  loginPage.clickLoginButton();
});

When("User add product into the cart", async () => {
  loginPage.addProductToCart();
});
When("User remove the product from the cart", async () => {
  loginPage.removeProductFromCart();
});

Then("User logged in successfully", async () => {
  loginPage.verifyUserInHomePage("Products");
});
When("User click on HamburgerMenu", async () => {
  loginPage.clickOnHamburgerMenu();
});
Then("Logout from the site", async () => {
  loginPage.logoutFromApplication();
});
Then("User should be in login page", async () => {
  loginPage.userInloginPage();
  await browser.close();
});
