import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const RegistrationFieldsInterests = () => {
    const route = useRoute(); // Initialize useRoute hook
    const navigation = useNavigation(); // Initialize useNavigation hook

    const [interest1, setInterest1] = useState('');
    const [interest2, setInterest2] = useState('');
    const [interest3, setInterest3] = useState('');
    const [proceedDisabled, setProceedDisabled] = useState(true);
    const [input2Disabled, setInput2Disabled] = useState(true);
    const [input3Disabled, setInput3Disabled] = useState(true);

    const handleProceed = () => {
        const { userType, fullName, userName, birthDate, age, gender } = route.params; // Extracting passed parameters
        
        const interests = {
            interestOne: interest1,
            ...(interest2 && { interestTwo: interest2 }), // Include interestTwo only if it has a value
            ...(interest3 && { interestThree: interest3 }), // Include interestThree only if it has a value
        };
        
        navigation.navigate('RegistrationScreenEmailAndNumber', {
            userType: userType,
            fullName: fullName,
            userName: userName,
            birthDate: birthDate,
            age: age,
            gender: gender,
            interests: interests
        }); // Navigate to the next screen and pass interests as parameters
    };

    const handleInterest1Change = (text) => {
        setInterest1(text);
        setProceedDisabled(text === '');
        setInput2Disabled(text === '');
    };

    const handleInterest2Change = (text) => {
        setInterest2(text);
        setInput3Disabled(text === '');
    };

    const handleInterest3Change = (text) => {
        setInterest3(text);
    };

    return (
        <View style={styles.container}>
            <View style={[styles.input, { marginTop: 10 }]}>
                <TextInput
                    placeholder='Interest 1'
                    style={styles.textInput}
                    onChangeText={handleInterest1Change}
                    value={interest1}
                />
            </View>

            <View style={[styles.input2, { marginTop: 15, backgroundColor: input2Disabled ? 'gray' : 'white' }]}>
                <TextInput
                    placeholder='Interest 2'
                    style={styles.textInput}
                    onChangeText={handleInterest2Change}
                    editable={!input2Disabled}
                    value={interest2}
                />
            </View>

            <View style={[styles.input2, { marginTop: 15, backgroundColor: input3Disabled ? 'gray' : 'white' }]}>
                <TextInput
                    placeholder='Interest 3'
                    style={styles.textInput}
                    onChangeText={handleInterest3Change}
                    editable={!input3Disabled}
                    value={interest3}
                />
            </View>

            <TouchableOpacity
                style={[styles.proceedButton, { opacity: proceedDisabled ? 0.5 : 1 }]}
                disabled={proceedDisabled}
                onPress={handleProceed}
            >
                <Image
                    style={styles.proceedImage}
                    source={require('../../../assets/LoginAndRegistrationAssets/proceedButton.png')}
                />
            </TouchableOpacity>
        </View>
    );
};

export default RegistrationFieldsInterests;

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
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
    textInput: {
        textAlignVertical: 'center',
    },
    proceedButton: {
        alignSelf: 'center',
        top: 30,
    },
    proceedImage: {
        width: 150,
        height: 50,
        resizeMode: 'contain',
    },
});
