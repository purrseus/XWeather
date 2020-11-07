/**
 * @format
 */

import React, { FC } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawerContent from './CustomDrawerContent';
import TabNavigator from 'navigators/tabNavigator';

type DrawerParamsList = {
  Home: undefined;
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
      <Drawer.Screen name="Home" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
