import React, { useEffect, useState } from 'react';
import ArrowDown from './ArrowDown';
import ArrowUp from './ArrowUp';
import { cities } from '../../data/cities';

import './CityControls.scss';

const City = ({ setSelectedCity, selectedCity }) => {
  const [dropDownActive, setDropDownActive] = useState(false);
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState(cities);

  useEffect(() => {
    if (!!search.length) {
      setSuggestions(() => cities.filter((p) => p.name.includes(search)));
    } else {
      setSuggestions(cities);
    }
  }, [search]);

  const changeCity = (name) => {
    setSelectedCity(name);
    setSearch("");
    setDropDownActive(false);
  };
  return (
    <div className='dropdownContainer'>
      <div className='select-box'>
        <div
          className={['options-container', dropDownActive && 'active'].join(
            ' '
          )}
        >
          {suggestions.map((city) => (
            <div className='option' key={city.plate}>
              <label
                className={city.name === selectedCity ? 'selectedCity' : ''}
              >
                <input
                  type='radio'
                  className='radio'
                  id='cities'
                  name={city.name}
                  checked={selectedCity === city.name}
                  onChange={() => changeCity(city.name)}
                />
                {city.name}
              </label>
            </div>
          ))}
        </div>
        <div
          className='selected'
          onClick={() => setDropDownActive(!dropDownActive)}
        >
          <span>{selectedCity}</span>
          {dropDownActive ? <ArrowUp /> : <ArrowDown />}
        </div>
        <div className='search-box'>
          <input
            type='text'
            placeholder='Start Typing...'
            autoFocus={dropDownActive}
            value={search}
            onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          />
        </div>
      </div>
    </div>
  );
};

export default City;
