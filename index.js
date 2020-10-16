/**
 * @format
 */
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
// Imports: Dependencies
import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
// Imports: Screens
import App from './App';
// Imports: Redux Persist Persister
import {store, persistor} from '_store/configerStore';
// React Native: App
const AppRedux = () => {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppRedux);
