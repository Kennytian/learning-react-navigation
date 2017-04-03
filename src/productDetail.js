import React, { Component } from 'react';
import {
  Button,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';

export default class ProductDetail extends Component {
  static navigationOptions = {
    title: ({state}) => `${state.params.name}的产品`,
    header: ({dispatch, goBack, navigate, state, setParams}) => {
      let left = (
        <Button title='自定义后退' onPress={() => goBack()}/>
      );
      let right = (
        <Button title='分享' onPress={() => setParams({mode: `${state.params.productId} id info`})}/>
      );
      return {left, right};
    },
  };

  render() {
    const {navigate, state, goBack} = this.props.navigation;
    const {productId, amount} = state.params;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to ProductDetail!
        </Text>
        <TouchableOpacity onPress={() => goBack()}>
          <Text style={styles.welcome}>
            后退
          </Text>
        </TouchableOpacity>
        <Text style={styles.welcome}>
          产品信息：ID:{productId} 总计：{amount}
        </Text>
        <TouchableOpacity onPress={() => navigate('paymentChooser')}>
          <Text style={styles.welcome}>
            进入支付选择页
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

