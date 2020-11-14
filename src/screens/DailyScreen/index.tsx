/**
 * @format
 */

import React, { FC } from 'react';
import { FlatList, ImageBackground, View } from 'react-native';

import styles from './styles';
import Daily from 'components/Daily';
import useForecast, { HookReturn } from 'hooks/useForecast';

const DailyScreen: FC = () => {
  const { background, weatherForecast }: HookReturn = useForecast();

  return (
    <ImageBackground
      source={background}
      style={styles.background}
      blurRadius={5}
    >
      <View style={styles.container}>
        <FlatList
          style={styles.flatList}
          data={weatherForecast.daily}
          renderItem={({ item }) => <Daily data={item} />}
          keyExtractor={(item, index) => '' + index}
        />
      </View>
    </ImageBackground>
  );
};

export default DailyScreen;
