export const fetchCars = async (makeFilter, setCars, setToken) => {
  try {
      const url = makeFilter ? `https://exam.razoyo.com/api/cars?make=${makeFilter}` : 'https://exam.razoyo.com/api/cars';
      const response = await fetch(url);
      console.log('fetchCars response:', response); // Log the response

      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('fetchCars data:', data); // Log the data

      setCars(data.cars);
      setToken(response.headers.get('Your-Token')); // Save the token from the response headers
  } catch (error) {
      console.error('Error fetching cars:', error);
  }
};

export const fetchCarDetails = async (id, token, setSelectedCar) => {
  try {
      const response = await fetch(`https://exam.razoyo.com/api/cars/${id}`, {
          headers: {
              'Your-Token': token // Include the token in the request headers
          }
      });
      console.log('fetchCarDetails response:', response); // Log the response

      const data = await response.json();
      console.log('fetchCarDetails data:', data); // Log the data

      setSelectedCar(data.car);
  } catch (error) {
      console.error('Error fetching car details:', error);
  }
};
