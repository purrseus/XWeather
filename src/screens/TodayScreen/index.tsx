/**
 * @format
 */

import React, { FC, useEffect } from 'react';
import {
  ScrollView,
  RefreshControl,
  ImageBackground,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import styles from './styles';
import useForecast, { HookReturn } from 'hooks/useForecast';

import MenuBtn from 'components/MenuBtn';
import Today from 'components/Today/main';
import CurrentCondition from 'components/Today/currentCondition';

const TodayScreen: FC = () => {
  const {
    background,
    weatherForecast,
    refreshing,
    netInfo,
    getWeatherForecast,
  }: HookReturn = useForecast();

  useEffect(() => {
    getWeatherForecast();
    SplashScreen.hide();
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
        {!!weatherForecast.cod && (
          <>
            <Today
              name={weatherForecast.city.name}
              country={weatherForecast.city.country}
              temp={weatherForecast.list[1].main.temp.toFixed()}
              description={weatherForecast.list[1].weather[0].description}
              feelsLike={weatherForecast.list[1].main.feels_like.toFixed(2)}
            />

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
          </>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

export default TodayScreen;
