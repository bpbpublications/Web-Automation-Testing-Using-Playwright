const { test, expect } = require("@playwright/test");  
test('Normal iframe Enter data in field which inside the iframe', async ({page}) => {
await page.goto('https://www.lambdatest.com/selenium-playground/iframe-demo/')
const textarea = await page.frameLocator('[src="./contant"]').locator('//div[@class="rsw-ce"]')
await textarea.fill('qaautomationlabs.com')
await expect(textarea).toHaveText('qaautomationlabs.com')
})