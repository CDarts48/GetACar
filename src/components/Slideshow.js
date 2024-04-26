import React, { useState, useEffect } from 'react';

function Slideshow({ cars }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((current + 1) % cars.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer); // Clean up on unmount
  }, [current, cars.length]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-around', 
      alignItems: 'flex-end',
      background: '#f0f0f0 url(/path/to/your/image.jpg) no-repeat center center fixed', 
      backgroundSize: 'cover'
    }}>
      {cars.length > 0 && cars[current] && (
        <>
          <div style={{ width: '45%', textAlign: 'center' }}>
            <h2>{cars[current].make} {cars[current].model}</h2>
            <img src={cars[current].image} alt={cars[current].make} style={{ width: '100%', objectFit: 'contain' }} />
          </div>
          <div style={{ width: '45%', textAlign: 'center', marginTop: '40px' }}>
            <div style={{ padding: '10px', marginBottom: '10px' }}>
              <h3>{cars[current].make}</h3>
              <p>{cars[current].model}</p>
              <p>Year: {cars[current].year}</p>
              <p>Price: {cars[current].price}</p>
              <p>MPG: {cars[current].mpg}</p>
              <p>Seats: {cars[current].seats}</p>
            </div>
            <img src={`${process.env.PUBLIC_URL}/images/${cars[current].make}.png`} alt={`${cars[current].make} logo`} style={{ width: '100%', objectFit: 'contain' }} />
          </div>
        </>
      )}
    </div>
  );
}

export default Slideshow;