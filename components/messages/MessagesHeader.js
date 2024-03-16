import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const MessagesHeader = ({navigation}) => {
  return (
    <View style={styles.container}>
      
        <TouchableOpacity style={styles.homeButtonOpacity} onPress={() => navigation.push('HomeScreen')}>
            <Image 
            style={styles.homeButton} 
            source={require('../../assets/Buttons/whiteHomeButton.png')} 
            />
        </TouchableOpacity>
      
        <Text style={styles.companionText}>My <Text style={{color: '#FFBD59'}}>Messages</Text></Text>

    </View>
  )
}

export default MessagesHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6237CF',
        height: 130,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      },
      homeButtonOpacity: {
        alignSelf: 'flex-start',
      },
      homeButton: {
        width: 70,
        height: 70,
        marginTop: 55,
        marginLeft: 10,
      },
      companionText: {
        marginTop: 55,
        fontSize: 32,
        color: '#FFFDE7',
        marginRight: 15,
      },
})