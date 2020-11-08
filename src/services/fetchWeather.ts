/**
 * @format
 */

import axios from 'axios';

const URL: string = 'http://api.openweathermap.org/data/2.5';
const API_KEY: string = '59173a911370177af602cfb63318cc29';

export const fetchWeather = (latitude: number, longitude: number) => {
  const response = axios.get(`${URL}/forecast`, {
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

export const fetchDailyWeather = (latitude: number, longitude: number) => {
  const response = axios.get(`${URL}/onecall`, {
    params: {
      lat: latitude,
      lon: longitude,
      exclude: 'current,minutely,hourly,alert',
      units: 'metric',
      lang: 'en',
      appid: API_KEY,
    },
  });

  return response;
};

export const fetchCityWeather = (name: string) => {
  const response = axios.get(`${URL}/weather`, {
    params: {
      q: name,
      units: 'metric',
      lang: 'en',
      appid: API_KEY,
    },
  });

  return response;
};
