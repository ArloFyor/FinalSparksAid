import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RegistrationFieldsOne = () => {
  return (
    <View>
      <Text>RegistrationFieldsOne</Text>
    </View>
  )
}

export default RegistrationFieldsOne

const styles = StyleSheet.create({
  input: {
    width: 320,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
  },

  inputError: {
    borderColor: 'red',
  },

  picker: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 13,
    paddingLeft: 10,
    backgroundColor: 'white',
  },

  proceedButton: {
    alignSelf: 'center',
    marginTop: 20,
  },

  proceedImage: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
  },
})