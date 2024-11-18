// eslint-disable-next-line no-undef
const config = require('../config');

test('Get request code should be 200', async () => {
  let actualDeleteresponsecode;
  try {
      const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
      actualDeleteresponsecode = response.status
  } catch (error) {
      console.error(error);
  }

  expect(actualDeleteresponsecode).toBe(200);
});


test('Response body should return the first warehouse with the correct name', async () => {
  let actualResponseBody;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
    actualResponseBody = await response.json(); // Ensure you await the response
  } catch (error) {
    console.error(error);
  }

  // Assert the name of the first warehouse in the response
  expect(actualResponseBody[0].name).toBe("Everything You Need");
});