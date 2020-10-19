import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FontSizes, Colors, Layout} from '_theme';
import {Icon} from 'react-native-elements';

function User({text, action, iconName, iconType, style, onDeleteUser}) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[Styles.buttonView, style]}
      delayLongPress={500}
      onLongPress={onDeleteUser}
      onPress={action}>
      {iconName === undefined ? null : (
        <Icon name={iconName} type={iconType} size={22} color={Colors.WHITE} />
      )}
      <Text style={Styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  buttonView: {
    width: Layout.SCREEN_WIDTH * 0.75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    elevation: 5,
    padding: 10,
    borderRadius: 25,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    color: Colors.BLACK,
    fontWeight: 'bold',
    marginHorizontal: 15,
    fontSize: FontSizes.FONT_SIZE_MEDIUM,
  },
});

export default User;
