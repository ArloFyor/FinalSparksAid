import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import RegistrationTextGender from '../../components/registration/registrationGender/RegistrationTextGender'
import RegistrationChoicesGender from '../../components/registration/registrationGender/RegistrationChoicesGender'

const RegistrationScreenGender = ({navigation}) => {
  return (
    <ImageBackground style={styles.background} source={require('../../assets/Backgrounds/LoginAndRegistrationBackground.png')}   >
        <View style={styles.container}>
            {/*Back Button*/}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Image style={styles.backButton} source={require('../../assets/Buttons/backButton_Black.png')} />
            </TouchableOpacity>

            {/*Image*/}
            <Image style={styles.illustration} source={require('../../assets/LoginAndRegistrationAssets/Illustration_3.png')} />

            {/*Text and Instruction*/}
            <RegistrationTextGender />

            {/*Input Fields*/}
            <RegistrationChoicesGender />

        </View>
    </ImageBackground>
  )
}

export default RegistrationScreenGender

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
      backButton:{
        alignSelf: 'flex-start',
        resizeMode: 'contain',
        top: 10,
        marginLeft: 5,
        width: 80,
        height: 40,
      },

})