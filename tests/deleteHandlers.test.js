// eslint-disable-next-line no-undef
const config = require('../config');

test('', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
			method: 'DELETE',
		});
	} catch (error) {
		console.error(error);
	}
});
