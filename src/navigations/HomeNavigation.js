import React from 'react';

import WelcomeScreen from '_scenes/home/welcome/WelcomeScreen';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeNavigation() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

export default HomeNavigation;
