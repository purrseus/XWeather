/**
 * @format
 */

import React, { FC } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawerContent from './CustomDrawerContent';
import TabNavigator from 'navigators/tabNavigator';
import SearchScreen from 'screens/SearchScreen';

type DrawerParamsList = {
  Tab: undefined;
  Search: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamsList>();

const DrawerNavigator: FC = () => {
  return (
    <Drawer.Navigator
      drawerType="slide"
      hideStatusBar={true}
      statusBarAnimation="slide"
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Tab" component={TabNavigator} />
      <Drawer.Screen name="Search" component={SearchScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
