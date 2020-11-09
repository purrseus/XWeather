/**
 * @format
 */

import { Alert } from 'react-native';
import { useCallback, useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NetInfoState, useNetInfo } from '@react-native-community/netinfo';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ForecastInterface } from 'types/interface';
import { fetchWeather } from 'services/fetchWeather';
import { ForecastContext } from 'providers/forecastProvider';
import useBackgroundIcon from './useBackgroundIcon';

interface Position {
  longitude: number;
  latitude: number;
}

interface Response {
  data: ForecastInterface;
}

export interface HookReturn {
  background: any;
  refreshing: boolean;
  weatherForecast: ForecastInterface;
  netInfo: NetInfoState;
  getWeatherForecast: () => void;
}

type CustomHook = () => HookReturn;

const useForecast: CustomHook = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const navigation = useNavigation();
  const netInfo: NetInfoState = useNetInfo();
  const { weatherForecast, setWeatherForecast } = useContext(ForecastContext);
  const { background }: { background: any } = useBackgroundIcon();

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
              const { data }: Response = await fetchWeather(
                latitude,
                longitude
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
                const { data }: Response = await fetchWeather(
                  location.latitude,
                  location.longitude
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
    weatherForecast,
    refreshing,
    netInfo,
    getWeatherForecast,
  };
};

export default useForecast;
