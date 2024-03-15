import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebase';
import { collection, doc, getDoc } from 'firebase/firestore';

const Header_A = () => {
  const userEmail = auth.currentUser.email;
  const sanitizedEmail = userEmail.replace(/\./g, '_');
  const [profilePicture, setProfilePicture] = useState('');

  useEffect(() => {
    const getProfilePicture = async () => {
      const docRef = doc(db, 'users', sanitizedEmail);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProfilePicture(docSnap.data().profile_picture);
      } else {
        console.log('No such document!');
      }
    }

    getProfilePicture();
  }, []);

  return (
    <View style={styles.container}>

      <Image
        style={styles.logo}
        source={require('../../assets/HeaderTexts/HomeScreenText.png')}
      />

      {profilePicture && <Image
        style={styles.profilePic}
        source={{ uri: profilePicture }}
      />}

    </View>
  )
}

const styles = StyleSheet.create({
    
    container: {
        backgroundColor: '#6237CF',
        height: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },

    logo: {
        width: '40%',
        height: '35%',
        resizeMode: 'contain',
        marginTop: 55,
        marginLeft: 5,
    },

    profilePic: {
        flexDirection: "row",
        width: 50,
        height: 50,
        borderRadius: 50,
        borderColor: '#FFBD59',
        top: 20,
        marginRight: 15,
    },
})

export default Header_A