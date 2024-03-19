import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ProfileHeader = ({navigation}) => {
  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.backButtonOpacity} onPress={() => navigation.goBack()}>
        <Image 
          style={styles.backButton} 
          source={require('../../assets/Buttons/backButton_White.png')} 
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

  backButtonOpacity: {
    alignSelf: 'flex-start',
  },
  backButton: {
    width: 40,
    height: 40,
    marginLeft: 25,
    marginTop: 70,
  },
})