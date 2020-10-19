/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StatusBar,
  ImageBackground,
  View,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import Styles from './Style';
import Text from '_components/MyText';
import FlotingButton from '_components/AddButton';
import AddUserModel from './AddUserModel';
import User from '_components/User';
import {GlobalStyles} from '_styles';
import Assets from '_assets';
import {connect} from 'react-redux';
import {deleteUserAction} from '_actions';

class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModelVisible: false,
      refresh: true,
    };
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
    this.showModel = this.showModel.bind(this);
  }
  componentDidMount() {
    StatusBar.setBarStyle('dark-content');
  }
  showModel(isVisible) {
    this.setState((state, props) => {
      return {
        ...state,
        isModelVisible: isVisible,
      };
    });
  }
  handleDeleteUser(index, name) {
    Alert.alert(
      'Alert',
      `Press yes if you want to delete this user (${name.toUpperCase()})`,
      [
        {
          text: 'Yes',
          onPress: () => {
            this.props.dispatch(deleteUserAction(index));
            this.setState({
              refresh: !this.state.refresh,
            });
          },
        },
        {text: 'No', onPress: () => {}},
      ],
      {cancelable: false},
    );
  }

  render() {
    return (
      <View style={Styles.container}>
        <ImageBackground
          source={Assets.appBackground}
          style={GlobalStyles.container}
        />
        <Image source={Assets.welcome} style={Styles.welcome} />
        <Text style={Styles.select} text="Selcet User" />
        <View style={Styles.flalistHeight}>
          <FlatList
            data={this.props.users}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <User
                text={item.name}
                action={() =>
                  this.props.navigation.navigate('MyCats', {
                    user: {id: index, ...item},
                  })
                }
                onDeleteUser={() => this.handleDeleteUser(index, item.name)}
              />
            )}
            ListEmptyComponent={
              <Text text="No Users Found" style={Styles.emptylist} />
            }
          />
        </View>
        <FlotingButton
          action={() => {
            this.setState((state, props) => {
              return {
                ...state,
                isModelVisible: true,
              };
            });
          }}
        />
        <AddUserModel
          isOpen={this.state.isModelVisible}
          closeModal={() => this.showModel(false)}
          dispatch={this.props.dispatch}
        />
        <Text text="Long Press on User to Delete" style={Styles.note} />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {};
};

const mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
  };
};

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, null)(WelcomeScreen);
