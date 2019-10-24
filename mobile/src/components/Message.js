import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Message({ text, date, align }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {text}
      </Text>

      <Text style={styles.date}>
        {date}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    maxWidth: "80%",
    backgroundColor: "#fff",
    marginBottom: 6,
    borderRadius: 6,
    padding: 5,
  },
  text: {
    fontSize: 18,
    marginBottom: 2,
  },
  date: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#666',
  },
});
