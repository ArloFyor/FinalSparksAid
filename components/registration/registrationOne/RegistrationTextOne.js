import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RegistrationTextOne = () => {
  return (
    <View>
      <Text style={styles.welcomeText}>Welcome to Sparks<Text style={{color: '#6237CF'}}>Aid</Text>!</Text>
      <Text style={styles.followText}>We are glad to be a part of your journey.</Text>
      <Text style={styles.questionText}>First, what is your <Text style={{color: '#FCC153'}}>account</Text> type and <Text style={{color: '#FCC153'}}>name</Text>?</Text>
    </View>
  )
}

export default RegistrationTextOne

const styles = StyleSheet.create({
  welcomeText:{
    fontSize: 30, 
    fontWeight: 'bold',
    textAlign: 'center',
  },
  followText:{
    fontSize: 16, 
    textAlign: 'center', 
    fontWeight: '500',
    marginBottom: 25,
  },
  questionText:{
    fontSize: 16, 
    textAlign: 'center', 
    fontWeight: '500',
    marginBottom: 20,
  },
})
