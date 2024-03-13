import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import { useRoute } from '@react-navigation/native'; // Import useRoute hook
import { auth } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const passwordSchema = yup.object().shape({
    password: yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, 'Please make the Password secure'),
    confirmPassword: yup.string()
      .required('Confirm Password is required')
      .oneOf([yup.ref('password')], 'Passwords must match')
  });

const RegistrationFieldPassword = ({navigation}) => {
  const route = useRoute(); // Initialize useRoute hook

  const onSignup = async(email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      console.log("Account successfully registered")
      navigation.navigate('OpeningScreen')
    } catch(error) {
      Alert.alert('Failure to Register', 'Kindly report this to the researchers.')
    }
  }

  return (
    <Formik
      initialValues={{ password: '', confirmPassword: '' }}
      validationSchema={passwordSchema}
      onSubmit={(values, { resetForm }) => {
        const { userType, firstName, lastName, birthDate, age, gender, interests, email, mobileNumber } = route.params;
        
        /*
        console.log('User Type:', userType);
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Birth Date:', birthDate);
        console.log('Age:', age);
        console.log('Gender:', gender);
        console.log('Interests:', interests);
        console.log('Email:', email);
        console.log('Mobile Number:', mobileNumber);
        console.log('Password:', values.password); */

        onSignup(email, values.password)
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <Text style={[styles.errorText, {right: 8}]}>{touched.password && errors.password}</Text>
          <View style={styles.input}>
            <TextInput
                placeholder='Password'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={true}
            />
          </View>
    
          <Text style={[styles.errorText, {top: 8, right: 8}]}>{touched.confirmPassword && errors.confirmPassword}</Text>
          <View style={[styles.input, {marginTop: 8}]}>
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
        marginTop: 10,
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
    errorText: {
        color: 'red',
        marginLeft: 10,
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
