import React from 'react';
import Message from './Message';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function MessageList({ data }) {
  function renderMessage(messageData) {
    return <Message 
      text={messageData.text} 
      date={messageData.date} 
      align={messageData.align} 
    />
  }

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={({item}) => renderMessage(item)}
      keyExtractor={(item, index) => `${index}`}
    />
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 10,
  },
});
