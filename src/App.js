import { useState } from 'react';
import CityControls from './components/Controls/CityControls';
import Weather from './components/Weather/Weather';
import useGetWeather from './helpers/useGetWeather';

import './App.scss';

function App() {
  const [selectedCity, setSelectedCity] = useState('istanbul');

  const { data: weatherData, loading, error } = useGetWeather(selectedCity);

  console.log(weatherData?.getCityByName);

  return (
    <div className='App'>
      <div className='root'>
        <CityControls
          setSelectedCity={setSelectedCity}
          selectedCity={selectedCity}
        />
        <Weather
          selectedCity={selectedCity}
          weatherData={weatherData}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
}

export default App;
