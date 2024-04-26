import React from 'react';
import CarDetails from './CarDetails';

function CarList({ cars }) {
  return (
    <div className="car-grid">
      {cars.map((car, index) => (
        <CarDetails key={index} car={car} />
      ))}
    </div>
  );
}

export default CarList;