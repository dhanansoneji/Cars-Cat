import React from 'react';
import {Text, StyleSheet} from 'react-native';

function MyText({style, text}) {
  return <Text style={[styles.text, style]}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {},
});

export default MyText;
