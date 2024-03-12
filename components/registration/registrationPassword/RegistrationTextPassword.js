import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RegistrationTextPassword = () => {
  return (
    <View>
      <Text style={styles.questionText}>Create a <Text style={{color:'#E1C340'}}>Password</Text></Text>
      
      <Text style={[styles.messageText]}>Enter a password that is both secure and</Text>
      <Text style={styles.messageText}>easy to remember.</Text>

      <Text style={[styles.messageText, {marginTop: 15}]}>Secure passwords have at least <Text style={styles.reminderText}>one</Text></Text>
      <Text style={styles.messageText}><Text style={styles.reminderText}>lowercase </Text>letter, <Text style={styles.reminderText}>one uppercase </Text>letter,</Text>
      <Text style={styles.messageText}><Text style={styles.reminderText}>one number</Text>, and <Text style={styles.reminderText}>one special </Text>character.</Text>
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

    reminderText:{
      color:'#6237CF',
      fontWeight: '800',
    },
})