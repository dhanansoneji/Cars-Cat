/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar, ImageBackground, ScrollView} from 'react-native';
import Styles from './Style';
import Text from '_components/MyText';
import Header from '_components/MyHeader';
import Button from '_components/MyButton';
import {GlobalStyles} from '_styles';
import Assets from '_assets';
import {connect} from 'react-redux';
import TextInputIcon from '_components/TextInputIcon';
import {addCatAction, editCatAction} from '_actions';

class AddCatScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    let type = props.route.params.type;
    this.state = {
      isDisable: true,
      user: props.route.params.user,
      type: type,
      cat_id: type === 'add' ? '' : props.route.params.cat_id,
      cat: {
        cat_name: type === 'add' ? '' : props.route.params.cat.cat_name,
        cat_breed: type === 'add' ? '' : props.route.params.cat.cat_breed,
        cat_color: type === 'add' ? '' : props.route.params.cat.cat_color,
        cat_age: type === 'add' ? '' : props.route.params.cat.cat_age,
        cat_sex: type === 'add' ? '' : props.route.params.cat.cat_sex,
      },
    };
    this.handleOnChangeText = this.handleOnChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    StatusBar.setBarStyle('dark-content');
  }
  handleOnChangeText(type, value) {
    this.setState((state, props) => {
      let data = {
        ...state.cat,
        [type]:
          value.length === 1
            ? value.replace(/\s/g, '')
            : value.replace(/\s\s+/g, ' '),
      };
      return {
        ...state,
        cat: data,
        isDisable:
          data.cat_name.trim() === '' ||
          data.cat_breed.trim() === '' ||
          data.cat_color.trim() === '' ||
          data.cat_age.trim() === '' ||
          data.cat_sex.trim() === '',
      };
    });
  }
  handleSubmit() {
    if (this.state.type === 'add') {
      this.props.dispatch(addCatAction(this.state.user.id, this.state.cat));
    } else {
      this.props.dispatch(
        editCatAction(this.state.user.id, this.state.cat_id, this.state.cat),
      );
    }
    this.props.navigation.goBack();
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
          title={
            this.state.type === 'add' ? 'Add Cat Details' : 'Edit Cat Details'
          }
        />
        <ScrollView keyboardShouldPersistTaps="always">
          <TextInputIcon
            iconName="cat"
            iconType="material-community"
            placeholder="Enter Cat Name"
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => this.catBreed.focus()}
            blurOnSubmit={false}
            value={this.state.cat.cat_name}
            onChangeText={(value) => this.handleOnChangeText('cat_name', value)}
          />
          <TextInputIcon
            ref={(ref) => (this.catBreed = ref)}
            iconName="format-list-bulleted-type"
            iconType="material-community"
            placeholder="Enter Cat Breed"
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => this.catColor.focus()}
            blurOnSubmit={false}
            value={this.state.cat.cat_breed}
            onChangeText={(value) =>
              this.handleOnChangeText('cat_breed', value)
            }
          />
          <TextInputIcon
            ref={(ref) => (this.catColor = ref)}
            iconName="colorize"
            iconType="material"
            placeholder="Enter Cat Color"
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => this.catAge.focus()}
            blurOnSubmit={false}
            value={this.state.cat.cat_color}
            onChangeText={(value) =>
              this.handleOnChangeText('cat_color', value)
            }
          />
          <TextInputIcon
            ref={(ref) => (this.catAge = ref)}
            iconName="face"
            iconType="material-community"
            placeholder="Enter Cat Age (Kitten, Young, Adult, Senior)"
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => this.catSex.focus()}
            blurOnSubmit={false}
            value={this.state.cat.cat_age}
            onChangeText={(value) => this.handleOnChangeText('cat_age', value)}
          />
          <TextInputIcon
            ref={(ref) => (this.catSex = ref)}
            iconName="intersex"
            iconType="font-awesome"
            placeholder="Enter Cat Sex (Male, Female)"
            keyboardType="default"
            value={this.state.cat.cat_sex}
            onChangeText={(value) => this.handleOnChangeText('cat_sex', value)}
          />
          <Button
            text={this.state.type === 'add' ? 'Submit' : 'Update'}
            disabled={this.state.isDisable}
            action={() => this.handleSubmit()}
            style={Styles.button}
          />
        </ScrollView>
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
export default connect(mapStateToProps, null)(AddCatScreen);
