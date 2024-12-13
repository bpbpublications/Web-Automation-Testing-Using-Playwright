const { chromium, expect } = require("@playwright/test");
let browser
exports.SauceLoginPage = class SauceLoginPage {
  constructor(page, expect) {
    this.page = page;
    this.username = this.page.locator('[data-test="username"]');
    this.password = this.page.locator('[data-test="password"]');
    this.login_button = this.page.locator('[data-test="login-button"]');
    this.addCart_button = this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.homePage_Content = this.page.locator('//span[@class="title"]');
    this.removeThe_Product = this.page.locator('[data-test="remove-sauce-labs-backpack"]');
    this.humBurger = this.page.locator('[id="react-burger-menu-btn"]');
    this.addCart_button = this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.logOut_button = this.page.locator('[id="logout_sidebar_link"]');
  }
  async gotoLoginPage() {
    await this.page.goto("https://www.saucedemo.com/");
  }
  async loginIntoApplication(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
  }
  async clickLoginButton() {
    await this.login_button.click();
  }
  async addProductToCart() {
    await this.addCart_button.click();
  }
  async removeProductFromCart() {
    await this.removeThe_Product.click();
  }
  async clickOnHamburgerMenu() {
    await this.humBurger.click();
  }
  async verifyUserInHomePage(homeContent) {
    const text = await this.homePage_Content.textContent();
    expect(text).toContain(homeContent);
  }
  async logoutFromApplication() {
    await this.logOut_button.click();
  }
  async userInloginPage() {
    await expect(this.login_button).toBeVisible()
    //await expect(this.page.getByText('Accepted usernames')).toBeVisible();

    //await expect(this.page.locator('[data-test="login-credentials"]')).toContainText('Accepted usernames are:');
    //await expect().toContain("Accepted usernames");
   // await expect(this.login_button).toBeVisible() 
  }
};