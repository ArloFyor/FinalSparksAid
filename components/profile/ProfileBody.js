import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { auth, db } from '../../firebase'; // Assuming these are imported
import { doc, getDoc } from 'firebase/firestore';

const ProfileBody = () => {

  const userEmail = auth.currentUser.email;
  const sanitizedEmail = userEmail.replace(/\./g, '_');
  const [profilePicture, setProfilePicture] = useState('');
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState(''); 


  useEffect(() => {
    const getUserData = async () => {
      const docRef = doc(db, 'users', sanitizedEmail);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProfilePicture(docSnap.data().profile_picture);
        setName(docSnap.data().fullName);
        setBirthDate(docSnap.data().birthDate);
        setAge(docSnap.data().age);
        setGender(docSnap.data().gender);
        
      } else {
        console.log('No such document!');
      }
    };

    getUserData();
  }, []);

  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  
  // Usage in your component:
  const capitalizedGender = capitalizeFirstLetter(gender);

  return (
    <View style={styles.container}>
      <ScrollView>
        {profilePicture && ( // Conditional rendering check
          <Image style={styles.profilePicture} source={{ uri: profilePicture }} />
        )}
        <Text style={styles.userName}>{name}</Text>
        <View style={styles.userInfoContainer}>
            <View style={styles.userInfoContainer2}>
                <Text style={styles.userInfoHead}>Birth Date</Text>
                <Text style={styles.userInfo}>{birthDate}</Text>
            </View>

            <View style={styles.userInfoContainer2}>
                <Text style={styles.userInfoHead}>Age</Text>
                <Text style={styles.userInfo}>{age}</Text>
            </View>

            <View style={styles.userInfoContainer2}>
                <Text style={styles.userInfoHead}>Gender</Text>
                <Text style={styles.userInfo}>{capitalizedGender}</Text>
            </View>
        </View>
        <Text style={styles.memoryHeader}>My Memories</Text>
      </ScrollView>
    </View>
  );
}

export default ProfileBody;

const styles = StyleSheet.create({

    userInfoContainer:{
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        right: 5
    },

    userInfoContainer2:{
        alignItems: 'center',
        right: 5
    },

    userInfoHead:{
        marginTop: 15,
        fontSize: 20,
        color: '#6237CF',
        fontFamily: 'serif',
        fontWeight: '400',
    },

    userInfo:{
        marginTop: 5,
        fontSize: 18,
        color: 'black',
        fontFamily: 'serif',
        fontWeight: '400',
    },

    profilePicture: {
        borderRadius: 50,
        width: 130,
        height: 130,
        marginTop: 30,
        left: 5,
        alignSelf: 'center'
    },

    userName: {
        marginTop: 13,
        fontSize: 22,
        fontWeight: '500',
        alignSelf: 'center',
        color: '#6237CF',
        left: 5,
    },

    memoryHeader: {
        marginLeft: 8, 
        marginTop: 30, 
        fontSize: 22, 
        fontWeight: '500', 
        color: '#6237CF', 
    }
})