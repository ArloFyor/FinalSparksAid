import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

const RegistrationChoicesGender = () => {
  const route = useRoute(); // Initialize useRoute hook
  const navigation = useNavigation(); // Initialize useNavigation hook
  const [selectedGender, setSelectedGender] = useState(null);

  const handleProceed = () => {
    const { userType, firstName, lastName, birthDate, age } = route.params; // Extracting passed parameters
    
    navigation.navigate('RegistrationScreenInterests', {
      userType: userType,
      firstName: firstName,
      lastName: lastName,
      birthDate: birthDate,
      age: age, 
      gender: selectedGender 
    }); // Navigate to the next screen and pass the gender parameter
  };

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => setSelectedGender('male')}
          activeOpacity={0.7}
        >
          <Image
            source={require('../../../assets/LoginAndRegistrationAssets/Male_Button.png')}
            style={[
              styles.image1,
              selectedGender !== 'male' && styles.grayscale,
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => setSelectedGender('female')}
          activeOpacity={0.7}
        >
          <Image
            source={require('../../../assets/LoginAndRegistrationAssets/Female_Button.png')}
            style={[
              styles.image2,
              selectedGender !== 'female' && styles.grayscale,
            ]}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.proceedButton, selectedGender ? null : styles.disabledButton]}
        onPress={handleProceed}
        disabled={!selectedGender}
      >
        <Image
          style={styles.proceedImage}
          source={require('../../../assets/LoginAndRegistrationAssets/proceedButton.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default RegistrationChoicesGender;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  touchableOpacity: {
    width: '45%',
    alignItems: 'center',
  },
  image1: {
    width: '100%',
    height: 250,
    left: 10,
    marginTop: 25,
    resizeMode: 'contain',
  },
  image2: {
    width: '100%',
    height: 250,
    right: 10,
    marginTop: 25,
    resizeMode: 'contain',
  },
  grayscale: {
    tintColor: 'gray',
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
  disabledButton: {
    opacity: 0.5,
  },
});
