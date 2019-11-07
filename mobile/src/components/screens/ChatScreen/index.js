import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import useDevSample from '../../../hooks/useDevSample';
import useChatSample from '../../../hooks/useChatSample';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native';

export default function ChatScreen() {
  const dev = useDevSample()[0];
  const [chatInputValue, setChatInputValue] = useState('');
  const [chatHistory, setChatHistory] = useState(useChatSample());

  function handleSend() {
    const newMessage = { 
      text: chatInputValue,
      date: 'date',
      alignSelf: 'flex-end',
    };

    setChatHistory([...chatHistory, newMessage]);
    setChatInputValue('');
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ChatHeader receiverName={dev.username} senderName="company1" />
      <MessageList data={chatHistory} />

      <View style={styles.chatInputContainer}>
        <TextInput 
          value={chatInputValue}
          onChangeText={text => setChatInputValue(text)}
          style={styles.chatTextInput} 
          placeholder="Chat"
        />

        <TouchableOpacity style={styles.chatButton} onPress={handleSend}>
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
});
