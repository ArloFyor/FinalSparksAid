import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const NewPostScreen = () => {
  const [caption, setCaption] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const handlePost = () => {
    console.log('Caption:', caption);
    console.log('Selected Image:', selectedImage);

    // Add logic to send data to your server or perform other actions.

    // Clear state values
    setCaption('');
    setSelectedImage(null);
  };

  return (
    <View style={styles.container}>
      {/* Button positioned at the top left */}
      <TouchableOpacity style={styles.homeButtonContainer} onPress={() => console.log('Home Button Pressed')}>
        <Image style={styles.homeButton} source={require('../assets/Buttons/Home_Button.png')} />
      </TouchableOpacity>

      <Text style={styles.title}>New Post</Text>

      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
      )}

      <TouchableOpacity onPress={pickImage}>
        <Text style={styles.selectImageText}>Select Image</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.captionInput}
        placeholder="Write a caption..."
        value={caption}
        onChangeText={(text) => setCaption(text)}
      />

      <TouchableOpacity onPress={handlePost}>
        <Text style={styles.postButton}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5DC',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  selectedImage: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  selectImageText: {
    color: 'blue',
    fontSize: 16,
    marginBottom: 16,
  },
  captionInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    width: '100%',
  },
  postButton: {
    color: 'white',
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
  },
  homeButtonContainer: {
    alignSelf: 'flex-start',
    bottom: 100
  },
  
  homeButton: {
    height: 80,
    width: 80,
  },
});

export default NewPostScreen;
