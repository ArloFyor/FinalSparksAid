import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RegistrationTextBirthday = () => {
  return (
    <View>
      <Text style={styles.questionText}>When is your<Text style={{color: '#E1C340'}}> birthday</Text>?</Text>
      <Text style={styles.messageText}>We'll be sure to send you birthday</Text>
      <Text style={styles.messageText}>wishes!</Text>
    </View>
  )
}

export default RegistrationTextBirthday

const styles = StyleSheet.create({
    questionText:{
        fontSize: 30, 
        fontWeight: '800',
        textAlign: 'center',
        color: '#6237CF',
        marginBottom: 7,
      },

    messageText:{
        fontSize: 15, 
        textAlign: 'center',
    },
})