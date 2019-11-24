import React from 'react';
import ReceivedMessage from './ReceivedMessage';
import { FlatList } from 'react-native';

export default function ReceivedMessageList({navigation, socket, messages, loggedUser}) {
  function renderReceivedMessage(receivedMessage) {
    return (
      <ReceivedMessage
        socket={socket}
        navigation={navigation}
        chattingWith={receivedMessage.sender}
        loggedUser={loggedUser}
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
