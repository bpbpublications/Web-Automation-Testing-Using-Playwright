// @ts-check
const { test, expect } = require('@playwright/test');

test('TF #01,TS #01 has title', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/blog');

  // Expect a title "to contain" a substring.
 await expect(page).toHaveTitle(/LambdaTest Blogs/);
});

test('TF #01,TS #02 get started link', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/blog');

  // Expect a title "to contain" a substring.
 await expect(page).toHaveTitle(/LambdaTest Blogs/);
});


test('TF #01,TS #03 has title', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/blog');

  // Expect a title "to contain" a substring.
 await expect(page).toHaveTitle(/LambdaTest Blogs/);
});

test('TF #01,TS #04 get started link', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/blog');

  // Expect a title "to contain" a substring.
 await expect(page).toHaveTitle(/LambdaTest Blogs/);
});
