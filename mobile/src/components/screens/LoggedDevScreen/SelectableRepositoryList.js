import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import SelectableRepository from './SelectableRepository';

export default function RepositoryList({ repositories, onToggle }) {
  return (
    <FlatList style={styles.container}
      data={repositories}
      renderItem={(({item}) => <SelectableRepository repository={item} onToggle={onToggle}/>)}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: "#eee",
    marginTop: 30,
  }
});
