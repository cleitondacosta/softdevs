import React, { useEffect } from 'react';
import useReceivedMessagesSample from '../../../hooks/useReceivedMessagesSample';
import ErrorText from '../../ErrorText';
import FlexView from '../../FlexView';
import useSocketIO from '../../../hooks/useSocketIO';
import ReceivedMessageList from './ReceivedMessageList';
import { 
  View,
  Text,
  StyleSheet
} from 'react-native';

export default function ReceivedMessagesScreen({ navigation }) {
  const messages = useReceivedMessagesSample();
  const loggedUser = navigation.getParam('loggedUser', undefined);
  const { socket, error } = useSocketIO(loggedUser);

  useEffect(() => () => socket && socket.close(), []);

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.name}>Messages for you,</Text>
        <Text style={styles.username}>{loggedUser}</Text>
      </View>

      {error
        ? <FlexView><ErrorText>{error}</ErrorText></FlexView>
        : <ReceivedMessageList 
            loggedUser={loggedUser}
            socket={socket}
            messages={messages} 
            navigation={navigation}
          />
      }
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
