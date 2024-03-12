import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import RegistrationTextEmailAndNumber from '../../components/registration/registrationEmailAndNumber/RegistrationTextEmailAndNumber'
import RegistrationFieldsEmailAndNumber from '../../components/registration/registrationEmailAndNumber/RegistrationFieldsEmailAndNumber'

const RegistrationScreenEmailAndNumber = ({navigation}) => {
  return (
    <ImageBackground style={styles.background} source={require('../../assets/Backgrounds/LoginAndRegistrationBackground.png')}>
        <View style={styles.container}>

            {/*Back Button*/}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Image style={styles.backButton} source={require('../../assets/Buttons/backButton_Black.png')} />
            </TouchableOpacity>

            {/*Image*/}
            <Image style={styles.illustration} source={require('../../assets/LoginAndRegistrationAssets/Illustration_5.png')} />

            {/*Text and Instruction*/}
            <RegistrationTextEmailAndNumber/>

            {/*Input Fields*/}
            <RegistrationFieldsEmailAndNumber/>

        </View>
    </ImageBackground>
  )
}

export default RegistrationScreenEmailAndNumber

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
        marginTop: 20,
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