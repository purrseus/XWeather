/**
 * @format
 */

import React, { FC, useContext, useEffect } from 'react';
import { ScrollView, RefreshControl, ImageBackground } from 'react-native';

import { CurrentContext } from 'providers/currentProvider';
import useHandle from './handle';
import styles from './styles';
import useBackground from 'hooks/useBackground';

import Today from 'components/Today';
import MenuBtn from 'components/MenuBtn';

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
      </ScrollView>
    </ImageBackground>
  );
};

export default TodayScreen;
