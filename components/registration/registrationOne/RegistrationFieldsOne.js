import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import { Picker } from '@react-native-picker/picker'
import { Formik } from 'formik'
import * as yup from 'yup'

const registrationSchema = yup.object().shape({
  userType: yup.string().oneOf(['caregiver', 'patient', 'guardian'], 'Invalid User Type').required('Required'),
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
})

const getRandomProfilePicture = async () => {
  const response = await fetch('https://randomuser.me/api');
  const data = await response.json();
  return data.results[0].picture.large
}

const onRegister = async (userType, firstName, lastName) => {
  try {
    console.log('User account has been created: ', userType, firstName, lastName)
  } catch (error) {
    console.log(error.message);
  }
}

const RegistrationFieldsOne = ({navigation}) => {
  return (
    <View>
      <Formik
        initialValues={{userType: "", firstName: "", lastName: "",}}
        onSubmit={(values, actions) => {
          onRegister(values.userType, values.firstName, values.lastName);
          actions.resetForm();
        }}
        validationSchema={registrationSchema}
        validateOnMount={true}
      >

        {({handleBlur, handleChange, handleSubmit, isValid, values, errors}) => (
          <>
          
            <View style={styles.picker}>
              <Picker
                selectedValue={values.userType}
                onValueChange={handleChange('userType')}
                onBlur={handleBlur('userType')}
                mode="dropdown"
              >
                <Picker.Item label="Select an account type." value="" color="gray" />
                <Picker.Item label="Caregiver" value="caregiver" color="black" />
                <Picker.Item label="Patient" value="patient" color="black" />
                <Picker.Item label="Guardian" value="guardian" color="black" />
              </Picker>
            </View>

            <View style={styles.input}>
              <TextInput
                placeholderTextColor="#444"
                placeholder="First Name"
                autoCapitalize="none"
                textContentType="username"
                onChangeText={(text) => handleChange('firstName')(text)}
                onBlur={handleBlur('firstName')}
                value={values.firstName}
              />
            </View>

            <View style={styles.input}>
              <TextInput
                placeholderTextColor="#444"
                placeholder="Last Name"
                autoCapitalize="none"
                textContentType="username"
                onChangeText={(text) => handleChange('lastName')(text)}
                onBlur={handleBlur('lastName')}
                value={values.lastName}
              />
            </View>


            <TouchableOpacity
              style={[styles.proceedButton, !isValid && styles.disabledProceedButton]}
              onPress={handleSubmit}
              disabled={!isValid}
            >
              <Image style={styles.proceedImage} source={require('../../../assets/LoginAndRegistrationAssets/proceedButton.png')} />
            </TouchableOpacity>

          </>
        )} 
      </Formik>
    </View>
  )
}

export default RegistrationFieldsOne

const styles = StyleSheet.create({
  input: {
    width: 320,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    paddingTop: 5,
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

  disabledProceedButton: {
    opacity: 0.5, 
  },
})