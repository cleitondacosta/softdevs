import React, { useEffect } from 'react';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import FlexView from '../../FlexView';

export default function AuthLoadingScreen({ navigation }) {
  useEffect(() => {
    async function navigateUserToTheProperScreen() {
      const loggedUser = await AsyncStorage.getItem('loggedUser');

      if(!loggedUser) {
        navigation.navigate('LoginScreen');
      }
      else {
        const { user, isDev } = JSON.parse(loggedUser);

        if(isDev)
          navigation.navigate('LoggedDevScreen', { dev: user });
        else
          navigation.navigate('DevsScreen');
      }
    }

    navigateUserToTheProperScreen();
  }, []);

  return <FlexView><Text>Loading...</Text></FlexView>;
}
