import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import RegistrationTextOne from '../components/registration/RegistrationTextOne'

const RegistrationScreenOne = ({navigation}) => {
  return (
    <ImageBackground style={styles.background} source={require('../assets/Backgrounds/LoginAndRegistrationBackground.png')}>
      <View style={styles.container}>
        <Image style={styles.illustration} source={require('../assets/LoginAndRegistrationAssets/Illustration_1.png')} />
        <RegistrationTextOne/>
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
    bottom: 160,
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
})