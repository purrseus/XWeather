/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from 'navigators/tabNavigator';

const RootStack = createStackNavigator();

const App: FC = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <NavigationContainer>
        <RootStack.Navigator headerMode="none">
          <RootStack.Screen name="Tab" component={TabNavigator} />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
