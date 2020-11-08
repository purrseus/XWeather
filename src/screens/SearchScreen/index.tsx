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
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import useHandle, { HookReturn } from './handle';
import styles from './styles';

import MenuBtn from 'components/MenuBtn';
import Today from 'components/Today/main';
import CurrentCondition from 'components/Today/currentCondition';

const SearchScreen: FC = () => {
  const {
    background,
    cityWeather,
    netInfo,
    getCityWeather,
  }: HookReturn = useHandle();

  return (
    <ImageBackground source={background} style={styles.background}>
      <MenuBtn />
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
              feelsLike={cityWeather.main.feels_like.toFixed(2)}
            />

            <View style={styles.curConditions}>
              <CurrentCondition
                name="Humidity"
                icon={require('assets/icons/common/humidity.png')}
                index={`${cityWeather.main.humidity}%`}
              />

              <CurrentCondition
                name="Wind speed"
                icon={require('assets/icons/common/wind.png')}
                index={`${(cityWeather.wind.speed * 3.6).toFixed(1)}km/h`}
              />

              <CurrentCondition
                name="Cloudiness"
                icon={require('assets/icons/common/cloud.png')}
                index={`${cityWeather.clouds.all}%`}
              />

              <CurrentCondition
                name="Pressure"
                icon={require('assets/icons/common/pressure.png')}
                index={`${cityWeather.main.pressure}hPa`}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      ) : (
        <View style={styles.container}>
          <Text style={styles.notFound}>{cityWeather}</Text>
        </View>
      )}
    </ImageBackground>
  );
};

export default SearchScreen;
