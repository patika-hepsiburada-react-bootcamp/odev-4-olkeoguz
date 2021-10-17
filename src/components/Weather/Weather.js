import React, { useRef } from 'react';
import SvgContainer from './SvgContainer';
import './Weather.scss';

const Weather = ({ selectedCity, weatherData, error, loading }) => {
  const cardRef = useRef({});
  console.log(weatherData?.getCityByName);
  const {
    name,
    weather: {
      summary: { title, description },
      temperature: { actual, feelsLike, max, min },
      wind: { deg, speed },
    },
  } = weatherData ? weatherData.getCityByName : {};



    // cardRef.current.className = 'loading';
    // console.log(cardRef.current.classList('loading'));
    if(loading) {
      cardRef.current.className ="card loading";
    }
    console.log(cardRef.current.className);

  return (
    <div className='weatherContainer'>
      <div className='card' ref={cardRef}>
        {/* {loading && <div>Loading... </div>} */}
        {!loading && (
          <div className='card-body'>
            <div className='summary'>
              <div className='cityInfo'>
                <h3>{name}</h3>
                <p className='date'>{new Date().toLocaleDateString()}</p>
                <p className='desc'>{description}</p>
              </div>
              <div className='temp'>
                <h4 className='deg'>{actual}°</h4>
              </div>
            </div>
            <div className='logo'>
              <SvgContainer name='weather' width='100%' />
            </div>
            <div className='details'>
              <p>hello</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;

Weather.defaultProps = {
  weatherData: {
    getCityByName: {
      name: '',
      weather: {
        summary: {
          title: '',
          description: '',
        },
        temperature: {
          actual: '',
          feelsLike: null,
          max: null,
          min: null,
        },
        wind: {
          deg: null,
          speed: null,
        },
      },
    },
  },
};
