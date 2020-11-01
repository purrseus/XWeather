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

import { CurrentContext } from 'providers/currentProvider';
import useHandle from './handle';
import styles from './styles';
import useBackground from 'hooks/useBackground';

import MenuBtn from 'components/MenuBtn';
import Today from 'components/Today/main';
import CurrentCondition from 'components/Today/currentCondition';

const TodayScreen: FC = () => {
  const { refreshing, netInfo, getCurrentWeather } = useHandle();
  const { currentWeather } = useContext(CurrentContext);
  const background = useBackground();

  useEffect(() => {
    getCurrentWeather();
  }, [getCurrentWeather]);

  return (
    <ImageBackground source={background} style={styles.background}>
      <MenuBtn />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={getCurrentWeather}
          />
        }
      >
        <Today {...currentWeather} />
        {!!currentWeather.name && (
          <View style={styles.curConditions}>
            <CurrentCondition
              name="Humidity"
              icon={require('assets/icons/common/humidity.png')}
              data={`${currentWeather.main.humidity}%`}
            />

            <CurrentCondition
              name="Wind speed"
              icon={require('assets/icons/common/wind.png')}
              data={`${currentWeather.wind.speed * 3.6}km/h`}
            />

            <CurrentCondition
              name="Cloudiness"
              icon={require('assets/icons/common/cloud.png')}
              data={`${currentWeather.clouds.all}%`}
            />

            <CurrentCondition
              name="Pressure"
              icon={require('assets/icons/common/pressure.png')}
              data={`${currentWeather.main.pressure}hPa`}
            />
          </View>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

export default TodayScreen;
