import React, { Component } from 'react';
import {
  Button,
  Text,
  TouchableOpacity,
  View,
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
    const {state, goBack} = this.props.navigation;
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
          产品信息：ID:{state.params.productId} 总计：{state.params.amount}
        </Text>
      </View>
    );
  }
}

