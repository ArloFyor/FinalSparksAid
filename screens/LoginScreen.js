import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet, ImageBackground } from 'react-native';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <ImageBackground source={require('../assets/Backgrounds/LoginAndRegistrationBackground.png')} style={styles.background}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/LoginAndRegistrationAssets/Logo.png')} />
        <Image style={styles.logoName} source={require('../assets/LoginAndRegistrationAssets/TitleAndTagline.png')} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.registerLinkContainer} onPress={() => console.log('Navigate to Registration Screen')}>
          <Text style={styles.registerLink}>Click here to register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Image style={styles.loginButton} source={require('../assets/LoginAndRegistrationAssets/loginButtonYellow.png')} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 50,
  },
  logo: {
    resizeMode: 'contain',
    height: 230,
    width: 230,
  },
  logoName: {
    resizeMode: 'contain',
    width: '100%',
    height: 150,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 3,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white', // Input background color
  },
  registerLinkContainer: {
    marginTop: 5,
    marginBottom: 20,
    marginRight: 40,
    alignSelf: 'flex-end',
  },
  registerLink:{
    textDecorationLine: 'underline',
    color: 'blue',
  },
  loginButton: {
    top: 5,
    width: '55%',
    resizeMode: 'contain',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
