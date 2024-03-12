import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RegistrationTextEmailAndNumber = () => {
  return (
    <View>
      <Text style={[styles.questionText, style={marginTop: 10}]}>What is your <Text style={{color:'#E1C340'}}>email</Text> and</Text>
      <Text style={styles.questionText}><Text style={{color:'#E1C340'}}>mobile number</Text>?</Text>

      <Text style={[styles.messageText, {marginTop: 15}]}>These will be used to log in and keep</Text>
      <Text style={styles.messageText}>your account secure, as well as for</Text>
      <Text style={styles.messageText}>receiving important messages from us.</Text>
    </View>
  )
}

export default RegistrationTextEmailAndNumber

const styles = StyleSheet.create({
    questionText:{
        fontSize: 28, 
        textAlign: 'center', 
        fontWeight: '800',
        color: '#6237CF',
    },
    
    messageText:{
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 14,
    },
})