import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import {useRoute, useNavigation } from '@react-navigation/native';

const registrationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    mobileNumber: yup.string().matches(/^[0-9]+$/, 'Must be only digits').min(11, 'Must be at least 11 digits').max(15, 'Cannot exceed 15 digits').required('Mobile number is required'),
});

const RegistrationFieldsEmailAndNumber = () => {
    const route = useRoute(); // Initialize useRoute hook
    const navigation = useNavigation(); // Initialize useNavigation hook
    
    const handleSubmit = (values, { resetForm }) => {
        const { userType, fullName, userName, birthDate, age, gender, interests } = route.params; // Extracting passed parameters

        // Navigate to the next screen and pass the parameters
        navigation.navigate('RegistrationScreenPassword', {
            userType: userType,
            fullName: fullName,
            userName: userName,
            birthDate: birthDate,
            age: age,
            gender: gender,
            interests: interests,
            email: values.email,
            mobileNumber: values.mobileNumber,
        });
    };

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ email: '', mobileNumber: '' }}
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

                        <View style={[styles.input, { marginTop: 25 }]}>
                            <TextInput
                                placeholder='Mobile No.'
                                onChangeText={(value) => {
                                    // Ensure only digits are entered
                                    if (/^\d*$/.test(value)) {
                                        handleChange('mobileNumber')(value);
                                    }
                                }}
                                onBlur={handleBlur('mobileNumber')}
                                value={values.mobileNumber}
                                keyboardType='numeric' // Allow only numeric keyboard
                            />
                            {errors.mobileNumber && touched.mobileNumber && <Text style={styles.errorText}>{errors.mobileNumber}</Text>}
                        </View>

                        <TouchableOpacity
                            style={[styles.proceedButton, (!isValid || !dirty) && styles.disabledButton]}
                            onPress={handleSubmit}
                            disabled={!isValid || !dirty}
                        >
                            <Image
                                style={styles.proceedImage}
                                source={require('../../../assets/LoginAndRegistrationAssets/proceedButton.png')}
                            />
                        </TouchableOpacity>
                    </>
                )}
            </Formik>
        </View>
    );
};

export default RegistrationFieldsEmailAndNumber;

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
});
