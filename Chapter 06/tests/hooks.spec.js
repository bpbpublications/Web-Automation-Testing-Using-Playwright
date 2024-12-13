const { test } = require("@playwright/test");
test.beforeAll(async () => {
  console.log("Run before ALL Test ");
});
test.beforeEach(async ({}) => {
  console.log("Run Before Each Test Step");
});
test.afterAll(async ({}) => {
  console.log("Run After all test");
});
test.afterEach("do this after each test ends", async ({}) => {
  console.log("Run After Each Test Step");
});
test("Test Case 1", async ({}) => {
  console.log("This is My FIRST Test Case");
});
test("Test Case 2", async ({}) => {
  console.log("This is My SECOND Test Case");
});