import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';

export default class Home extends Component {
  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Home!
        </Text>
        <TouchableOpacity onPress={() => navigate('Borrowing')}>
          <Text style={styles.welcome}>
            跳转到 借款
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('MyCenter')}>
          <Text style={styles.welcome}>
            跳转到 我的
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('ProductList', {
          year: 2017,
          amount: 5000,
          name: 'Kenny'
        })}>
          <Text style={styles.welcome}>
            跳转到 产品
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}