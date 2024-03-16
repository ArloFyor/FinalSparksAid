import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import ProfileHeader from '../components/profile/ProfileHeader'
import ProfileBody from '../components/profile/ProfileBody'
import { auth } from '../firebase'

const ProfileScreen = ({navigation, route}) => {
  const { emailAddress } = route.params || { emailAddress: auth.currentUser.email };

  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader navigation={navigation} />
      <ProfileBody navigation={navigation} emailAddress={emailAddress}/>
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