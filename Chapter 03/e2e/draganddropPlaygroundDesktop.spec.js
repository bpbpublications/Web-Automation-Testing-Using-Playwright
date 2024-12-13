const { test, expect } = require("@playwright/test");
test("LambdaTest Playground Example  ", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/drag-and-drop-demo");
//  Drag and drop using Method -01
const drag =await page.locator("//span[normalize-space()='Draggable 1']");
const drop = await page.locator('#mydropzone');
await drag.hover()
await page.mouse.down()

await drop.hover()
await page.mouse.up()
//  Drag and drop using Method -02
const dragElement =await page.locator("//span[normalize-space()='Draggable 2']");
const dropArea = await page.locator('#mydropzone');
await dragElement.dragTo(dropArea);
//Assertion to verify fields are drop successfully 
await expect(page.locator("#droppedlist", {hasText: 'Draggable 1'})).toBeVisible()
await expect(page.locator("#droppedlist", {hasText: 'Draggable 2'})).toBeVisible()

});