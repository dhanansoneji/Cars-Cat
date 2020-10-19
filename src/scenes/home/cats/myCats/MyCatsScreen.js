/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar, ImageBackground, FlatList, View, Alert} from 'react-native';
import Styles from './Style';
import Text from '_components/MyText';
import Header from '_components/MyHeader';
import CatDetails from '_components/CatDetails';
import User from '_components/User';
import {GlobalStyles} from '_styles';
import Assets from '_assets';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {deleteCatAction} from '_actions';
import {Colors} from '_theme';

class MyCatsScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      user: props.route.params.user,
      refresh: true,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    StatusBar.setBarStyle('dark-content');
    this._focus = this.props.navigation.addListener('focus', () => {
      this.setState({
        refresh: !this.state.refresh,
      });
    });
  }
  componentWillUnmount() {
    this._focus();
  }
  handleDelete(index, cat_name) {
    Alert.alert(
      'Alert',
      `Press yes if you want to delete this cat (${cat_name.toUpperCase()})`,
      [
        {
          text: 'Yes',
          onPress: () => {
            this.props.dispatch(deleteCatAction(this.state.user.id, index));
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
      <>
        <ImageBackground
          source={Assets.appBackground}
          style={GlobalStyles.container}
        />
        <Header
          iconName="arrow-back"
          iconType="material"
          onPress={() => this.props.navigation.goBack()}
          title={this.state.user.name}
          rightComponent={
            <Icon
              name="add"
              type="material"
              size={30}
              color={Colors.RED}
              onPress={() =>
                this.props.navigation.navigate('AddCat', {
                  user: this.state.user,
                  type: 'add',
                })
              }
            />
          }
        />
        <FlatList
          data={this.props.users[this.state.user.id].cats}
          extraData={this.state.refresh}
          contentContainerStyle={Styles.flatList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <CatDetails
              data={item}
              number={index + 1}
              onEditPress={() =>
                this.props.navigation.navigate('AddCat', {
                  user: this.state.user,
                  type: 'edit',
                  cat: item,
                  cat_id: index,
                })
              }
              onDeletePress={() => this.handleDelete(index, item.cat_name)}
            />
          )}
          ListEmptyComponent={
            <Text text="No Cats Found" style={Styles.emptylist} />
          }
        />
      </>
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
export default connect(mapStateToProps, null)(MyCatsScreen);
