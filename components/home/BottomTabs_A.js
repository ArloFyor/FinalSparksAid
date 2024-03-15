import { View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { db, auth } from '../../firebase';
import { signOut } from 'firebase/auth';

const BottomTab = ({ navigation }) => {
  const handleLogoutConfirmation = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', onPress: handleSignout },
      ],
      { cancelable: false }
    );
  };

  const handleSignout = async () => {
    try {
        await signOut(auth);
        console.log('Signed out successfully');
        navigation.navigate("OpeningScreen");
    } catch(error) {
        console.log(error.message);
    }
  };
  
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={require('../../assets/Buttons/Chat_Button.png')} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
          <Image source={require('../../assets/Buttons/Photo_Button.png')} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.push('ProfileScreen')}>
          <Image source={require('../../assets/Buttons/Profile_Button_Transparent.png')} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.push('CompanionScreen')}>
          <Image source={require('../../assets/Buttons/Companions_Button.png')} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogoutConfirmation}>
          <Image source={require('../../assets/Buttons/Logout_Button.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    width: '100%',
    bottom: '0%',
    zIndex: 999,
    backgroundColor: '#6237CF',
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
  },

  icon: {
    width: 50,
    height: 50,
  },
});

export default BottomTab;
