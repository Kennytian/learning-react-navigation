import React from 'react';
import { Image } from 'react-native';

import { TabNavigator } from 'react-navigation';

import Home from './home';
import Borrowing from './borrowing';
import MyCenter from './mycenter';

const styles = {
  icon: {
    height: 22,
    width: 22,
    resizeMode: 'contain'
  }
};

const MainScreenNavigator = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBar: {
        label: '主页',
        icon: ({tintColor}) => (
          <Image source={require('./../src/images/btn_home_hover.png')} style={[{tintColor: tintColor}, styles.icon]}/>
        )
      }
    },
  },
  Borrowing: {
    screen: Borrowing,
    navigationOptions: {
      tabBar: {
        label: '借款',
        icon: ({tintColor}) => (
          <Image source={require('./../src/images/btn_borrowing_hover.png')} style={[{tintColor: tintColor}, styles.icon]}/>
        )
      }
    },
  },
  MyCenter: {
    screen: MyCenter,
    navigationOptions: {
      tabBar: {
        label: '我的',
        icon: ({tintColor}) => (
          <Image source={require('./../src/images/btn_mycenter_hover.png')} style={[{tintColor: tintColor}, styles.icon]}/>
        )
      }
    },
  }
}, {
  animationEnabled: true, // 切换页面时显示动画
  tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
  swipeEnabled: true, // 允许页面左右侧滑
  backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
  tabBarOptions: {
    activeTintColor: '#FFBB15', // 文字和图片选中颜色
    inactiveTintColor: '#999', // 文字和图片默认颜色
    showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
    indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线
    style: {
      backgroundColor: '#fff', // TabBar 背景色
    },
    labelStyle: {
      fontSize: 12, // 文字大小
    },
  },
});

export default MainScreenNavigator;