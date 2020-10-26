/**
 * @format
 */

import React, { FC } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TodayScreen from 'screens/TodayScreen';
import HourlyScreen from 'screens/HourlyScreen';
import DailyScreen from 'screens/DailyScreen';

const Tab = createBottomTabNavigator();

const TabNavigator: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{tabBarButton: props => <TouchableOpacity {...props} />}}
      tabBarOptions={{
        labelStyle: {
          width: 100,
          fontSize: 14,
          marginBottom: 6,
          fontWeight: 'bold',
          marginTop: -6,
        },
        style: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 70,
          backgroundColor: '#292b36',
        },
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Today"
        options={{
          tabBarIcon: ({ focused }) => {
            let icon = require('assets/icons/today.png');
            if (focused) icon = require('assets/icons/today-active.png');
            return <Image source={icon} style={{ width: 28, height: 28 }} />;
          },
        }}
        component={TodayScreen}
      />
      <Tab.Screen
        name="Hourly"
        options={{
          tabBarIcon: ({ focused }) => {
            let icon = require('assets/icons/hourly.png');
            if (focused) icon = require('assets/icons/hourly-active.png');
            return <Image source={icon} style={{ width: 24, height: 24 }} />;
          },
        }}
        component={HourlyScreen}
      />
      <Tab.Screen
        name="Daily"
        options={{
          tabBarIcon: ({ focused }) => {
            let icon = require('assets/icons/daily.png');
            if (focused) icon = require('assets/icons/daily-active.png');
            return <Image source={icon} style={{ width: 23, height: 23 }} />;
          },
        }}
        component={DailyScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
