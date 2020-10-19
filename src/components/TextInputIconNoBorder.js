import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Icon} from 'react-native-elements';
import {Layout} from '_theme';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Colors} from '_theme';

function TextInputIconNoBorder({
  iconName,
  iconType,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  editable,
  maxLength,
  onPress,
}) {
  return (
    <View style={styles.mainView}>
      <Icon name={iconName} type={iconType} size={24} />
      <TextInput
        value={value}
        editable={editable}
        keyboardType={keyboardType}
        maxLength={maxLength !== undefined ? maxLength : 50}
        style={styles.textinput}
        placeholder={placeholder}
        placeholderTextColor={Colors.GRAY}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      {editable ? null : (
        <TouchableWithoutFeedback
          onPress={onPress}
          containerStyle={styles.touch}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: Layout.SCREEN_WIDTH * 0.92,
    height: 44,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
  },
  textinput: {
    width: Layout.SCREEN_WIDTH * 0.82,
    height: '100%',
    marginLeft: 10,
    marginRight: 0.5,
    color: Colors.BLACK,
    borderWidth: 0.5,
    paddingLeft: 10,
    borderRadius: 5,
  },
  touch: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
});

export default TextInputIconNoBorder;
