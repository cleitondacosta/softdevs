import React from 'react';
import Screen from '../components/Screen';
import { FlatList } from 'react-native';

export default function Screens({ navigation }) {
  const screens = [
    {title: "LoginScreen"},
    {title: "DevsScreen"},
    {title: "DevProfileScreen"},
    {title: "LoggedDevScreen"},
    {title: "ChatScreen"},
    {title: "ReceivedMessagesScreen"},
  ];

  return (
    <FlatList 
      data={screens}
      keyExtractor={item => item.title} 
      numColumns={2}
      renderItem={({item}) => (
        <Screen
          name={item.title} 
          navigation={navigation} 
        />
      )
      }
    />
  );
}
