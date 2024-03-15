import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CompanionHeader = ({navigation}) => {
  return (
    <View style={styles.container}>
      
        <TouchableOpacity style={styles.homeButtonOpacity} onPress={() => navigation.push('HomeScreen')}>
            <Image 
            style={styles.homeButton} 
            source={require('../../assets/Buttons/Home_Button_wText.png')} 
            />
        </TouchableOpacity>
      
        <TouchableOpacity onPress={() => navigation.push('AddCompanionScreen')}>
        <Text style={styles.companionText}>My <Text style={{color: '#FFBD59'}}>Companion</Text></Text>
        </TouchableOpacity>
    </View>
  )
}

export default CompanionHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6237CF',
        height: 130,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      },
    
      logo: {
          width: '60%',
          height: '80%',
          resizeMode: 'contain',
          marginTop: 55,
          marginLeft: 5,
          marginRight: 5,
      },
    
      homeButtonOpacity: {
        alignSelf: 'flex-start',
      },
      homeButton: {
        width: 70,
        height: 70,
        marginLeft: 20,
        marginTop: 50,
      },
      companionText: {
        marginTop: 55,
        fontSize: 28,
        color: '#FFFDE7',
        marginRight: 15,
      },

      coloredLink:{
        marginTop: 55,
        textDecorationLine: 'underline',
        color: '#FFBD59',
      },
})