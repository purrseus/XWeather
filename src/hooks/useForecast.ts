/**
 * @format
 */

import { Alert } from 'react-native';
import { useCallback, useContext, useState } from 'react';
import { NetInfoState, useNetInfo } from '@react-native-community/netinfo';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ForecastInterface } from 'api/interface';
import fetchWeather from 'api/fetchWeather';
import { ForecastContext } from 'providers/forecastProvider';

interface Position {
  longitude: number;
  latitude: number;
}

interface Response {
  data: ForecastInterface;
}

export interface HookReturn {
  refreshing: boolean;
  netInfo: NetInfoState;
  getWeatherForecast: () => void;
}

type CustomHook = () => HookReturn;

const useForecast: CustomHook = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const netInfo = useNetInfo();
  const { setWeatherForecast } = useContext(ForecastContext);

  const getWeatherForecast: () => void = useCallback(() => {
    setRefreshing(true);
    if (netInfo.isConnected) {
      Geolocation.getCurrentPosition(
        ({ coords }) => {
          const { latitude, longitude }: Position = coords;
          (async () => {
            const value: string | null = await AsyncStorage.getItem(
              '@location'
            );
            if (!value) {
              await AsyncStorage.setItem(
                '@location',
                JSON.stringify({ latitude, longitude })
              );
            }
            const { data }: Response = await fetchWeather(
              latitude,
              longitude,
              'forecast'
            );
            setWeatherForecast({ ...data });
            await AsyncStorage.mergeItem(
              '@location',
              JSON.stringify({ latitude, longitude })
            );
            setRefreshing(false);
          })();
        },
        ({ message }) => {
          (async () => {
            const value: string | null = await AsyncStorage.getItem(
              '@location'
            );
            if (!value) {
              setRefreshing(false);
              /** ??????????????????
               * navigate to search by city name feature or alert and show error message
               */
              Alert.alert(message, 'Turn on device location and try again.');
            } else {
              const location: Position = JSON.parse(value);
              const { data }: Response = await fetchWeather(
                location.latitude,
                location.longitude,
                'forecast'
              );
              setWeatherForecast({ ...data });
              setRefreshing(false);
              // Notify no GPS connection*
            }
          })();
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    } else {
      setRefreshing(false);
    }
  }, [setWeatherForecast, netInfo.isConnected]);

  return { refreshing, netInfo, getWeatherForecast };
};

export default useForecast;
