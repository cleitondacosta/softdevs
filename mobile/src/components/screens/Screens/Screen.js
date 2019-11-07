import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Screen({ name, navigation }) {
  return (
    <TouchableOpacity 
      style={styles.button}
      onPress={() => navigation.navigate(name)}
    >
      <Text style={styles.buttonText}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 150,
    margin: 5,
    backgroundColor: '#ddd',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  }
})
