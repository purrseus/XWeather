/**
 * @format
 */

import React, { FC } from 'react';
import {
  View,
  ImageBackground,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import useHandle, { HookReturn } from './handle';
import styles from './styles';

import MenuBtn from 'components/MenuBtn';
import Today from 'components/Search/main';
import CurrentCondition from 'components/Search/currentCondition';

const SearchScreen: FC = () => {
  const { background, cityWeather, getCityWeather }: HookReturn = useHandle();

  return (
    <ImageBackground
      source={background}
      blurRadius={3}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <MenuBtn />
        <ScrollView>
          <View style={styles.wrapperInput}>
            <Icon size={25} name="magnify" />
            <TextInput
              style={styles.textInput}
              placeholder="Find location"
              placeholderTextColor="#666"
              selectionColor="#000"
              onSubmitEditing={event => {
                if (event.nativeEvent.text.length > 1) {
                  getCityWeather(event.nativeEvent.text);
                }
              }}
            />
          </View>

          {typeof cityWeather !== 'string' ? (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <View style={styles.container}>
                <Today
                  name={cityWeather.name}
                  country={cityWeather.sys.country}
                  temp={cityWeather.main.temp.toFixed()}
                  description={cityWeather.weather[0].description}
                  feelsLike={cityWeather.main.feels_like.toFixed(1)}
                  icon={cityWeather.weather[0].icon}
                />

                <View style={styles.curConditions}>
                  <CurrentCondition
                    name="Humidity"
                    icon={'water-percent'}
                    index={`${cityWeather.main.humidity}%`}
                  />

                  <CurrentCondition
                    name="Wind speed"
                    icon={'weather-windy'}
                    index={`${(cityWeather.wind.speed * 3.6).toFixed(1)} km/h`}
                  />

                  <CurrentCondition
                    name="Cloudiness"
                    icon={'weather-cloudy'}
                    index={`${cityWeather.clouds.all}%`}
                  />

                  <CurrentCondition
                    name="Pressure"
                    icon={'speedometer-slow'}
                    index={`${cityWeather.main.pressure} hPa`}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          ) : (
            <View style={styles.container}>
              <Text style={styles.notFound}>{cityWeather}</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default SearchScreen;
