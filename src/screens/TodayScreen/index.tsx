/**
 * @format
 */

import React, { FC, useContext, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import Geolocation from '@react-native-community/geolocation';

import { CurrentWeatherType } from 'api/type';
import { fetchCurrentWeather } from 'api/fetchWeather';
import { CurrentContext } from 'providers/currentProvider';

type Position = {
  longitude: number;
  latitude: number;
};

type Response = {
  data: CurrentWeatherType
}

const TodayScreen: FC = () => {
  const netInfo = useNetInfo();
  const { currentWeather, setCurrentWeather } = useContext(CurrentContext);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({ coords }) => {
        const { latitude, longitude }: Position = coords;

        (async () => {
          const { data }: Response = await fetchCurrentWeather(latitude, longitude);
          setCurrentWeather({...data});
        })();
      },
      error => {
        return;
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    }, []);

  return (
    <ScrollView
      // style={{
      //   flex: 1,
      //   justifyContent: 'center',
      //   alignItems: 'center',
      // }}
    >
      <Text>{JSON.stringify(currentWeather, null, 2)}</Text>
      <Text>{JSON.stringify(currentWeather, null, 2)}</Text>
    </ScrollView>
  );
};

export default TodayScreen;
