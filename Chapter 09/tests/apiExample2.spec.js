import { test, expect } from '@playwright/test'
import { faker } from '@faker-js/faker';
const { DateTime } = require("luxon");

const randomFirstName = faker.person.firstName() 
const randomLastName = faker.person.lastName()
const randomNumber = faker.string.numeric(4)
const currentDate = DateTime.now().toFormat('yyyy-MM-dd')
const checkOutTime = DateTime.now().plus({ days: 5 }).toFormat('yyyy-MM-dd')

test.describe.parallel('API Testing', () => { 

  test('Create Booking', async ({ request }) => {
  const response = await request.post(`/booking`, {
      data: {
          "firstname": randomFirstName,
          "lastname": randomLastName,
          "totalprice": randomNumber,
          "depositpaid": true,
          "bookingdates": {
              "checkin": currentDate,
              "checkout": checkOutTime
          },
          "additionalneeds": "Lunch"
      }
  });
  console.log(await response.json());
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  const responseBody = await response.json()
  expect(responseBody.booking).toHaveProperty("firstname", randomFirstName);
  expect(responseBody.booking).toHaveProperty("lastname", randomLastName);
  });
})