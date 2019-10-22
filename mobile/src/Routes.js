import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';

import Screens from './screens/Screens';
import LoginScreen from './screens/LoginScreen';
import DevsScreen from './screens/DevsScreen';
import DevProfileScreen from './screens/DevProfileScreen';
import LoggedDevScreen from './screens/LoggedDevScreen';
import ChatScreen from './screens/ChatScreen';

export default createAppContainer(
  createSwitchNavigator({
    Screens, 
    LoginScreen,
    DevsScreen,
    DevProfileScreen,
    LoggedDevScreen,
    ChatScreen
  })
);
