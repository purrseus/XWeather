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

import DrawerNavigator from 'navigators/drawerNavigator';
import { ForecastProvider } from 'providers/forecastProvider';
import DailyScreen from 'screens/DailyScreen';

const App: FC = () => {
  const Stack = createStackNavigator();

  return (
    <ForecastProvider>
      <>
        <StatusBar translucent backgroundColor="transparent" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Drawer"
              options={{
                headerShown: false,
              }}
              component={DrawerNavigator}
            />
            <Stack.Screen
              name="Next 7 days"
              options={{
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                headerTransparent: true,
              }}
              component={DailyScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    </ForecastProvider>
  );
};

export default App;
