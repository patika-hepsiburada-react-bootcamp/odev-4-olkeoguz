import React from 'react';
// import { ReactComponent as Cloudy } from '../../assets/icons/cloudy.svg';
import Cloudy from '../../assets/icons/cloudy.svg';
import Weather from '../../assets/icons/weather.svg';

const iconTypes = {
  cloudy: Cloudy,
  weather: Weather,
};

const SvgContainer = ({ name }) => {
  /* <Cloudy width={200} height={200}/> */

  const src = iconTypes[name];
  return <img src={src} alt='Logo' width={200} height='auto' />;
};

export default SvgContainer;
