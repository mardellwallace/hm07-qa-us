// eslint-disable-next-line no-undef
const config = require('../config');

test('Put request code should be 200', async () => {
  let actualGetresponsecode;
  try {
      const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
      actualPutresponsecode = response.status
  } catch (error) {
      console.error(error);
  }

  expect(actualPutresponsecode).toBe(200);
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