import React, {PureComponent} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const {width} = Dimensions.get('window');

function MiniOfflineSign() {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>No Internet Connection</Text>
    </View>
  );
}

class OfflineNotice extends PureComponent {
  state = {
    isConnected: true,
  };

  componentDidMount() {
    NetInfo.addEventListener(netState => {
      this.setState({isConnected: netState.isConnected});
      console.log('Index Connection type', netState.type);
      console.log('Is connected?', netState.isConnected);
    });
    //NetInfo.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    //unsubscribe()
    //NetInfo.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = isConnected => {
    this.setState({isConnected});
  };

  render() {
    if (!this.state.isConnected) {
      return (
        <View style={styles.view}>
          <MiniOfflineSign />
        </View>
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
    top: 30,
  },
  offlineText: {color: '#fff'},
  view: {
    backgroundColor: 'black',
    height: 65,
    width: Dimensions.get('screen').width,
    //position: 'absolute',
    top: 0,
  },
});

export default OfflineNotice;
