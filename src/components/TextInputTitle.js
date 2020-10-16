import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import {Card} from 'react-native-elements';
import {FontSizes} from '_theme';
import {Colors} from '_theme';
import {Layout} from '_theme';

function TextInputTitle({
  title,
  placeholder,
  value,
  onChangeText,
  keyboardType,
}) {
  return (
    <View style={styles.mainview}>
      <Text style={styles.text}>{title}</Text>
      <Card containerStyle={styles.mainCard}>
        <View style={styles.mainView}>
          <TextInput
            value={value}
            keyboardType={keyboardType}
            style={styles.textinput}
            placeholder={placeholder}
            placeholderTextColor={Colors.GRAY}
            onChangeText={onChangeText}
          />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  mainview: {
    width: Layout.SCREEN_WIDTH * 0.9,
    marginTop: 15,
  },
  mainCard: {
    width: '100%',
    height: 45,
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 0,
    marginTop: 5,
  },
  mainView: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
  },
  text: {
    fontSize: FontSizes.FONT_SIZE_DEFAULT,
    color: Colors.GRAY,
  },
  textinput: {
    width: '98%',
    borderBottomWidth: 0,
    color: Colors.BLACK,
  },
});

export default TextInputTitle;
