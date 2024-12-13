// @ts-check
const { test, expect } = require('@playwright/test');
test("Search the text 'Palm Treo Pro  ", async ({ page }) => {
await page.goto('https://ecommerce-playground.lambdatest.io/');
await page.locator("[title='Shop by Category']").first().click();
await page.locator("span.title", {hasText: 'Desktops and Monitors' }).click()
await page.locator("div.carousel-item.active > img[title='Palm Treo Pro']").click()
await page.locator("[title='Add to Cart']").first().click();
await page.locator("a.btn.btn-primary.btn-block",{hasText: 'View Cart'}).click()
await expect(page.locator("td.text-left", {hasText: 'Palm Treo Pro'})).toBeVisible()
await expect(page.locator("div[class$='flex-nowrap'] > input")).toHaveValue("1")
});