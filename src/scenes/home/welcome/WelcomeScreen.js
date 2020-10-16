/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar, ImageBackground} from 'react-native';
import Styles from './Style';
import {GlobalStyles} from '_styles';
import Assets from '_assets';
import {connect} from 'react-redux';

class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisable: true,
      auth: {
        name: '',
      },
    };
    this.handleOnChangeText = this.handleOnChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    StatusBar.setBarStyle('dark-content');
  }
  handleSubmit() {}
  handleOnChangeText(type, value) {
    this.setState((state, props) => {
      let data = {
        ...state.auth,
        [type]: value,
      };
      return {
        ...state,
        auth: data,
        isDisable: data.name.trim() === '',
      };
    });
  }
  render() {
    return (
      <ImageBackground
        source={Assets.appBackground}
        style={GlobalStyles.container}
      />
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
export default connect(null, null)(WelcomeScreen);
