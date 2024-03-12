import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { Formik } from 'formik';
import * as yup from 'yup';


const registrationSchema = yup.object().shape({
  userType: yup.string().oneOf(['patient', 'caregiver', 'guardian']).required('Required'),
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
});

const onRegister = (userType, firstName, lastName) => {
  try {
    console.log('User account has been created: ', userType, firstName, lastName);
  } catch (error) {
    console.log(error.message);
  }
};

const RegistrationFieldsOne = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [items, setItems] = useState([
    {label: 'Patient', value: 'patient'},
    {label: 'Caregiver', value: 'caregiver'},
    {label: 'Guardian', value: 'guardian'}
  ])
  
  return (
    <View>
      <Formik
        initialValues={{userType: "", firstName: "", lastName: "",}}
        onSubmit={(values, actions) => {
          onRegister(values.userType, values.firstName, values.lastName);
          setValue(""); //Resets the dropdown value
          actions.resetForm();
        }}
        validationSchema={registrationSchema}
        validateOnMount={true}
      >

      {({ handleBlur, handleChange, handleSubmit, isValid, values, errors, setFieldValue }) => (
        <>
          <View>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              onChangeValue={(value) => handleChange('userType')(value)}
              containerStyle={styles.picker}
              placeholder='Select User Type'
            />
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
                style={[styles.proceedButton, !isValid ? styles.disabledProceedButton : null, {top: 15}]}
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
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    top: 10,
    paddingTop: 5,
    paddingLeft: 10,
    backgroundColor: 'white',
  },

  picker: {
    width: 320,
    height: 40,
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
});