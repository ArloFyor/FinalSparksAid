import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RegistrationTextInterests = () => {
  return (
    <View>
      <Text style={styles.questionText}>What are your <Text style={{color:'#E1C340'}}>interests</Text>?</Text>
      <Text style={styles.messageText}>We'd love to know more about what</Text>
      <Text style={styles.messageText}>you usually enjoy.</Text>
    </View>
  )
}

export default RegistrationTextInterests

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
    }
})