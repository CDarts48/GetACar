import React, { useState, useEffect } from 'react';

function App() {
    const [cars, setCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);
    const [makeFilter, setMakeFilter] = useState('');
  
    useEffect(() => {
      fetchCars();
    }, [makeFilter]);

    const fetchCars = async () => {
        try {
            const response = await fetch(`https://exam.razoyo.com/api/cars?make=${makeFilter}`);
            const data = await response.json();
            setCars(data.cars);
        } catch (error) {
            console.error('Error fetching cars:', error);
          }
    };
    
    const fetchCarDetails = async (id) => {
        try {
            const response = await fetch(`https://exam.razoyo.com/api/cars/${id}`);
            const data = await response.json();
            setSelectedCar(data.car);
          } catch (error) {
            console.error('Error fetching car details:', error);
          }
    };
    
    const handleCloseDetails = () => {
        setSelectedCar(null);
    };
    const handleFilterChange = (event) => {
        setMakeFilter(event.target.value);
    };
    
    return (
        <div>
          <h1>Car Catalog</h1>
          <select onChange={handleFilterChange}>
            <option value="">All Makes</option>
            {/* Render options for all available car makes */}
            {cars.map(car => (
              <option key={car.make} value={car.make}>{car.make}</option>
            ))}
          </select>
          <ul>
            {/* Render the list of cars */}
            {cars.map(car => (
              <li key={car.id}>
                {car.name}
                <button onClick={() => fetchCarDetails(car.id)}>Open</button>
                {selectedCar && selectedCar.id === car.id && (
                  <div>
                    <p>Details:</p>
                    <p>{selectedCar.details}</p>
                    <button onClick={handleCloseDetails}>Close</button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      );
}
        
export default App;