/**
 * @format
 */

import React, { FC } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

interface Props {
  name: string;
  country: string;
  temp: string;
  description: string;
  feelsLike: string;
  icon: string;
}

const Today: FC<Props> = props => {
  const { name, country, temp, description, feelsLike, icon } = props;

  return (
    <>
      {!!name && (
        <View style={styles.container}>
          <Text style={styles.name}>
            {name}, {country}
          </Text>

          <Text style={styles.temp}>{temp}°C</Text>

          <Image
            source={{
              uri: `http://openweathermap.org/img/wn/${icon}@4x.png`,
            }}
            style={styles.image}
          />

          <Text style={styles.description}>{description}</Text>

          <Text style={styles.feelsLike}>Feels like {feelsLike}°</Text>
        </View>
      )}
    </>
  );
};

export default Today;
