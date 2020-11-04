/**
 * @format
 */

import React, { FC, useContext, useEffect } from 'react';
import {
  ImageBackground,
  RefreshControl,
  ScrollView,
  SectionList,
  Text,
} from 'react-native';
import styles from './styles';

import useBackground from 'hooks/useBackground';
import useForecast, { HookReturn } from 'hooks/useForecast';
import { ForecastContext } from 'providers/forecastProvider';
import { ForecastInterface } from 'api/interface';

import MenuBtn from 'components/MenuBtn';
import Hourly from 'components/Hourly';
import useSectionHourlyList from './useSectionHourlyList';

interface Forecast {
  weatherForecast: ForecastInterface;
}

const HourlyScreen: FC = () => {
  const { weatherForecast }: Forecast = useContext(ForecastContext);
  const { refreshing, netInfo, getWeatherForecast }: HookReturn = useForecast();
  const background = useBackground();
  const data = useSectionHourlyList(weatherForecast.list);

  return (
    <ImageBackground
      source={background}
      style={styles.background}
      blurRadius={2}
    >
      <MenuBtn />

      <SectionList
        style={styles.sectionList}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={getWeatherForecast}
          />
        }
        sections={data}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => <Hourly item={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.titleSection}>{title}</Text>
        )}
      />
    </ImageBackground>
  );
};

export default HourlyScreen;
