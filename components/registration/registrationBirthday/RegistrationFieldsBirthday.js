import { StyleSheet, Text, TextInput, View, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

const RegistrationFieldsBirthday = () => {
  const [date, setDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);

    // Format the selected date (example using toLocaleDateString)
    const formatted = currentDate.toLocaleDateString();
    setFormattedDate(formatted);
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

  return (
    <View style={styles.container}>
      <Text>Birth Date: </Text>
      <View style={styles.input}>
        <Pressable onPress={showDatepicker}>
          <TextInput
            placeholder='My Birth Date'
            placeholderTextColor="#444"
            editable={false}
            value={formattedDate} // Set the TextInput value to formattedDate
          />
        </Pressable>
      </View>
    </View>
  )
}

export default RegistrationFieldsBirthday

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
  },

  textInstruction: {
    alignItems: 'flex-start'
  },

  input: {
    alignItems: 'center',
    width: 320,
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingTop: 5,
    paddingLeft: 10,
    backgroundColor: 'white',
  },

})
