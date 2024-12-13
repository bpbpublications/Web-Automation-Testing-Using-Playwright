const { test, expect } = require("@playwright/test");
const fs = require('fs');

test.describe('Example to demonstrate handling the various Alert in Playwright',() => {
    test('Handling JS Alert - Standard Alert', async ({page}) => {
      await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')
      page.on('dialog', async (dialog) => {
        expect(dialog.message()).toEqual('I am an alert box!')
        await dialog.accept()
      })
    })
    test('Handling JS Alert - Confirm Alert With Cancel Button:', async ({page}) => {
      await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')
      page.on('dialog', async (dialog) => {
        expect(dialog.message()).toEqual('Press a button!')
        await dialog.dismiss()
      })
      await page.locator('[type="button"]').nth(1).click()
      await expect(page.locator('//p[@id="confirm-demo"]')).toHaveText('You pressed Cancel!')
    })
    test('Handling JS Alert - Confirm Alert with Ok Button', async ({page}) => {
      await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')
      page.on('dialog', async (dialog) => {
        expect(dialog.message()).toEqual('Press a button!')
        await dialog.accept()
      })
      await page.locator('[type="button"]').nth(1).click()
      await expect(page.locator('//p[@id="confirm-demo"]')).toHaveText('You pressed OK!')
    })
    test('Handling JS Alert - Enter Data in Input text in prompt:', async ({page}) => {
      await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')
      page.on('dialog', async (dialog) => {
        expect(dialog.message()).toEqual('Please enter your name')
        await dialog.accept('LambdaTest')
      })
      await page.locator('[type="button"]').nth(2).click()
      await expect(page.locator('//p[@id="prompt-demo"]')).toHaveText("You have entered 'LambdaTest' !")
    })
  })