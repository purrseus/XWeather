/**
 * @format
 */

import React, { FC } from 'react';
import { View, Text, Image } from 'react-native';
import moment from 'moment';

import { DailyWeatherInterface } from 'types/interface';
import styles from './styles';
import { template } from '@babel/core';

interface Props {
  data: DailyWeatherInterface;
}

const Daily: FC<Props> = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.date}>
          {moment(new Date(data.dt * 1000)).format('dddd, MMM DD')}
        </Text>

        <Text style={styles.description}>{data.weather[0].description}</Text>
      </View>

      <View style={styles.forecast}>
        <Image
          source={{
            uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
          }}
          style={styles.icon}
        />

        <View>
          <Text style={styles.tempMax}>{data.temp.max.toFixed()}°</Text>
          <Text style={styles.tempMin}>{data.temp.min.toFixed()}°</Text>
        </View>
      </View>
    </View>
  );
};

export default Daily;
