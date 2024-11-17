test('should return status code 201 for POST request', async () => {
	const requestBody = {
	  // Define the request body according to your API Docs
	};
  
	try {
	  const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(requestBody)
	  });
  
	  const actualStatus = response.status;
	  expect(actualStatus).toBe(201); // Assuming 201 is the expected status code
	} catch (error) {
	  console.error(error);
	}
  });