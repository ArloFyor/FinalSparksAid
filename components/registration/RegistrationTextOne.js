import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RegistrationTextOne = () => {
  return (
    <View>
      <Text style={{fontSize: 30, fontWeight: 700, textAlign: 'center'}}>Welcome to Sparks<Text style={{color: '#6237CF'}}>Aid</Text>!</Text>
      <Text style={{fontSize: 16, textAlign: 'center', marginBottom: 25, fontWeight: 500}}>We are glad to be a part of your journey.</Text>
      <Text style={{fontSize: 16, textAlign: 'center', fontWeight: 500}}>First, what is your <Text style={{color: '#FCC153'}}>account</Text> type and <Text style={{color: '#FCC153'}}>name</Text>?</Text>
    </View>
  )
}

export default RegistrationTextOne

const styles = StyleSheet.create({
  container:{
    textAlign: 'center',
  },
})