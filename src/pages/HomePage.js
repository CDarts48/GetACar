import React, { useState, useEffect } from 'react';
import CarList from '../components/CarList';
import CarFilter from '../components/CarFilter';
import Slideshow from '../components/Slideshow';
import { fetchCars } from '../api/carAPI';

function HomePage() {
  const [cars, setCars] = useState([]);
  const [makeFilter, setMakeFilter] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    fetchCars(makeFilter, setCars, setToken);
  }, [makeFilter]);

  const handleFilter = (filterValue) => {
    setMakeFilter(filterValue);
  };

  return (
    <div id='header'>
      <h1>Welcome to Get-A-Car</h1>
      <CarFilter onFilter={handleFilter} cars={cars} />
      {makeFilter ? <CarList cars={cars} /> : <Slideshow cars={cars} />}
    </div>
  );
}

export default HomePage;