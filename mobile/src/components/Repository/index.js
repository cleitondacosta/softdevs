import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function Repository({ repository }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {repository.name}
      </Text>
      <Text>{repository.description || "No description provided."}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {

  }
});
