// eslint-disable-nextline no-undef
const config = require('../config');

test('should return status code 200', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualStatus = response.status;
	} catch (error) {
		console.error(error);

	}
	expect(actualStatus).toBe(200);