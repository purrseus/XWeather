/**
 * @format
 */

import React, { FC } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import useBackgroundIcon from 'hooks/useBackgroundIcon';

interface Props {
  name: string;
  country: string;
  temp: string;
  description: string;
  feelsLike: string;
}

const Today: FC<Props> = props => {
  const { name, country, temp, description, feelsLike } = props;
  const { icon } = useBackgroundIcon();
  return (
    <>
      {!!name && (
        <View style={styles.container}>
          <Text style={[styles.name, styles.color]}>
            {name}, {country}
          </Text>

          <Text style={[styles.temp, styles.color]}>{temp}°C</Text>

          <Image
            source={{
              uri: `http://openweathermap.org/img/wn/${icon}@4x.png`,
            }}
            style={styles.image}
          />

          <Text style={[styles.description, styles.color]}>{description}</Text>

          <Text style={[styles.feelsLike, styles.color]}>
            Feels like {feelsLike}°
          </Text>
        </View>
      )}
    </>
  );
};

export default Today;
