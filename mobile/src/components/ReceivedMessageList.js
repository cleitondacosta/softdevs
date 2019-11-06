import React from 'react';
import ReceivedMessage from '../components/ReceivedMessage';
import { FlatList } from 'react-native';

export default function ReceivedMessageList({navigation, messages}) {
  function renderReceivedMessage(receivedMessage) {
    return (
      <ReceivedMessage
        navigation={navigation}
        sender={receivedMessage.sender}
        messagePreview={receivedMessage.lastMessage}
        hasNew={receivedMessage.isNew}
      />
    );
  }

  return (
    <FlatList
      data={messages}
      renderItem={({item}) => renderReceivedMessage(item)}
      keyExtractor={(item) => item.sender}
    />
  );
}
