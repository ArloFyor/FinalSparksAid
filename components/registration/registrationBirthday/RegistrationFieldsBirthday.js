import { StyleSheet, Text, TextInput, View, Image, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

const RegistrationFieldsBirthday = () => {
  const [date, setDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState('');
  const [age, setAge] = useState('');
  const [inputFieldStyle, setInputFieldStyle] = useState(styles.inputField2);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);

    // Format the selected date (example using toLocaleDateString)
    const formatted = currentDate.toLocaleDateString();
    setFormattedDate(formatted);

    // Calculate age
    const today = new Date();
    const birthDate = new Date(currentDate);
    let userAge = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      userAge--;
    }
    setAge(userAge.toString());
    setInputFieldStyle(styles.inputField); // Change input field style
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
      display: 'spinner'
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const handleProceed = () => {
    console.log("Date:", date.toISOString().slice(0, 10));
    console.log("Age:", age);
  };

  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 3}}>Birth Date: </Text>
      <View>
        <Pressable onPress={showDatepicker} style={styles.inputField}>
          <TextInput
            placeholder='Click Here'
            placeholderTextColor="#444"
            editable={false}
            value={formattedDate} // Set the TextInput value to formattedDate
            style={styles.inputValue}
          />
        </Pressable>
      </View>

      <Text style={{marginTop: 10, marginBottom: 3}}>Your age is: </Text>
      <View style={inputFieldStyle}>
        <TextInput
            placeholder=''
            placeholderTextColor="#444"
            editable={false}
            value={age} // Set the TextInput value to age
            style={styles.inputValue}
          />
      </View>

      <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
        <Image style={styles.proceedImage} source={require('../../../assets/LoginAndRegistrationAssets/proceedButton.png')} />
      </TouchableOpacity>
    </View>
  )
}

export default RegistrationFieldsBirthday

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 25,
  },

  textInstruction: {
    alignItems: 'flex-start'
  },

  inputField: {
    width: 320,
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
  },

  inputField2: {
    width: 320,
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#EEEEEE', // Lighter shade of gray
  },

  inputValue: {
    alignSelf: 'center',
    top: 7,
    color: '#444'
  },

  proceedButton: {
    alignSelf: 'center',
    marginTop: 40,
  },

  proceedImage: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
  },

})
