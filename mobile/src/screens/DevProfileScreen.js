import React from 'react';
import RepositoryList from '../components/RepositoryList';
import useDev from '../hooks/useDev';
import { 
  SafeAreaView,
  Text, 
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

export default function DevProfileScreen(props) {
  const dev = useDev(props.navigation);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{uri: dev.image}} />
      <Text style={styles.name}>{dev.name}</Text>
      <Text style={styles.username}>{dev.username}</Text>

      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>
          Chat
        </Text>
      </TouchableOpacity>

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
    fontSize: 14,
    color: '#888',
  },
  chatButton: {
    marginTop: 10,
    height: 25,
    width: 60,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#111',
  },
  chatButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
