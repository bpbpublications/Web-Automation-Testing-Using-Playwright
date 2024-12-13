const { expect } = require("@playwright/test");
exports.ProductCartPage = class ProductCartPage {
  constructor(page) {
    this.page = page;
    this.hover = page.locator(".lazy-load");
    this.clickFirstElement = page.locator(".product-action > button");
    this.viewCart = page.locator("text=View Cart");
    this.addedProduct = page.locator("#content >> text=iPod Touch");
    this.cartPopup = page.locator('div[role="alert"]');
    this.removeProduct = page.locator('//button[@class="btn btn-danger"]');
    this.message = page.locator(
      '(//p[contains(text(),"Your shopping cart is empty!")])[2]'
    );
  }
  async addProductIntoCart(successMsg) {
    await this.hover.first().hover();
    await this.clickFirstElement.first().click();
    await expect(this.cartPopup).toContainText('Success: You have added iPod Touch to your shopping cart!')
    await this.viewCart.click();
    await expect(this.addedProduct).toBeVisible();
  }
  async removeProductIntoCart() {
    await this.removeProduct.click();
    await expect(this.message).toBeVisible();
  }
};