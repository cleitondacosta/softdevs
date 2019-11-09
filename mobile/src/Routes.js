import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './components/screens/LoginScreen';
import DevsScreen from './components/screens/DevsScreen';
import DevProfileScreen from './components/screens/DevProfileScreen';
import LoggedDevScreen from './components/screens/LoggedDevScreen';
import ChatScreen from './components/screens/ChatScreen';
import ReceivedMessagesScreen from './components/screens/ReceivedMessagesScreen';

const devStack = createStackNavigator({
    LoggedDevScreen,
    ChatScreen,
    ReceivedMessagesScreen,
  }, { headerMode: 'none' }
);

const companyStack = createStackNavigator({
    DevsScreen,
    DevProfileScreen,
    ChatScreen,
    ReceivedMessagesScreen,
  }, { headerMode: 'none' }
);

export default createAppContainer(
  createSwitchNavigator({
    LoginScreen,
    devStack,
    companyStack,
  })
);
