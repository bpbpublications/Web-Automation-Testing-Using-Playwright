const { test, expect } = require("@playwright/test");
test("mocks a fruit and doesn't call api", async ({ page }) => {
  // Mock the api call before navigating
  await page.route("*/**/api/v1/fruits", async (route) => {
    const json = [
      { name: "Lucuma", id: 11 },
      { name: "Guava", id: 12 },
      { name: "Kiwi", id: 13 },
      { name: "Peach", id: 14 },
      { name: "Fig", id: 15 },
    ];
    await route.fulfill({ json });
  });
  // Go to the page
  await page.goto("https://demo.playwright.dev/api-mocking");
  // Assert that the Raspberries fruit is visible
  await expect(page.getByText("Guava")).toBeVisible();
});