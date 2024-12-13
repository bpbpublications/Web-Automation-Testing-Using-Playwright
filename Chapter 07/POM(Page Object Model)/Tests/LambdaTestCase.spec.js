const { test, expect } = require('@playwright/test');
const { LoginPage } = require("../Pages/LoginPageLambdaTest.spec");
const { HomePage } = require("../Pages/HomePageLambdaTest.spec");
const { SearchPage } = require("../Pages/SearchProductLambdaTest.spec");
const {ProductCartPage} = require("../Pages/AddProductIntoCartLambdaTest.spec");
import testData from "../testData/testData.json"

test("Login and Navigate to My Account", async ({ page }) => {
  const Login = new LoginPage(page);
  const homePage = new HomePage(page);
  const searchPage = new SearchPage(page);
  const productIntoCart = new ProductCartPage(page);
  // Open the website
  await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
  // Perform login
  await Login.enterEmail(testData.data[0].email);
  await Login.enterPassword(testData.data[0].password);
  await Login.clickLoginButton();

  // Validate user logged-in and Can Add/Delete the Product
  await homePage.verifyUserLoggedIn(testData.data[0].homePageMessage);
  await searchPage.selectTheCategory();
  await searchPage.searchForTheProduct(testData.data[0].searchProduct);
  await productIntoCart.addProductIntoCart(testData.data[0].addProductMessage);
  await productIntoCart.removeProductIntoCart();
});
