import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CompanionHeader = ({navigation}) => {
  return (
    <View style={styles.container}>
      
        <TouchableOpacity onPress={() => navigation.push('HomeScreen')}>
            <Image 
            style={styles.homeButton} 
            source={require('../../assets/Buttons/whiteHomeButton.png')} 
            />
        </TouchableOpacity>
      
        <Text style={styles.companionText}>My <Text style={{color: '#FFBD59'}}>Companions</Text></Text>

        <TouchableOpacity onPress={() => navigation.push('AddCompanionScreen')}>
            <Image 
            style={styles.addButton} 
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
        alignItems: 'center',
        flexDirection: 'row',
      },
      homeButton: {
        width: 60,
        height: 60,
        marginTop: 50,
        marginLeft: 20,
      },
      addButton: {
        width: 60,
        height: 60,
        marginTop: 50,
      },
      companionText: {
        marginTop: 55,
        fontSize: 32,
        color: '#FFFDE7',
      },
})