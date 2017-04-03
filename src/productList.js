import React, { Component } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';

export default class ProductList extends Component {
  static navigationOptions = {
    title: `产品列表`,
  };

  render() {
    const {navigate, goBack} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to ProductList!
        </Text>
        <TouchableOpacity onPress={()=>goBack()}>
          <Text style={styles.welcome}>
            后退
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('ProductDetail', {
          productId: 20170403,
          year: 2017,
          amount: 5000,
          name: 'Kenny'
        })}>
          <Text style={styles.welcome}>
            跳转到 产品详情
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

