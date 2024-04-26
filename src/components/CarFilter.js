import React, { useState } from 'react';

function CarFilter({ onFilter }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMake, setSelectedMake] = useState('Select A Make');

  const handleChange = (make) => {
  setSelectedMake(make);
  if (make === 'Select A Make') {
    window.location.reload();
  } else {
    onFilter(make);
  }
};

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const makes = ['Select A Make', 'Honda', 'Toyota', 'Ford', 'Ferrari'];

  return (
    <div className="dropdown" onClick={toggleDropdown}>
      <div className="dropdown-header">{selectedMake}</div>
      {isOpen && (
        <ul className="dropdown-list">
          {makes.map((make, index) => (
            <li key={index} className={`dropdown-item dropdown-item-${make}`} onClick={() => handleChange(make)}>
              {make}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CarFilter;