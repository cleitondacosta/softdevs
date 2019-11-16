import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ReceivedMessagesButton({ style, navigation }) {
  function handlePress() {
    navigation.navigate('ReceivedMessagesScreen');
  }

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={handlePress}>
      <Icon style={styles.icon} size={25} name="md-chatboxes" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    borderRadius: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
  },
});
