import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GreyText from '../../GreyText';

export default function Message({ text, date, alignSelf }) {
  return (
    <View style={[styles.container, { alignSelf }]}>
      <Text style={styles.text}>{text}</Text>
      <GreyText>{date}</GreyText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    backgroundColor: "#fff",
    marginBottom: 6,
    borderRadius: 6,
    padding: 5,
  },
  text: {
    fontSize: 18,
    marginBottom: 2,
  },
});
