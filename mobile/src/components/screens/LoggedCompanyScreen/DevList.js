import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Dev from './Dev';

export default function DevList(props) {
  function renderDev(dev) {
    return (
      <Dev
        image={dev.image}
        name={dev.name}
        username={dev.username}
        bio={dev.bio}
        repositories={dev.repositories}
        navigation={props.navigation}
      />
    );
  }

  return (
    <FlatList
      data={props.devs}
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
