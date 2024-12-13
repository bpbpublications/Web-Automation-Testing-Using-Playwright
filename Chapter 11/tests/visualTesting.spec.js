// @ts-check
const { test, expect } = require('@playwright/test');

test('Basic Visual Testing', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveScreenshot("visual-partial.png")
});

test('Take the visual of full page', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveScreenshot("visual-full.png",{fullPage:true})
});

test('Take visual of full page with masking the button', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveScreenshot("visual-mask.png",{fullPage:true,mask:[page.getByText('Get started')],})
});

test('Take visual with masking top section of the site', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveScreenshot("visual-mask-top-section.png",{mask:[page.getByText('Get started')],})
});


test('Take visual with maxDiffPixels', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });
});