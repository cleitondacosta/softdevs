import React from 'react';
import { 
  Text, 
  TextInput, 
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>SOFTDEVS</Text>

      <TextInput 
        style={styles.loginInput} 
        placeholder="Digite o Login" 
        placeholderTextColor="#bbb"
      />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>
          Logar
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
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
