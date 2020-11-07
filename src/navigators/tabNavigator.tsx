/**
 * @format
 */

import React, { FC } from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import {
  BottomTabBarButtonProps,
  BottomTabBarOptions,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import TodayScreen from 'screens/TodayScreen';
import HourlyScreen from 'screens/HourlyScreen';
import DailyScreen from 'screens/DailyScreen';

interface Props {
  focused: boolean;
  color?: string;
  size?: number;
}

type tabBarIconType = {
  tabBarIcon: (props: Props) => React.ReactNode;
};

type TabParamList = {
  Today: tabBarIconType;
  Hourly: tabBarIconType;
  Daily: tabBarIconType;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator: FC = () => {
  const screenOptions: BottomTabNavigationOptions = {
    tabBarButton: (props: BottomTabBarButtonProps) => (
      <TouchableOpacity activeOpacity={0.6} {...props} />
    ),
  };

  const tabBarOptions: BottomTabBarOptions = {
    labelStyle: {
      width: 100,
      fontSize: 14,
      marginBottom: 6,
      fontWeight: 'bold',
      marginTop: -6,
    },
    style: {
      position: 'absolute',
      borderTopWidth: 0,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      height: 70,
      backgroundColor: '#292b36',
    },
    activeTintColor: 'white',
    inactiveTintColor: 'gray',
  };

  return (
    <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
      <Tab.Screen
        name="Today"
        options={{
          tabBarIcon: ({ focused }) => {
            let icon = require('assets/icons/tab/today.png');
            if (focused) {
              icon = require('assets/icons/tab/today-active.png');
            }
            return <Image source={icon} style={styles.today} />;
          },
        }}
        component={TodayScreen}
      />
      <Tab.Screen
        name="Hourly"
        options={{
          tabBarIcon: ({ focused }) => {
            let icon = require('assets/icons/tab/hourly.png');
            if (focused) {
              icon = require('assets/icons/tab/hourly-active.png');
            }
            return <Image source={icon} style={styles.hourly} />;
          },
        }}
        component={HourlyScreen}
      />
      <Tab.Screen
        name="Daily"
        options={{
          tabBarIcon: ({ focused }) => {
            let icon = require('assets/icons/tab/daily.png');
            if (focused) {
              icon = require('assets/icons/tab/daily-active.png');
            }
            return <Image source={icon} style={styles.daily} />;
          },
        }}
        component={DailyScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  today: { width: 32, height: 32 },
  hourly: { width: 26, height: 26 },
  daily: { width: 25, height: 25 },
});

export default TabNavigator;
