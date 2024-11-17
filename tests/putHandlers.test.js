test('should return status code 200 for PUT request', async () => {
	const requestBody = {
	  // Define the request body according to your API Docs
	};
  
	try {
	  const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		method: 'PUT',
		headers: {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(requestBody)
	  });
  
	  const actualStatus = response.status;
	  expect(actualStatus).toBe(200); // Assuming 200 is the expected status code
	} catch (error) {
	  console.error(error);
	}
  });