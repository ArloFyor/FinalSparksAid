import React from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet, ImageBackground, Alert} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const validationSchema = Yup.object().shape({
  //username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const App = ({navigation}) => {
  const onLogin = async (email, password) => {
    try {
      const authUser = await signInWithEmailAndPassword(auth, email, password)
      console.log("Successfully logged in: ", email)
      navigation.navigate('HomeScreen')
    } catch(error) {
      Alert.alert("Account not registered", "Please register your account.")
    }
  }
  
  const handleLogin = (values, { errors }) => {
      // Implement login logic here
      onLogin(values.email, values.password)
  };

  return (
    <ImageBackground source={require('../assets/Backgrounds/LoginAndRegistrationBackground.png')} style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.push('OpeningScreen')}>
          <Image style={styles.backButton} source={require('../assets/Buttons/backButton_Black.png')} />
        </TouchableOpacity>
        <Image style={styles.logo} source={require('../assets/LoginAndRegistrationAssets/Logo.png')} />
        <Image style={styles.logoName} source={require('../assets/LoginAndRegistrationAssets/TitleAndTagline.png')} />

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, formikBag) => handleLogin(values, formikBag)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <>
              {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
              <TextInput
                style={[styles.input, touched.email && errors.email && styles.inputError]}
                placeholder="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              
              {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
              <TextInput
                style={[styles.input, touched.password && errors.password && styles.inputError]}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />

              <TouchableOpacity style={styles.forgotPasswordContainer} onPress={() => navigation.push('RegistrationScreenOne')}>
                <Text style={styles.blueLink}>Sign up</Text>
              </TouchableOpacity>    

              <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
                <Image style={styles.loginButton} source={require('../assets/LoginAndRegistrationAssets/loginButtonYellow.png')} />
              </TouchableOpacity>

            </>
          )}
        </Formik>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 50,
  },
  backButton:{
    alignSelf: 'flex-start',
    resizeMode: 'contain',
    top: 10,
    marginLeft: 5,
    width: 80,
    height: 40,
  },
  logo: {
    resizeMode: 'contain',
    height: 230,
    width: 230,
  },
  logoName: {
    resizeMode: 'contain',
    width: '100%',
    height: 150,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 13,
    paddingLeft: 10,
    backgroundColor: 'white', // Input background color
  },
  inputError: {
    borderColor: 'red', // Change outline color to red on error
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginLeft: 40,
  },
  forgotPasswordContainer:{
    marginRight: 40,
    alignSelf: 'flex-end',
  },
  signUpContainer:{
    flexDirection: 'row', 
    marginTop: 5,
  },
  blueLink:{
    textDecorationLine: 'underline',
    color: 'blue',
  },
  loginButton: {
    marginTop: 15,
    width: '55%',
    resizeMode: 'contain',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
