import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ChatHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.backButton} source={require('../../assets/Buttons/backButton_White.png')} />
      </TouchableOpacity>
    </View>
  )
}

export default ChatHeader

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5E17EB',
    height: 130,
    justifyContent: 'space-between', // Keep for horizontal centering
    alignItems: 'center', // Center child elements vertically
    flexDirection: 'row',
    borderBottomLeftRadius: 55, 
    borderBottomRightRadius: 55, 
  },
  backButton: {
    width: 40,
    height: 40,
    marginTop: 35,
    marginLeft: 35,

  },
})
