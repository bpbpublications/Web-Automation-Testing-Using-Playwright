const { test, expect } = require("@playwright/test");
test("LambdaTest Playground Example  ", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );
  //Select Multi Option from the Multi Select drop down
  
  await page.selectOption("#multi-select", ["Pennsylvania","Texas","Florida"]);

  await page.locator("#multi-select").selectOption(["Ohio", "Texas", "Florida"]);
});

//await page.locator("#multi-select").selectOption(["Ohio","Texas","Florida"], {label:'Pennsylvania'});

//await page.locator("#multi-select").selectOption({ value:'New York',label:"Texas"});
//.select_option(index=2,​​ value='May',​​ label='October')
//  await page.locator("#multi-select").selectOption({label:"Texas"});
//Assert checkbox is Checked
//expect(await page.getByTestId("isAgeSelected").isChecked()).toBeTruthy();

//Assert checkbox is Un-Checked again
//await page.getByTestId("isAgeSelected").click();
//expect(await page.getByTestId("isAgeSelected").isChecked()).toBeFalsy();

//const options = await page.locator("#select-demo option");
//await expect(options).toHaveCount(8)

//const options = await page.$$("#select-demo option");
//await expect(options.length).toBe(8)

//await page.selectOption("#select-demo", "Tuesday");


