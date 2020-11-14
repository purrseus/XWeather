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
            style={styles.logoIcon}
          />
          <Text style={styles.content}>XWeather</Text>
        </View>

        <DrawerItem
          labelStyle={styles.font}
          icon={({ color, size }) => {
            return <Icon color={color} size={size} name="cloud-outline" />;
          }}
          label="Home"
          onPress={() => {
            props.navigation.navigate('Weather');
          }}
        />

        <DrawerItem
          labelStyle={styles.font}
          icon={({ color, size }) => {
            return <Icon color={color} size={size} name="map-marker-outline" />;
          }}
          label="Search by city name"
          onPress={() => {
            props.navigation.navigate('Search');
          }}
        />
      </DrawerContentScrollView>

      <DrawerItem
        labelStyle={styles.font}
        style={styles.settings}
        icon={({ color, size }) => {
          return <Icon color={color} size={size} name="cog" />;
        }}
        label="Settings"
        onPress={() => {
          /*...*/
        }}
      />
    </View>
  );
};

export default CustomDrawerContent;
