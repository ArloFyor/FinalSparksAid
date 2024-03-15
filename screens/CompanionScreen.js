import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import CompanionHeader from '../components/companions/CompanionHeader'

const CompanionScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <CompanionHeader navigation={navigation}/>
    </SafeAreaView>
  )
}

export default CompanionScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5DC',
        flex: 1,
      },
})