import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AddCompanionText = () => {
  return (
    <View>
      <Text style={styles.questionText}>Adding a <Text style={{color: '#E1C340'}}>Companion</Text></Text>

      <Text style={[styles.messageText, {marginTop: 15}]}>Please ask your companion for their</Text>
      <Text style={styles.messageText}>email address and type it below</Text>
    </View>
  )
}

export default AddCompanionText

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