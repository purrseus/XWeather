/**
 * @format
 */

import { NetInfoState, useNetInfo } from '@react-native-community/netinfo';
import { useState } from 'react';

import { fetchCityWeather } from 'services/fetchWeather';
import { CityWeatherInterface } from 'types/interface';

export interface HookReturn {
  background: any;
  cityWeather: string | CityWeatherInterface;
  getCityWeather: (name: string) => Promise<void>;
}

type CustomHook = () => HookReturn;
const useHandle: CustomHook = () => {
  const [cityWeather, setCityWeather] = useState<CityWeatherInterface | string>(
    ''
  );
  const netInfo: NetInfoState = useNetInfo();

  let background = require('assets/images/cold-day.png');
  if (typeof cityWeather !== 'string') {
    if (cityWeather.main.temp > 20) {
      background = require('assets/images/warm.jpg');
    }
  }

  const getCityWeather = async (name: string) => {
    if (netInfo.isConnected) {
      try {
        const { data } = await fetchCityWeather(name);
        setCityWeather({ ...data });
      } catch (error) {
        setCityWeather('No results found.');
      }
    } else {
      setCityWeather('No Internet Connection');
    }
  };

  return { background, cityWeather, getCityWeather };
};

export default useHandle;
