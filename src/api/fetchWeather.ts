/**
 * @format
 */

import axios from 'axios';

const URL: string = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY: string = '59173a911370177af602cfb63318cc29';

export const fetchCurrentWeather = (
  latitude: number,
  longitude: number,
) => {
  const response = axios.get(URL, {
    params: {
      lat: latitude,
      lon: longitude,
      units: 'metric',
      lang: 'en',
      appid: API_KEY,
    },
  });
  return response;
};
