import React, { Component } from 'react';

import { TabNavigator } from "react-navigation";

import PayWithWeChat from './payWithWeChat';
import PayWithAli from './payWithAli';

const paymentChooser = TabNavigator({
  PayWithWeChat: {
    screen: PayWithWeChat,
    // title:'用微信支付'
  },
  PayWithAli: {
    screen: PayWithAli,
    // title:'用支付宝支付'
  },
});

export default paymentChooser;