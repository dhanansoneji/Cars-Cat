import {StyleSheet, Dimensions} from 'react-native';
import {FontSizes, Colors, Layout} from '_theme';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptylist: {
    color: Colors.GRAY,
    marginTop: 20,
    alignSelf: 'center',
    fontSize: FontSizes.FONT_SIZE_DEFAULT,
  },
  flatList: {
    paddingBottom: 40,
  },
});

export default Styles;
