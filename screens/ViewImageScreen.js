import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const ViewImageScreen = ({ navigation, route }) => {
  const { imageURL, imageCaption, imageCreatedAt = 'March 00, 2020' } = route.params;

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

        <TouchableOpacity style={styles.deleteButtonOpacity} onPress={() => console.log("Delete prompt")}>
            <Image 
            style={styles.deleteButton} 
            source={require('../assets/Buttons/deleteButton.png')} 
            />
        </TouchableOpacity>
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
    }
  });
  
