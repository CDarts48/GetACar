import React from 'react';
import CarDetails from './CarDetails';

function CarList({ cars }) {
  return (
    <div>
      {cars.map((car, index) => (
        <CarDetails key={index} car={car} />
      ))}
    </div>
  );
}

export default CarList;