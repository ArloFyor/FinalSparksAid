import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';

const registrationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
});

const AddCompanionField = () => {

  const handleSubmit = (values, { resetForm }) => {
    console.log(values)
};

  return (
    <View style={styles.container}>
    <Formik
        initialValues={{ email: '' }}
        onSubmit={handleSubmit}
        validationSchema={registrationSchema}
    >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid, dirty }) => (
            <>
                <View style={styles.input}>
                    <TextInput
                        placeholder='Email'
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                    {errors.email && touched.email && <Text style={styles.errorText}>{errors.email}</Text>}
                </View>

                <TouchableOpacity
                    style={[styles.proceedButton, (!isValid || !dirty) && styles.disabledButton]}
                    onPress={handleSubmit}
                    disabled={!isValid || !dirty}
                >
                    <Image
                        style={styles.proceedImage}
                        source={require('../../../assets/LoginAndRegistrationAssets/addButton.png')}
                    />
                </TouchableOpacity>
            </>
        )}
    </Formik>
</View>
  )
}

export default AddCompanionField

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
},
input: {
    width: 320,
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingTop: 5,
    paddingLeft: 10,
    backgroundColor: 'white',
},
proceedButton: {
    alignSelf: 'center',
    top: 30,
},
disabledButton: {
    opacity: 0.5,
},
proceedImage: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
},
errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    right: 10,
    bottom: 52
},
})