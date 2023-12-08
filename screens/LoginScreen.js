import React from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const App = () => {
  const handleLogin = (values) => {
    // Implement login logic here
    console.log('Form values:', values);
  };

  return (
    <ImageBackground source={require('../assets/Backgrounds/LoginAndRegistrationBackground.png')} style={styles.background}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/LoginAndRegistrationAssets/Logo.png')} />
        <Image style={styles.logoName} source={require('../assets/LoginAndRegistrationAssets/TitleAndTagline.png')} />

        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => handleLogin(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <>
              <TextInput
                style={[styles.input, touched.username && errors.username && styles.inputError]}
                placeholder="Username"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
              />

              <TextInput
                style={[styles.input, touched.password && errors.password && styles.inputError]}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />

              <TouchableOpacity style={styles.registerLinkContainer} onPress={() => console.log('Navigate to Registration Screen')}>
                <Text style={styles.registerLink}>Click here to register</Text>
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
    marginTop: 3,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white', // Input background color
  },
  inputError: {
    borderColor: 'red', // Change outline color to red on error
  },
  registerLinkContainer: {
    marginTop: 5,
    marginBottom: 20,
    marginRight: 40,
    alignSelf: 'flex-end',
  },
  registerLink:{
    textDecorationLine: 'underline',
    color: 'blue',
  },
  loginButton: {
    top: 5,
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
