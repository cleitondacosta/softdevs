import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AuthLoadingScreen from './components/screens/AuthLoadingScreen';
import LoginScreen from './components/screens/LoginScreen';
import LoggedCompanyScreen from './components/screens/LoggedCompanyScreen';
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
    LoggedCompanyScreen,
    DevProfileScreen,
    ChatScreen,
    ReceivedMessagesScreen,
  }, { headerMode: 'none' }
);

export default createAppContainer(
  createSwitchNavigator({
    AuthLoadingScreen,
    LoginScreen,
    devStack,
    companyStack,
  })
);
