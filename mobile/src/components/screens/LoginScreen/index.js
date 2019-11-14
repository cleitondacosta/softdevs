import React, { useState } from 'react';
import { 
  Text, 
  TextInput, 
  SafeAreaView,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { getUser } from '../../../services/githubUserUtils';

export default function LoginScreen({ navigation }) {
  const [login, setLogin] = useState('');

  async function handleLoginAsDev() {
    const user = await getUser(login);

    if(user) {
      await AsyncStorage.setItem('loggedUser', JSON.stringify({
        isDev: true, 
        user
      }));

      navigation.navigate('LoggedDevScreen', { dev: user });
    }
    else {
      Alert.alert('Error', `Could not found "${login}"`);
    }
  }

  async function handleLoginAsCompany() {
    await AsyncStorage.setItem('loggedUser', JSON.stringify({
      isDev: false, 
      user: login
    }));

    navigation.navigate('LoggedCompanyScreen', { company: login });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>SOFTDEVS</Text>

      <TextInput 
        style={styles.loginInput} 
        value={login}
        onChangeText={text => setLogin(text)}
        placeholder="Enter the login" 
        placeholderTextColor="#bbb"
      />

      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={handleLoginAsDev}
      >
        <Text style={styles.loginButtonText}>
          Login as developer
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={handleLoginAsCompany}
      >
        <Text style={styles.loginButtonText}>
          Login as company
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 25,
    marginBottom: "15%",
  },
  loginInput: {
    borderWidth: 2,
    borderColor: '#ccc',
    height: 40,
    width: "70%",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  loginButton: {
    height: 40,
    width: "70%",
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#111',
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
