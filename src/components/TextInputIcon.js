import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Icon, Card} from 'react-native-elements';
import {Colors} from '_theme';

function TextInputIcon({
  iconName,
  iconType,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  maxLength,
  editable,
}) {
  return (
    <Card containerStyle={styles.mainCard}>
      <View style={styles.mainView}>
        <Icon
          name={iconName}
          type={iconType}
          size={20}
          color={Colors.DARK_PURPLE}
        />
        <TextInput
          value={value}
          maxLength={maxLength !== undefined ? maxLength : 50}
          keyboardType={keyboardType}
          style={styles.textinput}
          placeholder={placeholder}
          placeholderTextColor={Colors.GRAY}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          editable={editable === undefined ? true : editable}
        />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  mainCard: {
    width: '90%',
    height: 45,
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 0,
    marginTop: 15,
  },
  mainView: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
  },
  textinput: {
    width: '87%',
    marginLeft: 10,
    borderBottomWidth: 0,
    color: Colors.BLACK,
  },
});

export default TextInputIcon;
