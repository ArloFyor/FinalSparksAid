import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import RegistrationTextOne from '../components/registration/registrationOne/RegistrationTextOne'
import RegistrationFieldsOne from '../components/registration/registrationOne/RegistrationFieldsOne'

const RegistrationScreenOne = ({navigation}) => {
  return (
    <ImageBackground style={styles.background} source={require('../assets/Backgrounds/LoginAndRegistrationBackground.png')}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.push('OpeningScreen')}>
          <Image style={styles.backButton} source={require('../assets/Buttons/backButton_Black.png')} />
        </TouchableOpacity>
        <Image style={styles.illustration} source={require('../assets/LoginAndRegistrationAssets/Illustration_1.png')} />
        <RegistrationTextOne/>
        <RegistrationFieldsOne/>
      </View>
    </ImageBackground>
  )
}

export default RegistrationScreenOne

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },  
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 50,
  },
  illustration:{
    resizeMode: 'contain',
    height: 230,
    width: 230,
  },
  textContainer:{
    height: 140,
    width: '100%',
  },

  backButton:{
    alignSelf: 'flex-start',
    resizeMode: 'contain',
    top: 10,
    marginLeft: 5,
    width: 80,
    height: 40,
  },
})