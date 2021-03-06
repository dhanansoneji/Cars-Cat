import {StyleSheet, Dimensions} from 'react-native';
import {FontSizes, Colors, Layout} from '_theme';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flalistHeight: {
    height: '35%',
  },
  select: {
    fontSize: FontSizes.FONT_SIZE_SUPREME,
    fontFamily: 'monospace',
    color: Colors.RED,
    marginVertical: 10,
  },
  emptylist: {
    color: Colors.GRAY,
    marginTop: 20,
  },
  note: {
    color: Colors.GRAY,
    position: 'absolute',
    bottom: 20,
  },
});

export default Styles;
