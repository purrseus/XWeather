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
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import TabNavigator from 'navigators/tabNavigator';

import { CurrentProvider } from 'providers/currentProvider';
import MenuBtn from 'components/MenuBtn';

type StackParamsList = {
  Tab: undefined
}

const RootStack = createStackNavigator<StackParamsList>();

const App: FC = () => {
  const screenOptions: StackNavigationOptions = {
    title: '',
    headerStyle: {
      backgroundColor: 'gray',
    },
    headerLeftContainerStyle: {
      paddingHorizontal: 10,
    },
    headerLeft: () => <MenuBtn />,
  }

  return (
    <CurrentProvider>
      <>
        <StatusBar translucent backgroundColor="transparent" />
        <NavigationContainer>
          <RootStack.Navigator
            headerMode="none"
            screenOptions={screenOptions}
          >
            <RootStack.Screen name="Tab" component={TabNavigator} />
          </RootStack.Navigator>
        </NavigationContainer>
      </>
    </CurrentProvider>
  );
};

export default App;
