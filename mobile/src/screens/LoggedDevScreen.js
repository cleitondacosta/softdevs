import React from 'react';
import useDevSample from '../hooks/useDevSample';
import SelectableRepositoryList from '../components/SelectableRepositoryList';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

export default function LoggedDevScreen() {
  const dev = useDevSample()[0];

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.userInfoContainer}>
        <Image style={styles.image} source={{uri: dev.image}} />

        <View>
          <Text style={styles.name}>{dev.name}</Text>
          <Text style={styles.username}>{dev.username}</Text>
          <Text style={styles.bio}>{dev.bio}</Text>
        </View>
      </View>

      <Text style={styles.dataAdvice}>
        Data taken from github.
      </Text>

      <SelectableRepositoryList repositories={dev.repositories} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    margin: 20,
  },
  userInfoContainer: {
    flexDirection: 'row',
  },
  image: {
    height: 150,
    width: 150,
    marginRight: 15,
    borderRadius: 20,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  username: {
    fontStyle: 'italic',
    color: '#666',
    marginBottom: 10,
  },
  bio: {

  },
  dataAdvice: {
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#666',
    marginTop: 15,
  }
});
