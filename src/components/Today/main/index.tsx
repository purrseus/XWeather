/**
 * @format
 */

import React, { FC } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { CurrentWeatherInterface } from 'api/interface';

const Today: FC<CurrentWeatherInterface> = (props: CurrentWeatherInterface) => {
  const { main, name, sys, weather } = props;
  return (
    <>
      {!!name && (
        <View style={styles.container}>
          <Text style={[styles.name, styles.color]}>
            {name}, {sys.country}
          </Text>
          <Text style={[styles.temp, styles.color]}>{main.temp}°C</Text>
          <Image
            source={{
              uri: `http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`,
            }}
            style={styles.image}
          />
          <Text style={[styles.description, styles.color]}>
            {weather[0].description}
          </Text>
          <Text style={[styles.feelsLike, styles.color]}>
            Feels like {main.feels_like}°C
          </Text>
        </View>
      )}
    </>
  );
};

export default Today;
