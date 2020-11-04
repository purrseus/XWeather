/**
 * @format
 */

import axios from 'axios';

const URL: string = 'http://api.openweathermap.org/data/2.5';
const API_KEY: string = '59173a911370177af602cfb63318cc29';

const fetchWeather = (
  latitude: number,
  longitude: number,
  type: 'weather' | 'forecast'
) => {
  const response = axios.get(`${URL}/${type}`, {
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

export default fetchWeather;
