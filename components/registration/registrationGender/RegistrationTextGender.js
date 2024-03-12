import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RegistrationTextGender = () => {
  return (
    <View>
        <Text style={styles.questionText}>Are you<Text style={{color: '#2D9CD7'}}> male</Text> or <Text style={{color: '#D24D9C'}}>female</Text>?</Text>
    </View>
  )
}

export default RegistrationTextGender

const styles = StyleSheet.create({
    questionText:{
        fontSize: 30, 
        fontWeight: '800',
        textAlign: 'center',
        color: '#6237CF',
      },
})