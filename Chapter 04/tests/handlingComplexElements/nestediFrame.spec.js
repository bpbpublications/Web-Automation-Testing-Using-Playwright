const { test, expect } = require("@playwright/test");
test('Nested iframe ', async ({page}) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/nested-frames/')

    //Top iframe
    const topframebody = await page.frameLocator('[name="frame-top"]').locator('body')
    await expect(topframebody).toHaveText('Top')

    //Bottom iframe
    const bottomframe = await page.frameLocator('[name="frame-bottom"]')
    const middleframebody = await bottomframe.frameLocator('[name="frame-middle"]').locator('body')
    await expect(middleframebody).toHaveText('Middle')

    const rightframebody = await bottomframe.frameLocator('[name="frame-right"]').locator('body')
    await expect(rightframebody).toHaveText('Right')

    const bottomframebody = await bottomframe.frameLocator('[name="frame-left"]').locator('body')
    await expect(bottomframebody).toHaveText('Left')
  })