import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Screens from './components/screens/Screens';
import LoginScreen from './components/screens/LoginScreen';
import DevsScreen from './components/screens/DevsScreen';
import DevProfileScreen from './components/screens/DevProfileScreen';
import LoggedDevScreen from './components/screens/LoggedDevScreen';
import ChatScreen from './components/screens/ChatScreen';
import ReceivedMessagesScreen from './components/screens/ReceivedMessagesScreen';

export default createAppContainer(
  createStackNavigator({
    Screens, 
    LoginScreen,
    DevsScreen,
    DevProfileScreen,
    LoggedDevScreen,
    ChatScreen,
    ReceivedMessagesScreen,
  }, { headerMode: 'none' })
);
