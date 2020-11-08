/**
 * @format
 */

import React from 'react';
import { View, Text, Image } from 'react-native';
import moment from 'moment';

import styles from './styles';
import { HourlyInterface } from 'types/interface';

interface Props {
  item: HourlyInterface;
}

const Hourly = ({ item }: Props) => {
  const defaultIcon: string = item.weather[0].icon.slice(0, 2);
  let icon: string = defaultIcon + 'n';
  if (moment(item.dt_txt).hour() < 18 && moment(item.dt_txt).hour() >= 6) {
    icon = defaultIcon + 'd';
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapperTime}>
        <Text style={styles.time}>{moment(item.dt_txt).format('hA')}</Text>
      </View>
      <Image
        source={{
          uri: `http://openweathermap.org/img/wn/${icon}@4x.png`,
        }}
        style={styles.image}
      />
      <Text style={styles.temp}>{item.main.temp.toFixed()}°C</Text>
      <Text style={styles.feelsLike}>
        Feels like {item.main.feels_like.toFixed(2)}°
      </Text>
    </View>
  );
};

export default Hourly;
