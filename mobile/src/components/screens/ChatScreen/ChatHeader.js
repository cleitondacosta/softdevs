import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChatHeader({ receiverName, senderName }) {
  return (
    <View style={styles.header}>
        <Text style={styles.name}>{senderName}</Text>
        <Text>
          chatting with: <Text style={styles.name}>{receiverName}</Text>
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
    fontSize: 16,
    fontFamily: 'Roboto',
  },
});
