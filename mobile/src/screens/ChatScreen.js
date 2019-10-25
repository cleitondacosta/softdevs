import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MessageList from '../components/MessageList';
import useChatSample from '../hooks/useChatSample';
import {
  SafeAreaView,
  View,
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
        <TextInput style={styles.chatTextInput} placeholder="Chat"/>
        <TouchableOpacity style={styles.chatButton}>
          <Icon name="md-send" color="#fff" size={32} />
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
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  chatInputContainer: {
    flexDirection: 'row', 
  },
  chatButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#666',
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
