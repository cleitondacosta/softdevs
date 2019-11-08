import React from 'react';
import useRepos from '../../../hooks/useRepos';
import Icon from 'react-native-vector-icons/Ionicons';
import SelectableRepositoryList from './SelectableRepositoryList';
import ErrorText from '../../ErrorText';
import FlexView from '../../FlexView';
import BlurredText from '../../BlurredText';

import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function LoggedDevScreen({ navigation }) {
  const dev = navigation.getParam('dev', undefined);
  const { repositories, repoError } = useRepos(dev.login);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.userInfoContainer}>
        <ImageBackground
          style={styles.imageOuterContainer} 
          imageStyle={styles.image}
          source={{uri: dev.avatar_url}}
        >
          <TouchableOpacity onPress={() => navigation.navigate('ReceivedMessagesScreen')}>
            <Icon style={styles.chatIcon} name="ios-chatboxes" size={25} />
          </TouchableOpacity>
        </ImageBackground>

        <View>
          <Text style={styles.name}>{dev.name}</Text>
          <BlurredText style={styles.username}>{dev.login}</BlurredText>
          <Text>{dev.bio || "No bio provided."}</Text>
        </View>
      </View>

      <BlurredText style={styles.dataAdvice}>
        Data taken from github.
      </BlurredText>

      {repoError 
        ? <FlexView><ErrorText>Error: {repoError}</ErrorText></FlexView>
        : <SelectableRepositoryList repositories={repositories} />
      }

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
  imageOuterContainer: {
    flexDirection: 'column-reverse',
    height: 150,
    width: 150,
    marginRight: 15,
  },
  image: {
    borderRadius: 20,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  username: {
    marginBottom: 10,
  },
  chatIcon: {
    alignSelf: 'flex-end',    
    margin: 10,
    color: '#fff',
    backgroundColor: '#000',
    borderRadius: 5,
    padding: 5,
  },
  dataAdvice: {
    textAlign: 'center',
    marginTop: 25,
  },
});
