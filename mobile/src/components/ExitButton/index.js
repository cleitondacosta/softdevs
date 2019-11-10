import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default function ExitButton({ style, navigation }) {
  async function handlePress() {
    await AsyncStorage.removeItem('loggedUser');
    navigation.navigate('LoginScreen');
  }

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={handlePress}>
      <Icon style={styles.icon} size={25} name="md-exit" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#d9534f',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
  },
  icon: {
    color: '#fff',
  },
});
