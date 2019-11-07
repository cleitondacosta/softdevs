import React, { useRef } from 'react';
import Message from './Message';
import { FlatList, StyleSheet } from 'react-native';

export default function MessageList({ data }) {
  const flatListRef = useRef(null);

  function renderMessage(messageData) {
    return <Message 
      text={messageData.text} 
      date={messageData.date} 
      alignSelf={messageData.alignSelf} 
    />
  }

  return (
    <FlatList
      style={styles.container}
      ref={flatListRef}
      onContentSizeChange={() => flatListRef.current.scrollToEnd()}
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
