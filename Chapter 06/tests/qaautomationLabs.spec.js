import { test, expect } from '@playwright/test';
test('QAAutomationLabs.com', async ({ page }) => { 
  await page.goto('https://qaautomationlabs.com/'); 
  await page.locator('.hamburger').click(); 
  await page.getByRole('link', { name: '/ About' }).click(); 
  await page.locator('.hamburger').click(); 
  await page.getByRole('link', { name: '/ Courses' }).click(); 
  await page.getByRole('heading', { name: 'Starting with Cypress: A' }).click(); 
})