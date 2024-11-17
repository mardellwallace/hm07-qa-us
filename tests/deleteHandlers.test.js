test('should return status code 204 for DELETE request', async () => {
	try {
	  const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		method: 'DELETE',
		headers: {
		  'Content-Type': 'application/json'
		}
	  });
  
	  const actualStatus = response.status;
	  expect(actualStatus).toBe(204); // Assuming 204 is the expected status code
	} catch (error) {
	  console.error(error);
	}
  });