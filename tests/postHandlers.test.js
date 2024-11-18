// eslint-disable-next-line no-undef
const config = require('../config');

test('POST request should return status 200', async () => {
    let actualStatuscode
    try {
        // Make the POST request to the API endpoint
        const response = await fetch(${config.API_URL}/api/v1/warehouses);
        // Assert that the status code is 200
        actualStatuscode = response.status
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    expect(actualStatuscode).toBe(200);
});