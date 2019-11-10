import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Repository from '../../Repository';

export default function RepositoryList({ repositories }) {
  return (
    <FlatList style={styles.container}
      data={repositories}
      renderItem={(({item}) => <Repository repository={item}/>)}
      keyExtractor={(item) => item.name}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: "#eee",
    marginTop: 10,
  }
});
