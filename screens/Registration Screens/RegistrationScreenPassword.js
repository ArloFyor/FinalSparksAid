import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import RegistrationTextPassword from '../../components/registration/registrationPassword/RegistrationTextPassword'
import RegistrationFieldPassword from '../../components/registration/registrationPassword/RegistrationFieldPassword'

const RegistrationScreenPassword = ({navigation}) => {
  return (
    <ImageBackground style={styles.background} source={require('../../assets/Backgrounds/LoginAndRegistrationBackground.png')}   >
        <View style={styles.container}>
            {/*Back Button*/}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Image style={styles.backButton} source={require('../../assets/Buttons/backButton_Black.png')} />
            </TouchableOpacity>

            {/*Image*/}
            <Image style={styles.illustration} source={require('../../assets/LoginAndRegistrationAssets/Illustration_6.png')} />

            {/*Text and Instruction*/}
            <RegistrationTextPassword />

            {/*Input Fields*/}
            <RegistrationFieldPassword navigation={navigation} />

        </View>
    </ImageBackground>
  )
}

export default RegistrationScreenPassword

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