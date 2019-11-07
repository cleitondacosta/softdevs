import React from 'react';
import { 
  Text, 
  TextInput, 
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function LoginScreen({ navigation }) {
  function handleLoginAsDev() {
    navigation.navigate('LoggedDevScreen');
  }

  function handleLoginAsCompany() {
    navigation.navigate('DevsScreen');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>SOFTDEVS</Text>

      <TextInput 
        style={styles.loginInput} 
        placeholder="Type the login" 
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
