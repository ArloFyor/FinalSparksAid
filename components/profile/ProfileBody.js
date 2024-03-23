import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth, db } from '../../firebase'; // Assuming these are imported
import { doc, getDoc, onSnapshot, query, orderBy, collection } from 'firebase/firestore';

const ProfileBody = ({ emailAddress = auth.currentUser.email }) => {
  const navigation = useNavigation();
  const userEmail = emailAddress;
  const sanitizedEmail = userEmail.replace(/\./g, '_');
  const [profilePicture, setProfilePicture] = useState('');
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('');
  const [posts, setPosts] = useState([])

  const userDocRef = doc(db, 'users', sanitizedEmail)
  const postsCollectionRef = collection(userDocRef, 'posts')

  useEffect(() => {
    if (auth.currentUser) {
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
    }
  }, []);

  useEffect(() => {
    // Check if user is logged in
    if (auth.currentUser) {
      const q = query(postsCollectionRef, orderBy('createdAt', 'desc'))
      const unsubscribe = onSnapshot(q, snapshot => {
        const updatedPosts = [];
        snapshot.docChanges().forEach((change) => {
            if(change.type === "added") {
                updatedPosts.push({ id: change.doc.id, ...change.doc.data() });
            }
        });
        setPosts(prevPosts => [...prevPosts, ...updatedPosts]);
      });

      // Clean up the listener when the component unmounts
      return () => unsubscribe()
    }
  }, []) 

  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  
  // Usage in your component:
  const capitalizedGender = capitalizeFirstLetter(gender);

  // Check if the emailAddress passed is equal to auth.currentUser.email
  const canNavigateToNewProfilePictureScreen = emailAddress === auth.currentUser.email;

  const navigateToViewImageScreen = (imageURL, imageCaption, imageCreatedAt, docId, owner_email) => {
    const formattedDate = timestampToString(imageCreatedAt.toDate());
    navigation.navigate('ViewImageScreen', { imageURL, imageCaption, imageCreatedAt: formattedDate, docId, owner_email });
  };
  
  const timestampToString = (timestamp) => {
    const date = new Date(timestamp);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <View style={styles.container}>
      {profilePicture && (
        <TouchableOpacity onPress={() => canNavigateToNewProfilePictureScreen && navigation.push('NewProfilePictureScreen')}>
          <Image style={styles.profilePicture} source={{ uri: profilePicture }} />
        </TouchableOpacity>
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
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToViewImageScreen(item.imageURL, item.caption, item.createdAt, item.id, item.owner_email)} style={styles.imageContainer}>
            <Image source={{ uri: item.imageURL }} style={styles.image} />
          </TouchableOpacity>
        )}
        numColumns={3}
        contentContainerStyle={{ gap: 2 }}
        columnWrapperStyle={{ gap: 2 }}
      />
    </View>
  );
};

export default ProfileBody;

const styles = StyleSheet.create({
  userInfoContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    right: 5,
  },
  userInfoContainer2: {
    alignItems: 'center',
    right: 5,
  },
  userInfoHead: {
    marginTop: 15,
    fontSize: 20,
    color: '#6237CF',
    fontFamily: 'serif',
    fontWeight: '400',
  },
  userInfo: {
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
    alignSelf: 'center',
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
    marginBottom: 10,
    fontSize: 22,
    fontWeight: '500',
    color: '#6237CF',
  },
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 120,
  },
});
