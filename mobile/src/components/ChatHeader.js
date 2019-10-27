import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ChatHeader({ sender, recipient }) {
  return (
    <View style={styles.header}>
      <Image style={styles.headerImage} source={{uri: recipient.image}} />

      <View>
        <Text style={styles.devName}>{recipient.name}</Text>
        <View style={styles.horizontalContainer}>
          <Text style={styles.devUsername}> {recipient.username}</Text>
          <Icon style={styles.githubLogo} name="logo-github" size={16} />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
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
