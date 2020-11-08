/**
 * @format
 */

import { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NetInfoState, useNetInfo } from '@react-native-community/netinfo';

import { fetchDailyWeather } from 'services/fetchWeather';
import { DailyWeatherInterface } from 'types/interface';
import useBackgroundIcon from 'hooks/useBackgroundIcon';

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
  background: any;
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
  const { background } = useBackgroundIcon();

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
          try {
            const { data }: Response = await fetchDailyWeather(
              latitude,
              longitude
            );
            setDailyWeather([...data.daily]);
            // Notify no GPS connection*
          } catch (error) {
            console.log(error);
          }
        }
      })();
    }
  }, [netInfo.isConnected]);

  return { background, dailyWeather, netInfo, getDailyWeather };
};

export default useHandle;
