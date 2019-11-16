import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import SelectableRepository from './SelectableRepository';

export default function RepositoryList({ repositories }) {
  return (
    <FlatList style={styles.container}
      data={repositories}
      renderItem={(({item}) => <SelectableRepository repository={item}/>)}
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
