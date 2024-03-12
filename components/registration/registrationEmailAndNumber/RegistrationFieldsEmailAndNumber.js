import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const registrationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    mobileNumber: yup.string().matches(/^[0-9]+$/, 'Must be only digits').min(10, 'Must be at least 10 digits').max(15, 'Cannot exceed 15 digits').required('Mobile number is required'),
});

const RegistrationFieldsEmailAndNumber = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log("Email:", values.email);
        console.log("Mobile Number:", values.mobileNumber);
        resetForm(); // This will clear the form fields
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

                        <View style={[styles.input2, { marginTop: 20 }]}>
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

    input2: {
        width: 320,
        height: 45,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingTop: 5,
        paddingLeft: 10,
        backgroundColor: 'gray',
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
    },
});
