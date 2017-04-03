import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import styles from './styles';

export default class Borrowing extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Borrowing!
        </Text>
        <TouchableOpacity onPress={() => navigate('MyCenter')}>
          <Text style={styles.welcome}>
            跳转到 我的
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
