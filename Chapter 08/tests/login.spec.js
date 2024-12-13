const { chromium, expect } = require("@playwright/test");
exports.LoginPage = class LoginPage {
  constructor(page, expect) {
    this.page = page;
    this.username_field = this.page.getByPlaceholder("Email");
    this.password_field = this.page.getByPlaceholder("Password");
    this.login_button = this.page.locator('[data-id="submit-login-btn"]');
    this.drop_down = this.page.locator('[alt="DropDown Button"]');
    this.log_out = this.page.locator('[data-id="nav-dropdown-logout"]');
  }
  async gotoLoginPage() {
    await this.page.goto("https://talent500.co/auth/signin");
  }
  async loginIntoApplication(username, password) {
    await this.username_field.fill(username);
    await this.password_field.fill(password);
    await this.login_button.click();
  }
  async clickLoginButton() {
    await this.login_button.click();
  }
  async verifyUserInHomePage(homeContent) {
    const text = await this.page.locator('//div[@id="progress-bar"]').textContent();
    expect(text).toContain(homeContent);
  }
  async logoutFromApplication() {
    await this.drop_down.click();
    await this.log_out.click();
  }
};
