/**
 * @format
 */

import React, { FC } from 'react';
import { View, Text, Image } from 'react-native';
import moment from 'moment';
import { HourlyInterface } from 'types/interface';
import styles from './styles';

interface Props {
  data: HourlyInterface;
}

const Hourly: FC<Props> = ({ data }) => {
  const { dt, temp, weather, rain } = data;
  return (
    <View style={styles.container}>
      <Text style={styles.time}>
        {new Date(dt * 1000).getHours() === 0
          ? moment(new Date(dt * 1000)).format('DD/MM')
          : moment(new Date(dt * 1000)).format('DD-HH') !==
            moment(new Date()).format('DD-HH')
          ? moment(new Date(dt * 1000)).format('HH:mm')
          : 'Now'}
      </Text>
      <Image
        source={{
          uri: `http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`,
        }}
        style={styles.icon}
      />

      <Text style={styles.temp}>{temp.toFixed()}°</Text>
      <Text style={styles.rain}>
        {rain ? `${rain['1h'].toFixed(1)} mm` : '0 mm'}
      </Text>
    </View>
  );
};

export default Hourly;
