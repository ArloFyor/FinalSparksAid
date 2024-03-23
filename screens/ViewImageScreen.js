import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { auth, db } from '../firebase';

const ViewImageScreen = ({ navigation, route }) => {
    
  const { imageURL, imageCaption, imageCreatedAt, docId, owner_email } = route.params;
  const userEmail = auth.currentUser.email;

  // Check if the user is the owner of the image
  const isOwner = userEmail === owner_email;

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
          <TouchableOpacity style={styles.deleteButtonOpacity} onPress={() => console.log({docId})}>
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
