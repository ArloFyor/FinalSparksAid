import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import { useRoute } from '@react-navigation/native'; // Import useRoute hook
import { auth, db } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';

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

  const getRandomProfilePicture = async() => {
    return "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
  }

  const onSignup = async(email, password, userType, fullName, userName, birthDate, age, gender, interests, mobileNumber) => {
    try {
      const authUser = await createUserWithEmailAndPassword(auth, email, password)
      
      console.log("Account successfully registered")

      const userEmail = authUser.user.email;
      const sanitizedEmail = userEmail.replace(/\./g, '_'); // Replace '.' with '_' to sanitize email
      const docRef = await setDoc(doc(collection(db, 'users'), sanitizedEmail), {
          owner_uid: authUser.user.uid,
          userType: userType,
          fullName: fullName,
          userName: userName,
          birthDate: birthDate,
          age: age,
          gender: gender,
          interests: interests,
          mobileNumber: mobileNumber,
          email: userEmail,
          profile_picture: await getRandomProfilePicture(),
      });

      const userDocRef = doc(collection(db, 'users'), sanitizedEmail)
      const companionCollectionRef = collection(userDocRef, 'companions')

      const devEmail = 'sparksaid@gmail.com'

  
      addDoc(companionCollectionRef, {
        email:devEmail
      });

      const devDocRef = doc(collection(db, 'users'), devEmail.replace(/\./g, '_'))
      const devCompanionCollectionRef = collection(devDocRef, 'companions')

      addDoc(devCompanionCollectionRef, {
        email:auth.currentUser.email
      });

      
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
        const { userType, fullName, userName, birthDate, age, gender, interests, email, mobileNumber } = route.params;
        
        /*
        console.log('User Type:', userType);
        console.log('First Name:', fullName);
        console.log('Last Name:', userName);
        console.log('Birth Date:', birthDate);
        console.log('Age:', age);
        console.log('Gender:', gender);
        console.log('Interests:', interests);
        console.log('Email:', email);
        console.log('Mobile Number:', mobileNumber);
        console.log('Password:', values.password); */

        onSignup(email, values.password, userType, fullName, userName, birthDate, age, gender, interests, mobileNumber)
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
