/**
 * @format
 */

import React, { FC, useEffect } from 'react';
import { FlatList, ImageBackground, Text, View } from 'react-native';

import styles from './styles';
import useHandle, { HookReturn } from './handle';
import Daily from 'components/Daily';
import MenuBtn from 'components/MenuBtn';

const DailyScreen: FC = () => {
  const {
    background,
    dailyWeather,
    netInfo,
    getDailyWeather,
  }: HookReturn = useHandle();

  useEffect(() => {
    getDailyWeather();
  }, [getDailyWeather]);

  return (
    <ImageBackground
      source={background}
      style={styles.background}
      blurRadius={2}
    >
      <MenuBtn />

      <View style={styles.container}>
        <Text style={styles.title}>8 Days</Text>
        {!!dailyWeather.length && (
          <FlatList
            style={styles.flatList}
            data={dailyWeather}
            renderItem={({ item }) => <Daily data={item} />}
            keyExtractor={(item, index) => '' + index}
          />
        )}
      </View>
    </ImageBackground>
  );
};

export default DailyScreen;
