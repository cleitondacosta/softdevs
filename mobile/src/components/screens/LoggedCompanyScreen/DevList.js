import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Dev from './Dev';

export default function DevList({ devs, navigation }) {
  function renderDev(dev) {
    return <Dev navigation={navigation} dev={dev} />;
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
