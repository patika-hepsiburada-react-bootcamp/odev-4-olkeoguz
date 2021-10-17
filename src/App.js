import { useState } from 'react';
import CityControls from './components/Controls/CityControls';
import Weather from './components/Weather/Weather';

import { useQuery } from '@apollo/client';
import { WEATHER_QUERY } from './queries/queries';

import './App.scss';
import SvgContainer from './components/UI/SvgContainer';

function App() {
  const [selectedCity, setSelectedCity] = useState('istanbul');

  const { loading,data } = useQuery(WEATHER_QUERY, {
    variables: { name: selectedCity },
  });

  return (
    <div className='App'>
      <div className='heading'>
        <SvgContainer name="weather" chosenWidth={100}/>
        <h1>What's the weather like ?</h1>
      </div>
      <div className='root'>
        <CityControls
          setSelectedCity={setSelectedCity}
          selectedCity={selectedCity}
        />
        <Weather
          selectedCity={selectedCity}
          weatherData={data}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default App;
