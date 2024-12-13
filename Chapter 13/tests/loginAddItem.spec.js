// @ts-check
const { test } = require("@playwright/test");
const playwright = require("@playwright/test");

test("Verify ChatGPT Generated Code for Login Page", async ({ page }) => {
  const browser = await playwright.chromium.launch();

// Open the URL
await page.goto('https://www.saucedemo.com/');
  
// Fill in the username
await page.fill('input#user-name', 'standard_user');

// Fill in the password
await page.fill('input#password', 'secret_sauce');

// Click on the login button
await page.click('input#login-button');

// Click on the "ADD TO CART" button for the Sauce Labs Backpack
await page.click('button[name="add-to-cart-sauce-labs-backpack"]');

// Click on the shopping cart link
await page.click('.shopping_cart_link');

// Verify the item is in the shopping cart
const itemInCart = await page.$('div.inventory_item_name');
const itemText = await itemInCart.innerText();

if (itemText === 'Sauce Labs Backpack') {
  console.log('Test Passed: Sauce Labs Backpack is in the shopping cart.');
} else {
  console.log('Test Failed: Sauce Labs Backpack is not in the shopping cart.');
}

// Add a small delay to see the result before closing
await page.waitForTimeout(5000);

// Close the browser
await browser.close();
});