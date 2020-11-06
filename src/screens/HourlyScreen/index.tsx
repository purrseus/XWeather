/**
 * @format
 */

import React, { FC, useContext } from 'react';
import {
  ImageBackground,
  RefreshControl,
  SectionList,
  Text,
} from 'react-native';
import styles from './styles';

import useBackgroundIcon from 'hooks/useBackgroundIcon';
import useForecast, { HookReturn } from 'hooks/useForecast';
import { ForecastContext } from 'providers/forecastProvider';
import { ForecastInterface } from 'types/interface';

import MenuBtn from 'components/MenuBtn';
import Hourly from 'components/Hourly';
import useSectionHourlyList from './useSectionHourlyList';

interface Forecast {
  weatherForecast: ForecastInterface;
}

const HourlyScreen: FC = () => {
  const { weatherForecast }: Forecast = useContext(ForecastContext);
  const { refreshing, netInfo, getWeatherForecast }: HookReturn = useForecast();
  const { background } = useBackgroundIcon();
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
        keyExtractor={(item, index) => '' + index}
        renderItem={({ item }) => <Hourly item={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.titleSection}>{title}</Text>
        )}
      />
    </ImageBackground>
  );
};

export default HourlyScreen;
