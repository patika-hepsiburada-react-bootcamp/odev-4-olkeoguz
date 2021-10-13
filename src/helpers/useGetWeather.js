import { useQuery } from '@apollo/client';
import { WEATHER_QUERY } from '../queries/queries';

const useGetWeather = (cityName) => {
  const { loading, error, data } = useQuery(WEATHER_QUERY, {
    variables: { name: cityName },
  });

  return { loading, error, data };
};

export default useGetWeather;
