'use strict';

import React from 'react';
import {
  AppRegistry,
} from 'react-native';

import { StackNavigator } from 'react-navigation'

import FrameNavigator from './frameNavigator';
import ProductList from './productList';
import ProductDetail from './productDetail';

const App = StackNavigator({
  Main: {
    screen: FrameNavigator,
    navigationOptions: {
      header: {
        title: '杏仁', // 默认后退标题文字
        style: {
          backgroundColor: '#fff'
        },
      }
    }
  },
  ProductList: {
    screen: ProductList,
    navigationOptions: {
    }
  },
  ProductDetail: {
    screen: ProductDetail,
    navigationOptions: {
      // 建议为空，方便具体页面自定义
    }
  }
})

AppRegistry.registerComponent('react0423', () => App);
