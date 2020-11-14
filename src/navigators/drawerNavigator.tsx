/**
 * @format
 */

import React, { FC } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawerContent from './CustomDrawerContent';
import TodayScreen from 'screens/WeatherScreen';
import SearchScreen from 'screens/SearchScreen';

type DrawerParamsList = {
  Weather: undefined;
  Search: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamsList>();

const DrawerNavigator: FC = () => {
  return (
    <Drawer.Navigator
      keyboardDismissMode="none"
      drawerType="slide"
      hideStatusBar={true}
      statusBarAnimation="slide"
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Weather" component={TodayScreen} />
      <Drawer.Screen name="Search" component={SearchScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
