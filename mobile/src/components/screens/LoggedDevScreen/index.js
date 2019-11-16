import React from 'react';
import useRepos from '../../../hooks/useRepos';
import SelectableRepositoryList from './SelectableRepositoryList';
import ErrorText from '../../ErrorText';
import FlexView from '../../FlexView';
import BlurredText from '../../BlurredText';
import ExitButton from '../../ExitButton';
import ReceivedMessagesButton from '../../ReceivedMessagesButton';

import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StyleSheet
} from 'react-native';

export default function LoggedDevScreen({ navigation }) {
  const dev = navigation.getParam('dev', undefined);
  const { repositories, handleRepoToggle, repoError } = useRepos(dev);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.userInfoContainer}>
        <ImageBackground
          style={styles.imageOuterContainer} 
          imageStyle={styles.image}
          source={{uri: dev.avatar_url}}
        >
          <ReceivedMessagesButton style={styles.chatButton} navigation={navigation}/>
          <ExitButton style={styles.exitButton} navigation={navigation} />
        </ImageBackground>

        <View>
          <Text style={styles.name}>{dev.name}</Text>
          <BlurredText style={styles.username}>{dev.login}</BlurredText>
          <Text>{dev.bio || "No bio provided."}</Text>
        </View>
      </View>

      {repoError 
        ? <FlexView><ErrorText>Error: {repoError}</ErrorText></FlexView>
        : <SelectableRepositoryList 
            repositories={repositories}
            onToggle={handleRepoToggle}
          />
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
    justifyContent: 'space-between',
    height: 150,
    width: 150,
    marginRight: 15,
    padding: 10,
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
  chatButton : {
    alignSelf: 'flex-end',    
  },
  exitButton: {
    alignSelf: 'flex-end',
  },
});
