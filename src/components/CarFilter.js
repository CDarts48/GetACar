import React, { useState } from 'react';

function CarFilter({ onFilter }) {
  const [filter, setFilter] = useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
    onFilter(event.target.value);
  };

  return (
    <div>
      <label htmlFor="filter">Filter:</label>
      <input id="filter" value={filter} onChange={handleChange} />
    </div>
  );
}

export default CarFilter;