import React from 'react';
import useReceivedMessagesSample from '../../../hooks/useReceivedMessagesSample';
import ReceivedMessageList from './ReceivedMessageList';
import { 
  View,
  Text,
  StyleSheet
} from 'react-native';

export default function ReceivedMessagesScreen({ navigation }) {
  const messages = useReceivedMessagesSample();

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.name}>Messages for you,</Text>
        <Text style={styles.username}>username</Text>
      </View>

      <ReceivedMessageList messages={messages} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    padding: 10,
    elevation: 2,
  },
  name: {
    fontSize: 18,
  },
  username: {
    fontStyle: 'italic',
    fontSize: 15,
  },
});
