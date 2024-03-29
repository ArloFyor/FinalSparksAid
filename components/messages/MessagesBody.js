import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements'; // Assuming Divider is imported
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebase'; // Assuming these are imported
import { collection, query, getDocs, doc, getDoc } from 'firebase/firestore';

const MessagesBody = ({ navigation }) => {
  const [companionEmails, setCompanionEmails] = useState([]);
  const [companionData, setCompanionData] = useState([]);

  useEffect(() => {
    const fetchCompanionEmails = async () => {
      const userEmail = auth.currentUser.email;
      const sanitizedEmail = userEmail.replace(/\./g, '_');
      const userDocRef = doc(db, 'users', sanitizedEmail);
      const companionCollectionRef = collection(userDocRef, 'companions');

      const companionEmails = [];
      try {
        const snapshot = await getDocs(companionCollectionRef);
        snapshot.forEach((doc) => {
          companionEmails.push(doc.data().email);
        });
      } catch (error) {
        console.log('Error fetching companion emails:', error);
      }

      setCompanionEmails(companionEmails);
      fetchCompanionData(companionEmails);
    };

    fetchCompanionEmails();
  }, []);

  const fetchCompanionData = async (companionEmails) => {
    const userDocRef = doc(db, 'users', auth.currentUser.email.replace(/\./g, '_'));
    const companionsQuery = query(collection(userDocRef, 'companions')),
      companionsSnapshot = await getDocs(companionsQuery);

    const companionDocs = companionsSnapshot.docs.map((doc) => doc.data());

    const companionFullNamesAndAges = [];
    for (const companion of companionDocs) {
      const companionEmail = companion.email;

      if (companionEmails.includes(companionEmail)) {
        const userDocRef = doc(db, 'users', companionEmail.replace(/\./g, '_'));
        const userDocSnapshot = await getDoc(userDocRef);
        const userData = userDocSnapshot.data();

        companionFullNamesAndAges.push({
          id: companion.id,
          profilePicture: userData.profile_picture,
          fullname: userData.fullName,
          username: userData.userName,
          age: userData.age,
          gender: userData.gender,
          interests: userData.interests.interestOne,
          interestsTwo: userData.interests.interestTwo,
          interestsThree: userData.interests.interestThree,
          email: userData.email,
          uid: userData.owner_uid,
        });
      }
    }

    setCompanionData(companionFullNamesAndAges);
  };

  const renderCompanionItem = ({ item }) => {
    const interests = [item.interests, item.interestsTwo, item.interestsThree]
      .filter((interest) => interest) // Filter out empty interests
      .join(', '); // Join non-empty interests with commas
  
    return (
      <TouchableOpacity style={styles.touchableOpacityContainer} onPress={() => {
        const chatRoomID = concatenateInOrder(auth.currentUser.uid, item.uid);
        const companionProfilePicture = item.profilePicture
        const companionName = item.username
        navigation.push('ChatScreen', { chatRoomID, companionProfilePicture, companionName });
      }}>
        <Divider style={styles.divider} width={1} />
        <View style={styles.dataItemContainer}>
          <Image style={styles.profilePicture} source={{ uri: item.profilePicture }} />
          <View style={styles.dataItem}>
            <Text style={styles.username}>{item.username}</Text>
            <Text style={styles.ageGender}>
              {item.fullname}
            </Text>
          </View>
        </View>
        <Divider style={styles.divider} width={1} />
      </TouchableOpacity>
    );
  };

  function concatenateInOrder(string1, string2) {
    // Sort the strings alphabetically, ensuring consistent order for output
    const sortedStrings = [string1, string2].sort();
  
    // Concatenate the sorted strings
    return sortedStrings.join('');
  }
  

  return (
    <View style={styles.container}>
      {companionData.length > 0 && (
        <FlatList
          data={companionData}
          renderItem={renderCompanionItem}
          keyExtractor={(item) => item.username}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    touchableOpacityContainer: {
        justifyContent: 'flex-start', // Align items at the top
      },
    
    dataItemContainer: {
        flexDirection: 'row',
        marginRight: 20,
        marginTop: 5,
        marginLeft: 20,
        alignItems: 'center', // Align items vertically
    },

    profilePicture: {
        width: 70,
        height: 70,
        borderRadius: 10,
        marginRight: 20,
        bottom: 1,
    },

    dataItem: {
      flex: 1,
    },

    username: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },

    ageGender: {
      fontSize: 16,
      marginBottom: 5,
    },

    divider: {
      backgroundColor: 'black',
      height: 1,
      marginVertical: 5,
    },
  });

export default MessagesBody;