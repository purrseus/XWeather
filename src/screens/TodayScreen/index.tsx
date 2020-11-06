/**
 * @format
 */

import React, { FC, useContext, useEffect } from 'react';
import {
  ScrollView,
  RefreshControl,
  ImageBackground,
  View,
} from 'react-native';

import styles from './styles';
import useBackgroundIcon from 'hooks/useBackgroundIcon';
import useForecast, { HookReturn } from 'hooks/useForecast';

import MenuBtn from 'components/MenuBtn';
import Today from 'components/Today/main';
import CurrentCondition from 'components/Today/currentCondition';
import { ForecastContext } from 'providers/forecastProvider';

const TodayScreen: FC = () => {
  const { refreshing, netInfo, getWeatherForecast }: HookReturn = useForecast();
  const { weatherForecast } = useContext(ForecastContext);
  const { background } = useBackgroundIcon();

  useEffect(() => {
    getWeatherForecast();
  }, [getWeatherForecast]);

  return (
    <ImageBackground source={background} style={styles.background}>
      <MenuBtn />
      <ScrollView
        style={styles.scroll}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={getWeatherForecast}
          />
        }
      >
        <Today {...weatherForecast} />
        {!!weatherForecast.cod && (
          <View style={styles.curConditions}>
            <CurrentCondition
              name="Humidity"
              icon={require('assets/icons/common/humidity.png')}
              index={`${weatherForecast.list[1].main.humidity}%`}
            />

            <CurrentCondition
              name="Wind speed"
              icon={require('assets/icons/common/wind.png')}
              index={`${(weatherForecast.list[1].wind.speed * 3.6).toFixed(
                1
              )}km/h`}
            />

            <CurrentCondition
              name="Cloudiness"
              icon={require('assets/icons/common/cloud.png')}
              index={`${weatherForecast.list[1].clouds.all}%`}
            />

            <CurrentCondition
              name="Pressure"
              icon={require('assets/icons/common/pressure.png')}
              index={`${weatherForecast.list[1].main.pressure}hPa`}
            />
          </View>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

export default TodayScreen;
