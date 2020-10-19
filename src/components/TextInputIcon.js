import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Icon, Card} from 'react-native-elements';
import {Colors, Layout} from '_theme';

export const TextInputIcon = React.forwardRef((props, ref) => {
  return (
    <Card containerStyle={styles.mainCard}>
      <View style={styles.mainView}>
        <Icon
          name={props.iconName}
          type={props.iconType}
          size={20}
          color={Colors.RED}
        />
        <TextInput {...props} ref={ref} style={styles.textinput} />
      </View>
    </Card>
  );
});

const styles = StyleSheet.create({
  mainCard: {
    width: Layout.SCREEN_WIDTH * 0.9,
    height: 55,
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 0,
    marginVertical: 20,
    elevation: 5,
    borderRadius: 10,
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
