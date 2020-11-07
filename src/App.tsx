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

import DrawerNavigator from 'navigators/drawerNavigator';
import { ForecastProvider } from 'providers/forecastProvider';

const App: FC = () => {
  return (
    <ForecastProvider>
      <>
        <StatusBar translucent backgroundColor="transparent" />
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </>
    </ForecastProvider>
  );
};

export default App;
