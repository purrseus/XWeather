/**
 * @format
 */

import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import { HourlyInterface } from 'api/interface';

interface Props {
  item: HourlyInterface;
}

const Hourly = ({ item }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperTime}>
        <Text style={styles.time}>{item.dt_txt.slice(11, 16)}</Text>
      </View>
      <Image
        source={{
          uri: `http://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`,
        }}
        style={styles.image}
      />
      <Text style={styles.temp}>{item.main.temp.toFixed()}°C</Text>
      <Text style={styles.feelsLike}>
        Feels like {item.main.feels_like.toFixed(1)}°C
      </Text>
    </View>
  );
};

export default Hourly;
