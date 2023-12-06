import { View, SafeAreaView, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header_A from '../components/home/Header_A'
import Suggested_Activities from '../components/home/Suggested_Activities'

const HomeScreen = () => {
  return (
    <SafeAreaView style = {styles.container}>
        <Header_A/>
        <Suggested_Activities/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5DC',
        flex: 1,
    },
})

export default HomeScreen