import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';

const passwordSchema = yup.object().shape({
    password: yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'),
    confirmPassword: yup.string()
      .required('Confirm Password is required')
      .oneOf([yup.ref('password')], 'Passwords must match')
  });

const RegistrationFieldPassword = () => {
  return (
    <Formik
      initialValues={{ password: '', confirmPassword: '' }}
      validationSchema={passwordSchema}
      onSubmit={(values, { resetForm }) => {
        console.log('Password:', values.password);
        resetForm();
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <View style={styles.input}>
            <TextInput
                placeholder='Password'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={true}
            />
          </View>
    
          <View style={[styles.input, {marginTop: 25}]}>
            <TextInput
                placeholder='Confirm Password'
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry={true}
            />
          </View>
    
          <TouchableOpacity style={[styles.proceedButton, (errors.password || errors.confirmPassword || values.password === '' || values.password !== values.confirmPassword) ? styles.disabledButton : null]} disabled={errors.password || errors.confirmPassword || values.password === '' || values.password !== values.confirmPassword} onPress={handleSubmit}>
                <Image
                    style={styles.proceedImage}
                    source={require('../../../assets/LoginAndRegistrationAssets/proceedButton.png')}
                />
          </TouchableOpacity>
    
        </View>
      )}
    </Formik>
  )
}

export default RegistrationFieldPassword

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
    disabledButton: {
        opacity: 0.5,
    },
    proceedImage: {
        width: 150,
        height: 50,
        resizeMode: 'contain',
    },
    proceedButton: {
        alignSelf: 'center',
        top: 30,
    },
})
