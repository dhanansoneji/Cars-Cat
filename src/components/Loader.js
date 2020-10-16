import React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {Layout} from '_theme';
import {Colors} from '_theme';
import {connect} from 'react-redux';

function Loader({isLoading}) {
  return isLoading ? (
    <ActivityIndicator
      animating
      size="large"
      color={Colors.WHITE}
      style={styles.container}
    />
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    height: Layout.SCREEN_HEIGHT + 35,
    width: Layout.SCREEN_WIDTH,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
});

const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = state => {
  return {
    isLoading: state.extraReducer.isLoading,
  };
};

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, null)(Loader);
