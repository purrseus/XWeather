/**
 * @format
 */

import { useState, useContext, useCallback } from 'react';
import { Alert } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { CurrentWeatherInterface } from 'api/interface';
import { fetchCurrentWeather } from 'api/fetchWeather';
import { CurrentContext } from 'providers/currentProvider';

interface Position {
  longitude: number;
  latitude: number;
}

interface Response {
  data: CurrentWeatherInterface;
}

const useHandle = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const netInfo = useNetInfo();
  const { setCurrentWeather } = useContext(CurrentContext);

  const getCurrentWeather: () => void = useCallback(() => {
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
            const { data }: Response = await fetchCurrentWeather(
              latitude,
              longitude
            );
            setCurrentWeather({ ...data });
            await AsyncStorage.mergeItem(
              '@location',
              JSON.stringify({ latitude, longitude })
            );
            setRefreshing(false);
          })();
        },
        error => {
          (async () => {
            const value: string | null = await AsyncStorage.getItem(
              '@location'
            );
            if (!value) {
              setRefreshing(false);
              /** ??????????????????
               * navigate to search by city name feature or alert and show error message
               */
              Alert.alert(
                error.message,
                'Turn on device location and try again.'
              );
            } else {
              const location: Position = JSON.parse(value);
              const { data }: Response = await fetchCurrentWeather(
                location.latitude,
                location.longitude
              );
              setCurrentWeather({ ...data });
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
  }, [setCurrentWeather, netInfo.isConnected]);

  return { refreshing, netInfo, getCurrentWeather };
};

export default useHandle;
