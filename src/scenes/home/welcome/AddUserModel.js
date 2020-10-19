import React from 'react';
import {StyleSheet, View, TouchableOpacity, StatusBar} from 'react-native';
import Layout from '_theme/layout';
import ModalBox from 'react-native-modalbox';
import Button from '_components/MyButton';
import TextInputIcon from '_components/TextInputIcon';
import {Icon} from 'react-native-elements';
import {addUserAction} from '_actions';

class AddUserModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      isDisable: true,
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
        ...state,
        name:
          value.length === 1
            ? value.replace(/\s/g, '')
            : value.replace(/\s\s+/g, ' '),
      };
      return {
        ...data,
        isDisable: data.name.trim().length <= 2,
      };
    });
  }
  handleSubmit() {
    this.props.dispatch(addUserAction(this.state.name.trim()));
    this.props.closeModal();
    this.handleOnChangeText('name', '');
  }

  render() {
    let BContent = (
      <View style={[styles.btn, styles.btnModal]}>
        <TouchableOpacity onPress={this.props.closeModal}>
          <Icon
            name="ios-close-circle"
            type="ionicon"
            size={80}
            color="white"
            iconStyle={styles.alpha}
          />
        </TouchableOpacity>
      </View>
    );
    return (
      <ModalBox
        swipeToClose={false}
        isOpen={this.props.isOpen}
        onClosed={this.props.closeModal}
        position={'center'}
        style={styles.modal}
        backdropPressToClose={false}
        backdropContent={BContent}>
        <View style={styles.mainview}>
          <TextInputIcon
            placeholder="Enter Your Name (3 to 14 characters)"
            keyboardType="default"
            maxLength={14}
            value={this.state.name}
            onChangeText={(value) => this.handleOnChangeText('name', value)}
          />
          <Button
            text="Submit"
            disabled={this.state.isDisable}
            action={() => this.handleSubmit()}
            style={styles.button}
          />
        </View>
      </ModalBox>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height:
      Layout.SCREEN_HEIGHT < 800
        ? Layout.SCREEN_HEIGHT * 0.35
        : Layout.SCREEN_HEIGHT * 0.2,
    width: Layout.SCREEN_WIDTH * 0.95,
    borderRadius: 20,
  },
  btn: {
    backgroundColor: '#3B5998',
    color: 'white',
  },
  btnModal: {
    marginTop:
      Layout.SCREEN_HEIGHT < 800
        ? Layout.SCREEN_HEIGHT * 0.03
        : Layout.SCREEN_HEIGHT * 0.15,
    position: 'absolute',
    width: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainview: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  alpha: {
    opacity: 0.7,
  },
  button: {
    marginTop: 15,
  },
});

// eslint-disable-next-line prettier/prettier
export default AddUserModal;
