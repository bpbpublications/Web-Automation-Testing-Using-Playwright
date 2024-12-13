const { test, expect } = require("@playwright/test");
const fs = require('fs');
test('Download a Single file and verifying Using Assertion', async ({page}) => {
  await page.goto('https://the-internet.herokuapp.com/download')
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('text=LambdaTest.txt').click(),
  ])
  const suggestedFileName = download.suggestedFilename()
  const filePath = 'download/' + suggestedFileName
  await download.saveAs(filePath)
  expect(fs.existsSync(filePath)).toBeTruthy()
})