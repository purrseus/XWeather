/**
 * @format
 */

import React, { FC, useEffect } from 'react';
import {
  ScrollView,
  RefreshControl,
  ImageBackground,
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import useForecast, { HookReturn } from 'hooks/useForecast';

import MenuBtn from 'components/MenuBtn';
import Main from 'components/Today/main';
import Hourly from 'components/Today/hourly';
import CurrentConditions from 'components/Today/currentConditions';
import { useNavigation } from '@react-navigation/native';

const WeatherScreen: FC = () => {
  const {
    background,
    city,
    weatherForecast,
    refreshing,
    netInfo,
    getWeatherForecast,
  }: HookReturn = useForecast();
  const navigation = useNavigation();

  useEffect(() => {
    getWeatherForecast();
    SplashScreen.hide();
  }, [getWeatherForecast]);

  return (
    <ImageBackground
      source={background}
      blurRadius={3}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <MenuBtn />
        {!!city.length && (
          <View style={styles.header}>
            <Icon
              name="navigation"
              size={15}
              style={styles.navigation}
              color="white"
            />
            <Text style={styles.location}>{city}</Text>
          </View>
        )}
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={getWeatherForecast}
            />
          }
        >
          {!netInfo.isConnected ? (
            <View>
              <Text style={styles.notFound}>No Internet Connection</Text>
            </View>
          ) : (
            <>
              {!!weatherForecast.timezone && (
                <>
                  <Main
                    temp={weatherForecast.hourly[0].temp.toFixed()}
                    description={
                      weatherForecast.hourly[0].weather[0].description
                    }
                    feelsLike={weatherForecast.hourly[0].feels_like.toFixed(1)}
                  />
                  <Text style={styles.hourlyTitle}>Hourly</Text>

                  <FlatList
                    style={styles.hourly}
                    data={weatherForecast.hourly}
                    renderItem={({ item }) => <Hourly data={item} />}
                    keyExtractor={(item, index) => '' + index}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  />

                  <CurrentConditions data={weatherForecast} />

                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('Next 7 days')}
                  >
                    <Text style={styles.daily}>Next 7 days</Text>
                  </TouchableWithoutFeedback>
                </>
              )}
            </>
          )}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default WeatherScreen;
