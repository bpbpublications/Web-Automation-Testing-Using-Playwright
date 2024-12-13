const { test, expect } = require("@playwright/test");
var token;
test("Generate Token", async ({ request }) => {
  const response = await request.post('/auth', {
    data: {
      username: "admin",
      password: "password123",
    },
  });
  console.log(await response.json());
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  token = responseBody.token;
  console.log("New Token is: " + token);
});

test("Used token to Update the Data", async ({ request }) => {
  const updateRequest = await request.put('/booking/1', {
    headers: {
      Accept: "application/json",
      Cookie: `token=${token}`,
    },
    data: {
      firstname: "Kailash",
      lastname: "Pathak",
      totalprice: 121,
      depositpaid: true,
      bookingdates: {
        checkin: "2024-06-01",
        checkout: "2024-06-15",
      },
      additionalneeds: "Dinner",
    },
  });
  expect(updateRequest.ok()).toBeTruthy();
  expect(updateRequest.status()).toBe(200);
  const updatedResponseBody = await updateRequest.json();
  expect(updatedResponseBody).toHaveProperty("firstname", "Kailash");
  expect(updatedResponseBody).toHaveProperty("lastname", "Pathak");
  expect(updatedResponseBody).toHaveProperty("totalprice", 121);
});