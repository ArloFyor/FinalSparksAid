import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CompanionHeader = ({navigation}) => {
  return (
    <View style={styles.container}>
      
        <TouchableOpacity style={styles.homeButtonOpacity} onPress={() => navigation.push('HomeScreen')}>
            <Image 
            style={styles.homeButton} 
            source={require('../../assets/Buttons/whiteHomeButton.png')} 
            />
        </TouchableOpacity>
      
        <Text style={styles.companionText}>My <Text style={{color: '#FFBD59'}}>Companions</Text></Text>

        <TouchableOpacity style={styles.homeButtonOpacity} onPress={() => navigation.push('AddCompanionScreen')}>
            <Image 
            style={styles.homeButton} 
            source={require('../../assets/Buttons/addCompanionButton.png')} 
            />
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
        marginTop: 55,
      },
      companionText: {
        marginTop: 55,
        fontSize: 32,
        color: '#FFFDE7',
        marginRight: 0,
      },

      coloredLink:{
        marginTop: 55,
        textDecorationLine: 'underline',
        color: '#FFBD59',
      },
})