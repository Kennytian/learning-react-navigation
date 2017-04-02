import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
};


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
