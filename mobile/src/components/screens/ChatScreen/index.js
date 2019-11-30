import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import AsyncStorage from '@react-native-community/async-storage';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  StyleSheet
} from 'react-native';


export default function ChatScreen({ navigation }) {
  const socket = navigation.getParam('socket', undefined);
  const loggedUser = navigation.getParam('loggedUser', undefined);
  const chattingWith = navigation.getParam('chattingWith', undefined);
  const [chatInputValue, setChatInputValue] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    socket.on('incoming message', message => {
      setChatHistory([...chatHistory, message]);
    });
  }, []);

  useEffect(() => {
    async function fetchChatHistoryFromStorate() {
      const stringChatHistory = await AsyncStorage.getItem('chatHistory');

      if(stringChatHistory) {
        const chatHistoryAsJson = JSON.parse(stringChatHistory);
        setChatHistory(chatHistoryAsJson);
      }
    }

    fetchChatHistoryFromStorate();
  }, []);

  async function handleSend() {
    try {
      const newMessage = {
        text: chatInputValue.trim(),
        date: 'date',
        from: loggedUser,
        to: chattingWith,
        alignSelf: 'flex-end',
      };

      socket.emit('message', newMessage);
      setChatInputValue('');
      setChatHistory([...chatHistory, newMessage]);

      await AsyncStorage.setItem('chatHistory', JSON.stringify(chatHistory));
    }
    catch(err) {
      Alert.alert('Error', err.message);
    }
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ChatHeader loggedUser={loggedUser} chattingWith={chattingWith} />
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
