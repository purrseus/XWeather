/**
 * @format
 */

import React, { FC } from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

import styles from './styles';

interface Props {
  temp: string;
  description: string;
  feelsLike: string;
}

const Main: FC<Props> = props => {
  const { temp, description, feelsLike } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.today}>Today</Text>
      <Text style={styles.date}>
        {moment(new Date()).format('ddd, DD MMM')}
      </Text>

      <Text style={styles.description}>{description}</Text>

      <View style={styles.tempWrapper}>
        <Text style={styles.temp}>{temp}</Text>
        <Text style={styles.celsius}>°C</Text>
      </View>

      <Text style={styles.feelsLike}>Feels like {feelsLike}°</Text>
    </View>
  );
};

export default Main;
