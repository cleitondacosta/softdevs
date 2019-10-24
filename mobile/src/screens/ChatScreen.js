import React from 'react';
import MessageList from '../components/MessageList';
import useChatSample from '../hooks/useChatSample';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native';

export default function ChatScreen() {
  const chatHistory = useChatSample();

  return (
    <SafeAreaView style={styles.rootContainer}>
      <MessageList data={chatHistory} />

      <View style={styles.chatInputContainer}>
        <TextInput style={styles.chatTextInput} placeholder="Chat with user"/>
        <TouchableOpacity style={styles.chatButton}>
          <Text style={styles.chatButtonText}>
            Send
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  chatTextInput: {
    flex: 4,
    padding: 10,
  },
  chatInputContainer: {
    flexDirection: 'row', 
  },
  chatButton: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  chatButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  emptyChat: {
    color: '#666',
    textAlign: 'center',
  }
});
