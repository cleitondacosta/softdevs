import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function BlurredText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    color: '#999',
    fontStyle: 'italic',
  },
});
