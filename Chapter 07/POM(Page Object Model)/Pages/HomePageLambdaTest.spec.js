const { expect } = require("@playwright/test");
exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.myAccountLink = page.locator("text=My Account");
  }

  async verifyUserLoggedIn(homePageContentAfterLogin) {
    const homePageTextAfterLogin = await this.page
      .locator('//a[normalize-space()="Change your password"]')
      .textContent();
    expect(homePageTextAfterLogin).toContain(homePageContentAfterLogin);
  }
};
