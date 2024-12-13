const { test, expect } = require("@playwright/test");
const fs = require('fs');
test('Download Multiple files and Apply Asseration', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/download')
    const downloadFile = ['test.xlsx', 'sample.txt']
    for (const fileName of downloadFile) {
      const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.locator(`text=${fileName}`).click(),
      ])
      const suggestedFileName = download.suggestedFilename()
      const filePath = 'download/' + suggestedFileName
      await download.saveAs(filePath)
      expect(fs.existsSync(filePath)).toBeTruthy()
    }
  })