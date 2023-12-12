import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RegistrationTextOne = () => {
  return (
    <View>
      <Text style={{fontSize: 26, justifyContent: 'center', fontWeight: 700}}>Welcome to Sparks<Text style={{color: '#6237CF'}}>Aid</Text>!</Text>
      <Text>We are glad to be a part of your journey.</Text>
      <Text>First, what is your account type and name?</Text>
    </View>
  )
}

export default RegistrationTextOne

const styles = StyleSheet.create({})