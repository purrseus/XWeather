/**
 * @format
 */

import { useCallback, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NetInfoState, useNetInfo } from '@react-native-community/netinfo';

import { fetchDailyWeather } from 'api/fetchWeather';
import { DailyWeatherInterface } from 'types/interface';
import { Alert } from 'react-native';

interface Position {
  longitude: number;
  latitude: number;
}

interface Response {
  data: {
    daily: DailyWeatherInterface[];
  };
}

export interface HookReturn {
  dailyWeather: DailyWeatherInterface[];
  netInfo: NetInfoState;
  getDailyWeather: () => void;
}

type CustomHook = () => HookReturn;

const useHandle: CustomHook = () => {
  const [dailyWeather, setDailyWeather] = useState<
    DailyWeatherInterface[] | []
  >([]);
  const netInfo = useNetInfo();

  const getDailyWeather = useCallback(() => {
    if (netInfo.isConnected) {
      (async () => {
        const value: string | null = await AsyncStorage.getItem('@location');
        if (!value) {
          /** ??????????????????
           * navigate to search by city name feature or alert and show error message
           */
          Alert.alert('Turn on device location and try again.');
        } else {
          const { latitude, longitude }: Position = JSON.parse(value);
          const { data }: Response = await fetchDailyWeather(
            latitude,
            longitude
          );
          setDailyWeather([...data.daily]);
          // Notify no GPS connection*
        }
      })();
    }
  }, [netInfo.isConnected]);

  return { dailyWeather, netInfo, getDailyWeather };
};

export default useHandle;
