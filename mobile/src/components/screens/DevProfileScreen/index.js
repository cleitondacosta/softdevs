import React from 'react';
import RepositoryList from './RepositoryList';
import useDevSample from '../../../hooks/useDevSample';
import GreyText from '../../GreyText';
import ReceivedMessagesButton from '../../ReceivedMessagesButton';
import { 
  SafeAreaView,
  Text, 
  StyleSheet,
  Image,
} from 'react-native';

export default function DevProfileScreen({ navigation }) {
  const dev = useDevSample()[0];

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{uri: dev.image}} />
      <Text style={styles.name}>{dev.name}</Text>
      <GreyText style={styles.username}>{dev.username}</GreyText>
      <ReceivedMessagesButton style={styles.chatButton} navigation={navigation} />
      <RepositoryList repositories={dev.repositories} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150,
    alignSelf: 'center',
    marginTop: 50,
  },
  name: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  username: {
    textAlign: 'center',
  },
  chatButton: {
    alignSelf: 'center',
  },
});
