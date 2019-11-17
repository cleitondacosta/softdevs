import React from 'react';
import usePublicRepos from '../../../hooks/usePublicRepos';
import RepositoryList from './RepositoryList';
import GreyText from '../../GreyText';
import FlexView from '../../FlexView';
import ErrorText from '../../ErrorText';
import ReceivedMessagesButton from '../../ReceivedMessagesButton';
import { 
  SafeAreaView,
  Text, 
  StyleSheet,
  Image,
} from 'react-native';

export default function DevProfileScreen({ navigation }) {
  const dev = navigation.getParam('dev', null);
  const { repositories, fetchError } = usePublicRepos(dev.login);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{uri: dev.avatar_url}} />
      <Text style={styles.name}>{dev.name}</Text>
      <GreyText style={styles.username}>{dev.login}</GreyText>
      <ReceivedMessagesButton style={styles.chatButton} navigation={navigation} />

      {fetchError 
        ? <FlexView><ErrorText>{fetchError}</ErrorText></FlexView>
        : <RepositoryList repositories={repositories} />
      }
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
    marginTop: 30,
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
