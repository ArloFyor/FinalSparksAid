import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth, db } from '../firebase';
import { collection, doc, deleteDoc } from 'firebase/firestore';

const ViewImageScreen = ({ route }) => {
    
  const { imageURL, imageCaption, imageCreatedAt, docId, owner_email } = route.params;
  const navigation = useNavigation();

  // Firestore
  const userEmail = auth.currentUser.email;
  const sanitizedEmail = userEmail.replace(/\./g, '_');
  const userDocRef = doc(db, 'users', sanitizedEmail);
  const postsCollectionRef = collection(userDocRef, 'posts');

  // Check if the user is the owner of the image
  const isOwner = userEmail === owner_email;

  // Function to delete the document from Firestore
  const deleteDocument = async () => {
    try {
      Alert.alert(
        'Confirm Deletion',
        'Are you sure you want to delete this post?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Delete',
            onPress: async () => {
              await deleteDoc(doc(postsCollectionRef, docId));
              navigation.navigate('HomeScreen'); // Navigate to HomeScreen after successful deletion
              Alert.alert(
                'Post Deleted Successfully',
                'The post can no longer be viewed from your profile screen.',
                [
                  { text: 'OK', style: 'cancel' },
                ]
              );
              
            },
            style: 'destructive',
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error('Error removing document: ', error);
    }
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.backButtonOpacity} onPress={() => navigation.goBack()}>
            <Image 
            style={styles.backButton} 
            source={require('../assets/Buttons/backButton_Black.png')} 
            />
        </TouchableOpacity>
        <Image style={styles.image} source={{ uri: imageURL }} />
        <Text style={styles.caption}>{imageCaption}</Text>
        <Text style={styles.createdDate}>{imageCreatedAt}</Text>

        {isOwner ? ( // Render delete button only if the user is the owner
          <TouchableOpacity style={styles.deleteButtonOpacity} onPress={deleteDocument}>
              <Image 
              style={styles.deleteButton} 
              source={require('../assets/Buttons/deleteButton.png')} 
              />
          </TouchableOpacity>
        ) : (
          <View style={styles.deleteButtonPlaceholder} /> // Empty placeholder view
        )}
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5DC',
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    caption: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    createdDate: {
        marginTop: 10,
        fontSize: 16,
    },
    backButtonOpacity: {
        alignSelf: 'flex-start',
    },
    backButton: {
        width: 45, // Increase the size of the circle
        height: 45, // Increase the size of the circle
        marginTop: 70,
        marginLeft: 40,
    },
    deleteButtonOpacity: {
        alignSelf: 'center',
    },
    deleteButton: {
        width: 70, // Increase the size of the circle
        height: 70, // Increase the size of the circle
        marginTop: 40,
    },
    deleteButtonPlaceholder: {
        width: 70, // Same width as the delete button
        height: 70, // Same height as the delete button
        marginTop: 40,
    }
});
