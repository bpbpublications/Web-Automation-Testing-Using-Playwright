const { expect } = require("@playwright/test");
exports.LoginPage = class LoginPage {
  constructor(page, expect) {
    this.page = page;
    this.emailInput = page.locator("#input-email");
    this.passwordInput = page.locator("#input-password");
    this.loginButton = page.locator('//input[@value="Login"]');
  }
  async enterEmail(email) {
    await this.emailInput.fill(email);
  }
  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }
  async clickLoginButton() {
    await this.loginButton.click();
  }
};