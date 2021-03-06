import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function GreyText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: '#666',
  }
});
