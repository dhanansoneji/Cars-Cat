import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FontSizes} from '_theme';
import {Icon} from 'react-native-elements';
import {Colors} from '_theme';

function MyButton({text, action, iconName, iconType, disabled, style}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        Styles.buttonView,
        disabled ? Styles.buttonDisable : Styles.buttonEnable,
        style,
      ]}
      onPress={action}
      disabled={disabled}>
      {iconName === undefined ? null : (
        <Icon name={iconName} type={iconType} size={22} color={Colors.WHITE} />
      )}
      <Text style={Styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    borderBottomWidth: 0.5,
    borderRightWidth: 0.5,
  },

  buttonEnable: {
    backgroundColor: Colors.RED,
  },
  buttonDisable: {
    backgroundColor: Colors.GRAY,
  },
  buttonText: {
    color: Colors.WHITE,
    fontWeight: 'bold',
    marginHorizontal: 15,
    fontSize: FontSizes.FONT_SIZE_MEDIUM,
  },
});

export default MyButton;
