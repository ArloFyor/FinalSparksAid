import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ChatBotHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.backButton} source={require('../../assets/Buttons/backButton_White.png')} />
      </TouchableOpacity>

      <Text style={styles.companionName}>SparksAid</Text>

      <Image
      style={styles.companionPicture} 
      source={require('../../assets/SamplePicsAndPosts/ProfilePictures/chatBotPicture.png')}
      />
    </View>
  )
}

export default ChatBotHeader

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5E17EB',
    height: 130,
    alignItems: 'center', // Center child elements vertically
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30, 
  },
  backButton: {
    width: 40,
    height: 40,
    marginTop: 35,
    marginLeft: 35,
  },
  companionPicture:{
    borderRadius: 30,
    height: 55,
    width: 55,
    marginTop: 28,
    marginRight: 25,
  },
  companionName:{
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: 'white',
    marginTop: 30,
    left: 3,
  },

})
