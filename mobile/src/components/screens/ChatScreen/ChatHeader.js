import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChatHeader({ receiverName, senderName }) {
  return (
    <View style={styles.header}>
        <Text>
          Logged as: <Text style={styles.name}>{senderName}</Text>
        </Text>
        <Text>
          Chatting with: <Text style={styles.name}>{receiverName}</Text>
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  name: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 16,
  },
});
