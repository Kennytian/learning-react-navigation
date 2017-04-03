import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';

class PayWithAli extends Component {
  static navigationOptions = {
    title: ({state}) => `支付宝支付`,
  };

  render() {
    const {navigate, state, goBack} = this.props.navigation;
    return (
      <View>
        <Text>用支付宝支付</Text>
        <TouchableOpacity onPress={() => goBack()}>
          <Text style={styles.welcome}>
            后退
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default PayWithAli;