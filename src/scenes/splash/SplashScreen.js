/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {ImageBackground, Image, StatusBar, View} from 'react-native';
import Styles from './Style';
import {GlobalStyles} from '_styles';
import Assets from '_assets';
import {connect} from 'react-redux';

class SplashScreen extends React.Component {
  componentDidMount() {
    StatusBar.setBarStyle('dark-content');
    setTimeout(() => this.props.navigation.replace('Home'), 3000);
  }
  render() {
    return (
      <View style={Styles.container}>
        <ImageBackground
          source={Assets.appBackground}
          style={GlobalStyles.container}
        />
        <View style={Styles.whiteView} />
        <Image source={Assets.logo} />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {};
};

const mapStateToProps = (state) => {
  return {};
};

// eslint-disable-next-line prettier/prettier
export default connect(null, null)(SplashScreen);
