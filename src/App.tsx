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

import { CurrentProvider } from 'providers/currentProvider';
import { ForecastProvider } from 'providers/forecastProvider';

type StackParamsList = {
  Tab: undefined;
};

const RootStack = createStackNavigator<StackParamsList>();

const App: FC = () => {
  return (
    <ForecastProvider>
      <CurrentProvider>
        <>
          <StatusBar translucent backgroundColor="transparent" />
          <NavigationContainer>
            <RootStack.Navigator headerMode="none">
              <RootStack.Screen name="Tab" component={TabNavigator} />
            </RootStack.Navigator>
          </NavigationContainer>
        </>
      </CurrentProvider>
    </ForecastProvider>
  );
};

export default App;
