import { test, expect } from '@playwright/test';
test('Online Registration Form', async ({ page }) => {
await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
const cickPrivacyCheckbox = page.locator("//label[@for='input-agree']");
await cickPrivacyCheckbox.click();
//To be checked
await expect(cickPrivacyCheckbox).toBeChecked();
const firstName = page.locator("//input[@id='input-firstname']");
//To be disabled
await expect(firstName).not.toBeDisabled();
const clickContinueBtn = page.locator("input[value='Continue']");
//To be Editable
await expect(firstName).toBeEditable();
//To be Enabled
await expect(clickContinueBtn).toBeEnabled();
const focus = "//input[@id='input-firstname']";
await page.locator(focus).focus();
//To be Focused
await expect(page.locator(focus)).toBeFocused();
const loginVisible = page.locator("aside[id='column-right'] a:nth-child(1)");
//To be Visible
await expect(loginVisible).toBeVisible();
await clickContinueBtn.click();
const warningMsg = page.locator("//div[contains(text(),'First Name must be between 1 and 32 characters!')]");
//To Contain Text
await expect(warningMsg).toContainText("First Name must be between 1 and 32 characters!");
const newsLetterSubscribe = page.locator("#input-newsletter-no");
//To Have Attribute
await expect(newsLetterSubscribe).toHaveAttribute("type", "radio");
const h1 = page.locator("//h1");
//To Have Class
await expect(h1).toHaveClass("page-title h3");
const formControl = page.locator("//input[@class='form-control']");
//To Have Count
await expect(formControl).toHaveCount(6);
const firstname = page.locator("#input-firstname");
//To Have CSS
await expect(firstname).toHaveCSS("display", "block");
const firstNameid = page.locator("//input[@name='firstname']");
//To Have ID
await expect(firstNameid).toHaveId("input-firstname");
//const firstname = page.locator("label[for='input-firstname']");
//To Have Text
const firstNamelable = page.locator("label[for='input-firstname']");
await expect(firstNamelable).toHaveText("First Name");
const newsletterYesRadio = page.locator("#input-newsletter-yes");
//To Have Value

await expect(newsletterYesRadio).toHaveValue("1");
//To have Title
await expect(page).toHaveTitle("Register Account");
//To have URL
await expect(page).toHaveURL(/register/);
});
test('Soft assertion Example ', async ({ page }) => {
    const clickContinueBtn = page.locator("input[value='Continue']");
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
    await clickContinueBtn.click();
    const warningMsg = page.locator("//div[contains(text(),'First Name must be between 1 and 32 characters!')]");
    await expect.soft(warningMsg).toContainText("First Name must be between 1 and 33 characters!");
    await expect(page).toHaveTitle("Register Account");
});