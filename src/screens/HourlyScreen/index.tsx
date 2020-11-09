/**
 * @format
 */

import React, { FC } from 'react';
import {
  ImageBackground,
  RefreshControl,
  SectionList,
  Text,
} from 'react-native';
import styles from './styles';

import useForecast, { HookReturn } from 'hooks/useForecast';
import { Result } from './useSectionHourlyList';

import MenuBtn from 'components/MenuBtn';
import Hourly from 'components/Hourly';
import useSectionHourlyList from './useSectionHourlyList';

const HourlyScreen: FC = () => {
  const {
    background,
    weatherForecast,
    refreshing,
    netInfo,
    getWeatherForecast,
  }: HookReturn = useForecast();
  const data: Result[] | undefined = useSectionHourlyList(weatherForecast.list);

  return (
    <ImageBackground
      source={background}
      style={styles.background}
      blurRadius={2}
    >
      <MenuBtn />

      {!!data && netInfo.isConnected && (
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
      )}
    </ImageBackground>
  );
};

export default HourlyScreen;
