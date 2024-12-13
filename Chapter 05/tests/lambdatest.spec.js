import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.getByRole('textbox', { name: 'Search For Products' }).click();
  await page.getByRole('textbox', { name: 'Search For Products' }).fill('apple');
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.locator('#mz-product-grid-image-34-212469')).toBeVisible();
  await page.locator('#mz-product-grid-image-34-212469').click();
  await expect(page.locator('h1')).toContainText('iPod Shuffle');
  await expect(page.getByRole('spinbutton', { name: 'Qty' })).toHaveValue('1');
});