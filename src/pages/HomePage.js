import React from 'react';
import CarList from './CarList';
import CarFilter from './CarFilter';

function HomePage() {
  // Replace this with your actual data
  const cars = [
    { make: 'Toyota', model: 'Camry', year: 2020, price: 24000 },
    { make: 'Honda', model: 'Accord', year: 2021, price: 26000 },
    // Add more cars as needed
  ];

  const handleFilter = (filterValue) => {
    // Implement your filter logic here
  };

  return (
    <div>
      <h1>Welcome to GetACar</h1>
      <CarFilter onFilter={handleFilter} />
      <CarList cars={cars} />
    </div>
  );
}

export default HomePage;