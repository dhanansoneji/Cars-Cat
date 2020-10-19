import React from 'react';

import WelcomeScreen from '_scenes/home/welcome/WelcomeScreen';
import MyCatsScreen from '_scenes/home/cats/myCats/MyCatsScreen';
import AddCatScreen from '_scenes/home/cats/addCat/AddCatScreen';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeNavigation() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="MyCats" component={MyCatsScreen} />
      <Stack.Screen name="AddCat" component={AddCatScreen} />
    </Stack.Navigator>
  );
}

export default HomeNavigation;
