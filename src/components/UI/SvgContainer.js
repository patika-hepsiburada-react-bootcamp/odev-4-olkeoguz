import React from 'react';
import PartlyCloudy from '../../assets/icons/PartlyCloudy.svg';
import Weather from '../../assets/icons/weather.svg';
import Sunny from '../../assets/icons/Sunny.svg';
import Rainy from '../../assets/icons/Rainy.svg';

const iconTypes = {
  Clouds: PartlyCloudy,
  weather: Weather,
  Clear:Sunny,
  Rain:Rainy,
};

const SvgContainer = ({ name,chosenWidth }) => {
  const src = iconTypes[name] || PartlyCloudy;
  return <img src={src} alt='Logo' width={chosenWidth ? chosenWidth : 200} height='auto' />;
};

export default SvgContainer;
