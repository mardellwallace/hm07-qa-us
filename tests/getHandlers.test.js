test('should return expected response body for warehouses endpoint', async () => {
	try {
	  const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
	  const data = await response.json(); // Get the response body
  
	  const expectedResponse = [
		{ name: "Everything You Need", workingHours: { start: 7, end: 23 } },
		{ name: "Fresh food", workingHours: { start: 8, end: 23 } },
		{ name: "Food City", workingHours: { start: 8, end: 21 } },
		{ name: "Big World", workingHours: { start: 8, end: 21 } }
	  ]; // Define expected response
	  
	  expect(data).toEqual(expectedResponse); // Check if the response matches
	} catch (error) {
	  console.error(error);
	}
  });