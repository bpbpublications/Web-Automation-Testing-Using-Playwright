const { test, expect } = require("@playwright/test");
test("Mock Tags Data", async ({ page }) => {
  // Mock the api call before navigating
  await page.route("https://conduit.productionready.io/api/tags", async (route) => {
    const json = 
      {
        "tags":[
           "Cypress",
           "Playwright",
           "Japan test community"
        ]
     };
    await route.fulfill({ json });
  });

  await page.goto("https://demo.realworld.io/");
  // Assert that the Japan test community  is visible
  await expect(page.getByText("Japan test community")).toBeVisible();

  
});
test("Mock Articles Data", async ({ page }) => {
  // Mock the api call before navigating
  await page.route("https://conduit.productionready.io/api/articles?limit=10&offset=0", async (route) => {
    const json = 
    {
      "articles":[
         {
            "title":"Hi qaautomationlabs.com",
            "slug":"Hi - qaautomationlabs.com",
            "body":"qaautomationlabs",
            "createdAt":"2020-09-26T03:18:26.635Z",
            "updatedAt":"2020-09-26T03:18:26.635Z",
            "tagList":[
              
            ],
            "description":"SLASSCOM QUALITY SUMMIT 2023",
            "author":{
               "username":"Kailash Pathak",
               "bio":null,
               "image":"https://static.productionready.io/images/smiley-cyrus.jpg",
               "following":false
            },
            "favorited":false,
            "favoritesCount":1000
         }
      ],
      "articlesCount":500
   };
    await route.fulfill({ json });
  });
  // Go to the page
  await page.goto("https://demo.realworld.io/");
  // Assert that the Hi qaautomationlabs.com  is visible
  await expect(page.getByText("Hi qaautomationlabs.com")).toBeVisible();
});