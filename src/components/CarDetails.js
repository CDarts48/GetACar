import React from 'react';

function CarDetails({ car }) {
  return (
    <div>
      <h1>{car.make} {car.model}</h1>
      <p>Year: {car.year}</p>
      <p>Price: {car.price}</p>
      <img src={car.image} alt={`${car.make} ${car.model}`} />
    </div>
  );
}

export default CarDetails;