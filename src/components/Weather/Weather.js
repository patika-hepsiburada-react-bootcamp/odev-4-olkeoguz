import React from 'react';
import './Weather.scss';

const Weather = ({ selectedCity, weatherData, error, loading }) => {
  return (
    <div className='weatherContainer'>
      <div className='card'>
        <div className="card-body">
        <h2>{selectedCity}</h2>
        </div>
      </div>
    </div>
  );
};

export default Weather;
