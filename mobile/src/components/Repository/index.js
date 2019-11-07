import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function Repository(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {props.repository.name}
      </Text>
      <Text>{props.repository.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {

  }
});
