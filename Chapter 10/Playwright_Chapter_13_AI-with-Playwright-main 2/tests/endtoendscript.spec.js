// @ts-check
const { test } = require("@playwright/test");
const playwright = require("@playwright/test");

test("Verify ChatGPT Generated Code for Login Page New", async ({ page }) => {
  const browser = await playwright.chromium.launch();

  // Step 1: Open the URL
  await page.goto("https://www.saucedemo.com/");

  // Step 2: Login
  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");

  // Step 3: Add "Sauce Labs Fleece Jacket" to cart
  await page.click("text=Sauce Labs Fleece Jacket");
  await page.click("text=Add to cart");

  // Step 4: Click on shopping-cart icon
  await page.click(".shopping_cart_link");

  // Step 5: Verify the product in the cart
  const productInCart = await page.innerText(".inventory_item_name");
  if (productInCart === "Sauce Labs Fleece Jacket") {
    console.log("Product verified in cart: Sauce Labs Fleece Jacket");
  } else {
    console.error("Product verification failed in cart.");
  }

  // Step 6: Click on checkout button
  await page.click("#checkout");

  // Step 7: Fill checkout information
  await page.fill("#first-name", "John");
  await page.fill("#last-name", "Parker");
  await page.fill("#postal-code", "201010");
  await page.click("#continue");

  // Step 8: Verify the product on the checkout page
  const productInCheckout = await page.innerText(".inventory_item_name");
  if (productInCheckout === "Sauce Labs Fleece Jacket") {
    console.log("Product verified in checkout: Sauce Labs Fleece Jacket");
  } else {
    console.error("Product verification failed in checkout.");
  }

  // Step 9: Click on Finish button
  await page.click("#finish");

  // Step 10: Verify the text "Thank you for your order!"
  const thankYouText = await page.innerText(".complete-header");
  if (thankYouText === "THANK YOU FOR YOUR ORDER") {
    console.log("Order completion message verified: Thank you for your order!");
  } else {
    console.error("Order completion message verification failed.");
  }

  // Step 11: Click on Back Home button
  await page.click("#back-to-products");

  // Step 12: Click on hamburger menu
  await page.click("#react-burger-menu-btn");

  // Step 13: Click on logout
  await page.click("#logout_sidebar_link");

  // Step 14: Verify Login button is visible
  const loginButtonVisible = await page.isVisible("#login-button");
  if (loginButtonVisible) {
    console.log("Login button is visible after logout.");
  } else {
    console.error("Login button is not visible after logout.");
  }

  // Close browser
  await browser.close();
});