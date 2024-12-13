const { expect } = require("@playwright/test");
exports.SearchPage = class SearchPage {
  constructor(page) {
    this.page = page;
    this.categoryAllCategories = page.locator(
      '#entry_217822 button:has-text("All Categories")'
    );
    this.categorySoftware = page.locator("#entry_217822 >> text=Software");
    this.searchField = page.getByRole("textbox", {
      name: "Search For Products",
    });
    this.searchButton = page.locator("text=Search");
    this.hover = page.locator(".lazy-load");
  }
  async selectTheCategory() {
    await this.categoryAllCategories.click();
    await this.categorySoftware.click();
  }
  async searchForTheProduct(product) {
    await this.searchField.fill(product);
    await this.searchButton.click();
  }
};
