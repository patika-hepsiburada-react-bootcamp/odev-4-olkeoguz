import Spinner from '../UI/Spinner';
import SvgContainer from '../UI/SvgContainer';
import './Weather.scss';

const Weather = ({ selectedCity, weatherData, loading }) => {
  if (loading) {
    return (
      <div className='weatherContainer'>
        <div className='card spinnerContainer'>
          <Spinner />
        </div>
      </div>
    );
  }

  if (!loading && !weatherData.getCityByName) {
    return (
      <div className='weatherContainer'>
        <div className='card spinnerContainer'>
          <div>
            Could not found the weather reports for <span>{selectedCity}</span>{' '}
            right now...
          </div>
        </div>
      </div>
    );
  }

  const {
    name,
    weather: {
      summary: { title, description },
      temperature: { actual, feelsLike, max, min },
      wind: { deg, speed },
    },
  } = weatherData ? weatherData.getCityByName : {};

  return (
    <div className='weatherContainer'>
      <div className='card'>
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
            <SvgContainer name={title} width='100%' />
          </div>
          <div className='details'>
            <div className='max'>
              Max <p>{max}°C</p>
            </div>
            <div className='min'>
              Min <p>{min}°C</p>
            </div>
            <div className='wind'>
              Wind
              <p>
                {deg} ° {speed} km/h
              </p>
            </div>
          </div>
        </div>
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
