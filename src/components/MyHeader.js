import React from 'react';
import {StyleSheet} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {FontSizes} from '_theme';
import {Colors} from '_theme';

function MyHeader({iconName, iconType, title, onPress, rightComponent}) {
  return (
    <Header
      statusBarProps={{translucent: true}}
      backgroundColor={Colors.WHITE}
      containerStyle={styles.container}
      leftComponent={
        <Icon name={iconName} type={iconType} size={24} onPress={onPress} />
      }
      rightComponent={rightComponent === undefined ? null : rightComponent}
      centerComponent={{
        text: title,
        style: {
          color: Colors.BLACK,
          fontWeight: 'bold',
          fontSize: FontSizes.FONT_SIZE_DEFAULT,
        },
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
  menuOption: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default MyHeader;
