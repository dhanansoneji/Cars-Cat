import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {Colors} from '_theme';

function AddButton({action}) {
  return (
    <TouchableOpacity style={Styles.addEvent} onPress={action}>
      <View style={Styles.whiteview} />
      <Icon name="pluscircle" type="antdesign" size={50} color={Colors.BLACK} />
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  addEvent: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
  },
  whiteview: {
    alignSelf: 'center',
    position: 'absolute',
    backgroundColor: Colors.WHITE,
    height: 30,
    width: 30,
  },
});

export default AddButton;
