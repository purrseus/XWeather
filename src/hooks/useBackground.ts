/**
 * @format
 */

import { useContext } from 'react';
import { CurrentContext } from 'providers/currentProvider';

const useBackground = () => {
  const { currentWeather } = useContext(CurrentContext);
  let background = require('assets/images/warm.jpg');

  if (!currentWeather.name) {
    return background;
  }
  const coldDay: string[] = ['13d'];
  const coldNight: string[] = ['13n'];
  const clearDay: string[] = ['01d', '02d'];
  const clearNight: string[] = ['01n', '02n'];
  const mistDay: string[] = ['50d', '03d', '04d'];
  const mistNight: string[] = ['50n', '03n', '04n'];
  const rain: string[] = ['09d', '09n', '10d', '10n', '11d', '11n'];

  const icon: string = currentWeather.weather[0].icon;
  if (
    (new Date().getHours() < 18 && currentWeather.main.temp <= 20) ||
    coldDay.includes(icon)
  ) {
    background = require('assets/images/cold-day.png');
  }
  if (
    (new Date().getHours() >= 18 && currentWeather.main.temp <= 20) ||
    coldNight.includes(icon)
  ) {
    background = require('assets/images/cold-night.jpg');
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

  return background;
};

export default useBackground;
