import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function ErrorText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: '#d9534f',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  }
});
