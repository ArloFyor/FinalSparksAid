import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import ImagePicker from 'react-native-image-picker';

const NewPostScreen = () => {
  const [caption, setCaption] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelection = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    // Use launchImageLibrary instead of showImagePicker
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('Image selection canceled');
      } else if (response.error) {
        console.error('ImagePicker Error:', response.error);
      } else {
        setSelectedImage(response.uri);
      }
    });
  };

  const handlePost = () => {
    console.log('Caption:', caption);
    console.log('Selected Image:', selectedImage);
    // Add logic to send the data to your server or perform other actions.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Post</Text>

      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
      )}

      <TouchableOpacity onPress={handleImageSelection}>
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
});

export default NewPostScreen;
