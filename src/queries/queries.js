import { gql } from '@apollo/client';

export const WEATHER_QUERY = gql`
  query GetWeather($name: String!) {
    getCityByName(
      country: "Tr"
      name: $name
      config: { lang: tr, units: metric }
    ) {
      name
      weather {
        temperature {
          actual
          feelsLike
          min
          max
        }
        summary {
          title
          description
          icon
        }
        wind {
          speed
          deg
        }
        timestamp
      }
    }
  }
`;
