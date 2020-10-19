import {StyleSheet} from 'react-native';
import {Layout, Colors} from '_theme';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteView: {
    height: Layout.SCREEN_HEIGHT * 0.5,
    width: Layout.SCREEN_WIDTH * 0.7,
    position: 'absolute',
    backgroundColor: Colors.WHITE,
  },
});

export default Styles;
