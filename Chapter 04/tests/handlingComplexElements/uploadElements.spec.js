const { test, expect } = require("@playwright/test");
  test('Upload a Single file with asseration', async ({page}) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/upload-file-demo')
    await page.setInputFiles('//input[@id="file"]', 'uploadFile/uploadFile1.png')
    await expect(page.locator('//div[@id="error"]')).toContainText('File Successfully Uploaded')
  })
  test('Upload Multiple files with asseration', async ({page}) => {
    await page.goto('http://blueimp.github.io/jQuery-File-Upload/')
    await page.setInputFiles('input[type="file"]', ['uploadFile/uploadFile1.png','uploadFile/uploadFile2.png'])
    await expect(page.locator('p.name').nth(0)).toHaveText('uploadFile1.png')
    await expect(page.locator('p.name').nth(1)).toHaveText('uploadFile2.png')
  })