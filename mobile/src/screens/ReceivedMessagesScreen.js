import React from 'react';
import ReceivedMessage from '../components/ReceivedMessage';
import { 
  View,
  Text,
} from 'react-native';

export default function ReceivedMessagesScreen({ navigation }) {
  return (
    <View>
      <ReceivedMessage 
        sender="Comapany Name" 
        messagePreview="Olá! Nós somos a Company Name, empresa [...]"
      />

      <ReceivedMessage 
        sender="Comapany Name" 
        messagePreview="Olá! Nós somos a Company Name, empresa [...]"
        hasNew={true}
      />
    </View>
  );
}
