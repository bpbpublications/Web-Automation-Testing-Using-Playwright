const { test, expect } = require("@playwright/test");
      test('Handling Shadow DOM', async ({page, }) => {
        await page.goto('https://www.lambdatest.com/selenium-playground/shadow-dom')
        await page.locator('input[name="username"]').fill('Kailash')
        await page.locator('input[type="email"]').nth(2).fill('test@qaautomationlabs.com')
        await page.locator('input[name="password"]').fill('qa@!test')
        await page.locator('input[name="confirm_password"]').fill('qa@!test')
      })