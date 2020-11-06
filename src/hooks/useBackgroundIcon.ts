/**
 * @format
 */

import { useContext } from 'react';
import { ForecastContext } from 'providers/forecastProvider';

const useBackgroundIcon: () => { background: any; icon: string } = () => {
  const { weatherForecast } = useContext(ForecastContext);
  let background = require('assets/images/warm.jpg');

  if (!weatherForecast.cod) {
    return background;
  }
  const coldDay: string[] = ['13d'];
  const coldNight: string[] = ['13n'];
  const clearDay: string[] = ['01d', '02d'];
  const clearNight: string[] = ['01n', '02n'];
  const mistDay: string[] = ['50d', '03d', '04d'];
  const mistNight: string[] = ['50n', '03n', '04n'];
  const rain: string[] = ['09d', '09n', '10d', '10n', '11d', '11n'];

  const defaultIcon: string = weatherForecast.list[1].weather[0].icon.slice(
    0,
    2
  );
  let icon = defaultIcon + 'n';
  if (new Date().getHours() >= 6 && new Date().getHours() < 18) {
    icon = defaultIcon + 'd';
  }

  if (clearDay.includes(icon)) {
    background = require('assets/images/clear.jpg');
  }
  if (clearNight.includes(icon)) {
    background = require('assets/images/clear-night.jpeg');
  }
  if (mistDay.includes(icon)) {
    background = require('assets/images/mist-day.png');
  }
  if (mistNight.includes(icon)) {
    background = require('assets/images/mist-night.jpg');
  }
  if (rain.includes(icon)) {
    background = require('assets/images/rain-day.jpg');
  }
  if (
    (new Date().getHours() < 18 && weatherForecast.list[1].main.temp <= 20) ||
    coldDay.includes(icon)
  ) {
    background = require('assets/images/cold-day.png');
  }
  if (
    (new Date().getHours() > 18 && weatherForecast.list[1].main.temp <= 20) ||
    coldNight.includes(icon)
  ) {
    background = require('assets/images/cold-night.jpg');
  }

  return { background, icon };
};

export default useBackgroundIcon;
