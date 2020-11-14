/**
 * @format
 */

import { Alert } from 'react-native';
import { useCallback, useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NetInfoState, useNetInfo } from '@react-native-community/netinfo';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ForecastInterface, OneCallInterface } from 'types/interface';
import { fetchWeather, fetchWeatherForecast } from 'services/fetchWeather';
import { ForecastContext } from 'providers/forecastProvider';
import useBackground from './useBackground';

interface Position {
  longitude: number;
  latitude: number;
}
interface Response {
  data: OneCallInterface;
}

interface Res {
  data: ForecastInterface;
}

export interface HookReturn {
  background: any;
  refreshing: boolean;
  city: string;
  weatherForecast: OneCallInterface;
  netInfo: NetInfoState;
  getWeatherForecast: () => void;
}

type CustomHook = () => HookReturn;

const useForecast: CustomHook = () => {
  const { weatherForecast, setWeatherForecast } = useContext(ForecastContext);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [city, setCity] = useState<string>('');

  const navigation = useNavigation();
  const netInfo: NetInfoState = useNetInfo();

  const { background }: { background: any } = useBackground();

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

            try {
              const { data }: Response = await fetchWeatherForecast(
                latitude,
                longitude
              );
              const response: Res = await fetchWeather(latitude, longitude);
              setCity(
                `${response.data.city.name}, ${response.data.city.country}`
              );
              setWeatherForecast({ ...data });
              await AsyncStorage.mergeItem(
                '@location',
                JSON.stringify({ latitude, longitude })
              );
              setRefreshing(false);
            } catch (error) {
              console.log(error);
            }
          })();
        },

        ({ message }) => {
          (async () => {
            const value: string | null = await AsyncStorage.getItem(
              '@location'
            );
            if (!value) {
              setRefreshing(false);
              Alert.alert(message, 'Turn on device location and try again.', [
                {
                  text: 'Find location',
                  onPress: () => navigation.navigate('Search'),
                },
                {},
              ]);
            } else {
              const location: Position = JSON.parse(value);

              try {
                const { data }: Response = await fetchWeatherForecast(
                  location.latitude,
                  location.longitude
                );
                const response: Res = await fetchWeather(
                  location.latitude,
                  location.longitude
                );
                setCity(
                  `${response.data.city.name}, ${response.data.city.country}`
                );
                setWeatherForecast({ ...data });
                setRefreshing(false);
              } catch (error) {
                console.log(error);
              }
            }
          })();
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    } else {
      setRefreshing(false);
    }
  }, [setWeatherForecast, netInfo.isConnected, navigation]);

  return {
    background,
    city,
    weatherForecast,
    refreshing,
    netInfo,
    getWeatherForecast,
  };
};

export default useForecast;
