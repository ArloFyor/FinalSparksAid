import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';

const OpeningScreen = ({navigation}) => {
  return (
    <ImageBackground style={styles.background} source={require('../assets/Backgrounds/LoginAndRegistrationBackground.png')}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/LoginAndRegistrationAssets/Logo.png')} />
        <Image style={styles.logoName} source={require('../assets/LoginAndRegistrationAssets/TitleAndTagline.png')} />

        <TouchableOpacity style={[styles.button, { backgroundColor: '#E1C340' }]} onPress={() => navigation.push('RegistrationScreenGender')}> 
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={[styles.button, { backgroundColor: '#E1C340' }]} onPress={() => navigation.push('LoginScreen')}>
          <Text style={styles.buttonText}>Log in</Text>
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
    bottom: 60,
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
  button: {
    marginTop: 20,
    padding: 15,
    borderRadius: 15,
    width: '60%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
});

export default OpeningScreen;
