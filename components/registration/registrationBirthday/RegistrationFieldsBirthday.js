import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'

const RegistrationFieldsBirthday = () => {
  const [date, setDate] = useState(new Date())
  
  return (
    <View style={styles.container}>
      <DatePicker date={date} onDateChange={setDate} />
    </View>
  )
}

export default RegistrationFieldsBirthday

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
})