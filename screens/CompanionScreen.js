import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import CompanionHeader from '../components/companions/CompanionHeader'
import CompanionBody from '../components/companions/CompanionBody'

const CompanionScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <CompanionHeader navigation={navigation}/>
        <CompanionBody/>
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