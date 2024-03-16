import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import MessagesHeader from '../components/messages/MessagesHeader'
import MessagesBody from '../components/messages/MessagesBody'

const MessagesScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <MessagesHeader navigation={navigation}/>
        <MessagesBody navigation={navigation}/>
    </SafeAreaView>
  )
}

export default MessagesScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5DC',
        flex: 1,
      },
})