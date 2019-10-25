import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MessageList from '../components/MessageList';
import useDevSample from '../hooks/useDevSample';
import useChatSample from '../hooks/useChatSample';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
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
      <View style={styles.header}>
        <Image style={styles.headerImage} source={{uri: dev.image}} />

        <View>
          <Text style={styles.devName}>{dev.name}</Text>
          <View style={styles.horizontalContainer}>
            <Text style={styles.devUsername}> {dev.username}</Text>
            <Icon style={styles.githubLogo} name="logo-github" size={16} />
          </View>
        </View>

      </View>

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
  emptyChat: {
    color: '#666',
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerImage: {
    height: 50,
    width: 50,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 1.5,
    borderColor: 'lightgreen',
  },
  devName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  devUsername: {
    color: '#999',
    fontStyle: 'italic',
  },
  githubLogo: {
    marginLeft: 1,
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
