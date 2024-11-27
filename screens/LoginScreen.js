// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-paper'; // Correct import
import { loginUser } from '../services/authService';  // Importing the login service


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
    } else {
      try {
        // Call the backend login function
        const userData = await loginUser(email, password);

        // Check if login was successful, and navigate to the next screen (e.g., Home)
        if (userData) {
          console.log('Login successful', userData);
          // You can navigate to another screen here, like HomeScreen
          navigation.navigate("Home");
        }
      } catch (error) {
        Alert.alert('Error', 'Failed to login, please try again.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>
      
      <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={styles.link}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
  },
  link: {
    color: '#007bff',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default LoginScreen;