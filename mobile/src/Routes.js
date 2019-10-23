import React from 'react';
import {
  createAppContainer,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Screens from './screens/Screens';
import LoginScreen from './screens/LoginScreen';
import DevsScreen from './screens/DevsScreen';
import DevProfileScreen from './screens/DevProfileScreen';
import LoggedDevScreen from './screens/LoggedDevScreen';
import ChatScreen from './screens/ChatScreen';

export default createAppContainer(
  createStackNavigator({
    Screens, 
    LoginScreen,
    DevsScreen,
    DevProfileScreen,
    LoggedDevScreen,
    ChatScreen
  }, { headerMode: 'none' })
);
