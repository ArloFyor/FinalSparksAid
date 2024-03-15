import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import ProfileHeader from '../components/profile/ProfileHeader'
import ProfileBody from '../components/profile/ProfileBody'

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader navigation={navigation} />
      <ProfileBody />
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5DC',
    flex: 1,
  },
})