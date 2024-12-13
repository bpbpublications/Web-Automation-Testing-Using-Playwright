import { test, expect } from '@playwright/test'

var userId;
test.describe.parallel('API Testing', () => {

  test('GET Request To verify Response Status', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/3');
    expect(response.status()).toBe(200)
  })

  test('GET Request With Getting User Detail And Verify it', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2');
    const responseBody = JSON.parse(await response.text())
    expect(response.status()).toBe(200)
    expect(responseBody.data.id).toBe(2)
    expect(responseBody.data.first_name).toBe('Janet')
    expect(responseBody.data.last_name).toBe('Weaver')
    expect(responseBody.data.email).toBeTruthy()
  })

  test('POST Request To Generate New Record In DB', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users/', {
      data: {
        name: 'Kailash',
        job: 'QA Manager',
      },
    })
    const responseBody = JSON.parse(await response.text())
    expect(responseBody.createdAt).toBeTruthy()
    userId =responseBody.id;
    expect(responseBody.id).toBe(userId)
    expect(responseBody.name).toBe('Kailash');
    expect(responseBody.job).toBe('QA Manager');
  })

  test('POST Request - Login', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users/login', {
      data: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      },
    })
    const responseBody = JSON.parse(await response.text())
    expect(response.status()).toBe(201)
  })

  test('PUT Request - Update The Existing User', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/2', {
      data: {
        name: 'Harry',
        job: 'QA Architect',
      },
    })
    const responseBody = JSON.parse(await response.text())
    expect(response.status()).toBe(200)
    expect(responseBody.name).toBe('Harry')
    expect(responseBody.job).toBe('QA Architect')
    expect(responseBody.updatedAt).toBeTruthy()
  })

  test('DELETE Request - Delete User', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/'+userId)
    console.log('Print the user id before delete',userId)
    expect(response.status()).toBe(204)
  })
})
