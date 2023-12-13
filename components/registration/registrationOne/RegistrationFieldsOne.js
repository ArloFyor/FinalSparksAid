import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { Formik } from 'formik';
import * as yup from 'yup';

const registrationSchema = yup.object().shape({
  userType: yup.string().oneOf(['Caregiver', 'Patient', 'Guardian'], 'Invalid User Type').required('Required'),
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
});

const onRegister = async (userType, firstName, lastName) => {
  try {
    console.log('User account has been created: ', userType, firstName, lastName);
  } catch (error) {
    console.log(error.message);
  }
};

const RegistrationFieldsOne = ({ navigation }) => {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(""); // Initialize with an empty string
  const [items, setItems] = useState([
    { label: 'Select an option.', value: '' },
    { label: 'Caregiver', value: 'Caregiver' },
    { label: 'Patient', value: 'Patient' },
    { label: 'Guardian', value: 'Guardian' },
  ]);

  return (
    <View>
      <Formik
        initialValues={{ userType: "", firstName: "", lastName: "", }}
        onSubmit={(values, actions) => {
          onRegister(values.userType, values.firstName, values.lastName);
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
                value={value} // Set the value directly from the state
                items={items}
                setOpen={setOpen}
                setValue={(selectedValue) => {
                  setValue(selectedValue);
                  setFieldValue('userType', selectedValue); // Update userType in Formik
                }}
                setItems={setItems}
                style={styles.picker}
                zIndex={1000}
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
  );
};

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

  picker: {
    width: 320,
    height: 50,
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
});

export default RegistrationFieldsOne;
