import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RegistrationTextPassword = () => {
  return (
    <View>
      <Text style={styles.questionText}>Create a <Text style={{color:'#E1C340'}}>Password</Text></Text>
      
      <Text style={[styles.messageText]}>Enter a password that is both secure</Text>
      <Text style={styles.messageText}>and easy to remember.</Text>
    </View>
  )
}

export default RegistrationTextPassword

const styles = StyleSheet.create({
    questionText:{
        fontSize: 30, 
        textAlign: 'center', 
        fontWeight: '800',
        marginBottom: 15,
        color: '#6237CF',
    },
    messageText:{
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 16,
    },
})