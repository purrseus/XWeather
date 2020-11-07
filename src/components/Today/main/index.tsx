/**
 * @format
 */

import React, { FC } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { ForecastInterface } from 'types/interface';
import useBackgroundIcon from 'hooks/useBackgroundIcon';

const Today: FC<ForecastInterface> = ({ list, city }) => {
  const { icon } = useBackgroundIcon();
  return (
    <>
      {!!list && (
        <View style={styles.container}>
          <Text style={[styles.name, styles.color]}>
            {city.name}, {city.country}
          </Text>

          <Text style={[styles.temp, styles.color]}>
            {list[1].main.temp.toFixed()}°C
          </Text>

          <Image
            source={{
              uri: `http://openweathermap.org/img/wn/${icon}@4x.png`,
            }}
            style={styles.image}
          />

          <Text style={[styles.description, styles.color]}>
            {list[1].weather[0].description}
          </Text>

          <Text style={[styles.feelsLike, styles.color]}>
            Feels like {list[1].main.feels_like.toFixed()}°
          </Text>
        </View>
      )}
    </>
  );
};

export default Today;
