/**
 * @format
 */

import React, { FC } from 'react';
import { View, Text, Image } from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const CustomDrawerContent: FC<DrawerContentComponentProps<
  DrawerContentOptions
>> = props => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.logo}>
          <Image
            source={require('assets/icons/logo.png')}
            style={styles.logoImage}
          />
          <Text style={styles.content}>XWeather</Text>
        </View>

        <DrawerItem
          icon={({ color, size }) => {
            return <Icon color={color} size={size} name="crosshairs-gps" />;
          }}
          label="Home"
          onPress={() => {
            props.navigation.navigate('Today');
          }}
        />

        <DrawerItem
          icon={({ color, size }) => {
            return (
              <Icon color={color} size={size} name="city-variant-outline" />
            );
          }}
          label="Search by city name"
          onPress={() => {
            props.navigation.navigate('Hourly');
          }}
        />
      </DrawerContentScrollView>
      <DrawerItem
        style={styles.settings}
        icon={({ color, size }) => {
          return <Icon color={color} size={size} name="cog" />;
        }}
        label="Settings"
        onPress={() => {
          props.navigation.navigate('Hourly');
        }}
      />
    </View>
  );
};

export default CustomDrawerContent;
