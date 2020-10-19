/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import MainNavigation from '_navigations/MainNavigation';
import Loader from '_components/Loader';

import {NativeModules} from 'react-native';

if (__DEV__) {
  NativeModules.DevSettings.setIsDebuggingRemotely(true);
}
class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <MainNavigation />
        <Loader />
      </>
    );
  }
}

export default App;
