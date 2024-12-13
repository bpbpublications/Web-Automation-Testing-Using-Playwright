const { expect } = require("@playwright/test");
exports.LoginPage = class LoginPage {
  constructor(page, expect) {
    this.page = page;
    this.username_field = page.getByPlaceholder("Email");
    this.password_field = page.getByPlaceholder("Password");
    this.login_button = page.locator('[data-id="submit-login-btn"]');
    this.drop_down = page.locator('[alt="DropDown Button"]');
    this.log_out = page.locator('[data-id="nav-dropdown-logout"]');
  }
  async openLoginPage() {
    await this.page.goto("https://talent500.co/auth/signin");
  }
  async loginIntoSite(username, password) {
    await this.username_field.fill(username);
    await this.password_field.fill(password);
    await this.login_button.click();
  }
  async homePageConetnt(homeContent) {
    const text = await this.page.locator('//a[contains(text(),"Discover jobs")]').textContent();
    expect(text).toContain(homeContent);
  }
  async logoutFromSite() {
    await this.drop_down.click();
    await this.log_out.click();
  }
  async homePageConetntAfterLogout(homeContentAfterLogout) {
    const homePageTextAfterLogout = await this.page.locator('//h2[normalize-space()="Opportunities favor the bold"]').textContent();
    expect(homePageTextAfterLogout).toContain(homeContentAfterLogout);
  }
};