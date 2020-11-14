/**
 * @format
 */

import React, { FC } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';

import styles from './styles';
import { OneCallInterface } from 'types/interface';

interface Props {
  data: OneCallInterface;
}

const CurrentConditions: FC<Props> = ({ data }) => {
  const { hourly, daily } = data;

  return (
    <View style={styles.container}>
      <View style={styles.componentsTop}>
        <View style={styles.top}>
          <Icon size={30} name="water-percent" color="white" />
          <View style={styles.topContent}>
            <Text style={styles.title}>Humidity</Text>
            <Text style={styles.index}>{hourly[0].humidity}%</Text>
          </View>
        </View>

        <View style={styles.top}>
          <Icon size={30} name="speedometer-slow" color="white" />
          <View style={styles.topContent}>
            <Text style={styles.title}>Pressure</Text>
            <Text style={styles.index}>{hourly[0].pressure} hPa</Text>
          </View>
        </View>
      </View>

      <View style={styles.componentsBottom}>
        <View style={styles.bottom}>
          <Icon size={30} name="weather-cloudy" color="white" />
          <Text style={styles.index}>{hourly[0].clouds}%</Text>
        </View>

        <View style={styles.bottom}>
          <View style={styles.icon}>
            <Icon size={25} name="arrow-up" color="white" />
            <Icon size={25} name="weather-sunset" color="white" />
            <Icon size={25} name="arrow-down" color="white" />
          </View>
          <View style={styles.sunIndex}>
            <Text style={styles.index}>
              {moment(new Date(daily[0].sunrise * 1000)).format('HH:mm')}
            </Text>

            <Text style={styles.index}>
              {moment(new Date(daily[0].sunset * 1000)).format('HH:mm')}
            </Text>
          </View>
        </View>

        <View style={styles.bottom}>
          <Icon size={30} name="weather-windy" color="white" />
          <Text style={styles.index}>
            {(hourly[0].wind_speed * 3.6).toFixed(1)} km/h
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CurrentConditions;
