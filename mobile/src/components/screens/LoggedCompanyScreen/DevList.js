import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Dev from './Dev';

export default function DevList({ devs, navigation }) {
  function renderDev(dev) {
    return (
      <Dev
        image={dev.avatar_url}
        name={dev.name}
        username={dev.login}
        bio={dev.bio}
        navigation={navigation}
      />
    );
  }

  return (
    <FlatList
      data={devs}
      renderItem={({item}) => renderDev(item)}
      keyExtractor={(item) => item.username}
      style={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});
