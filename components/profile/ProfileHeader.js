import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ProfileHeader = ({navigation}) => {
  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.homeButtonOpacity} onPress={() => navigation.push('HomeScreen')}>
        <Image 
          style={styles.homeButton} 
          source={require('../../assets/Buttons/Home_Button_wText.png')} 
        />
      </TouchableOpacity>
      
      <Image
        style={styles.logo}
        source={require('../../assets/HeaderTexts/ProfileScreenText.png')}
      />

    </View>
  )
}

export default ProfileHeader

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6237CF',
    height: 130,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  logo: {
      width: '40%',
      height: '40%',
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
})