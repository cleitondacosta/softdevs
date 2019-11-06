import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ChatHeader({ receiver }) {
  return (
    <View style={styles.header}>
      <Image style={styles.headerImage} source={{uri: receiver.image}} />

      <View>
        <Text style={styles.name}>{receiver.name}</Text>
        <View style={styles.horizontalContainer}>
          <Text style={styles.username}> {receiver.username}</Text>
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
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  username: {
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
