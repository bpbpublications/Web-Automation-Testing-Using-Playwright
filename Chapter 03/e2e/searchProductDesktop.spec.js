const { test, expect } = require("@playwright/test");
test("Search the text 'Palm Treo Pro  ", async ({ page }) => {
await page.goto('https://ecommerce-playground.lambdatest.io/');
await page.locator("span.title", {hasText: 'Mega Menu' }).hover()
await page.locator("a[title=Desktop]").click();
await page.locator("div.carousel-item.active > img[title='Palm Treo Pro']").click()
await page.locator("#container button[title='Add to Cart']").click();
await page.locator("a.btn.btn-primary.btn-block",{hasText: 'View Cart'}).click()
await expect(page.locator("td.text-left", {hasText: 'Palm Treo Pro'})).toBeVisible()
await expect(page.locator("div[class$='flex-nowrap'] > input")).toHaveValue("1")
});