import React, { Component } from 'react';

import { TabNavigator } from "react-navigation";

import PayWithWeChat from './payWithWeChat';
import PayWithAli from './payWithAli';

const paymentChooser = TabNavigator({
  PayWithWeChat: {
    screen: PayWithWeChat,
  },
  PayWithAli: {
    screen: PayWithAli,
  },
}, {
  tabBarOptions: {
    showIcon: false,
    showLabel: true,
    activeTintColor: '#e91e63',
    inactiveTintColor: 'lightgray',
    animationEnabled: true,
    swipeEnabled: false,
    lazyLoad: true,
    style: {backgroundColor: 'white', height: 40, padding: 0, margin: 0},
    labelStyle: {fontSize: 14},
  },
  tabBarPosition: 'top',
});

export default paymentChooser;