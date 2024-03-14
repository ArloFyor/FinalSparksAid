import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { storage, db } from '../firebase';
import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';

const placeholderImage = require('../assets/SamplePicsAndPosts/ProfilePictures/placeholderProfile.png');

const NewPostScreen = ({navigation}) => {
  const [postButtonOpacity, setPostButtonOpacity] = useState(0.5);
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);

  const postValidationSchema = Yup.object().shape({
    caption: Yup.string().max(2200, 'You have exceeded the amount of characters for this caption.'),
    selectedImage: Yup.string().required('Please select an image.'),
  });

  const formik = useFormik({
    initialValues: {
      caption: '',
      selectedImage: null,
    },
    validationSchema: postValidationSchema,
    onSubmit: handlePost,
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      formik.setFieldValue('selectedImage', result.assets[0].uri);

    }
  };

  async function uploadImage (uri, fileType) {
    const response = await fetch(uri);
    const blob = await response.blob();
  
    const storageRef = ref(storage, "Posts/" + new Date().getTime())
    
    const uploadTask = uploadBytesResumable(storageRef, blob);
  
    // listen for state changes
    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress.toFixed());
      },
      (error) => {
        //handle error
        console.error('Error uploading image:', error);
      },
      () => {
        // handle successful upload
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("File available at ", downloadURL);
  
          // save record
          setImage("");
        });
      }
    );
  }

  async function handlePost({navigation}) {
    if (formik.values.selectedImage === null) {
      // Display an alert message if no image is selected
      return;
    }

    try {
      const downloadURL = await uploadImage(formik.values.selectedImage, "image");
      
      // Clear formik state
      formik.resetForm();

      // Reset button opacity after posting
      setPostButtonOpacity(0.5);

    } catch (error){
      console.error('Error getting download URL:', error);
    }
  }

  // Update button opacity when selectedImage changes
  React.useEffect(() => {
    setPostButtonOpacity(formik.values.selectedImage ? 1 : 0.5);
  }, [formik.values.selectedImage]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.homeButtonOpacity} onPress={() => navigation.push('HomeScreen')}>
        <Image style={styles.homeButton} source={require('../assets/Buttons/Home_Button.png')} />
      </TouchableOpacity>
      <Text style={styles.title}>New Post</Text>
      
      <TouchableOpacity onPress={() => formik.handleBlur('selectedImage')}>
        {(formik.values.selectedImage && formik.values.selectedImage !== null) ? (
          <Image source={{ uri: formik.values.selectedImage }} style={styles.selectedImage} />
        ) : (
          <Image source={placeholderImage} style={styles.selectedImage} />
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={pickImage}>
        <Text style={styles.selectImageText}>Select Image</Text>
      </TouchableOpacity>
      
      <TextInput
        style={styles.captionInput}
        placeholder="Write a caption..."
        value={formik.values.caption}
        onChangeText={formik.handleChange('caption')}
        onBlur={() => formik.handleBlur('caption')}
      />
      {formik.touched.caption && formik.errors.caption && (
        <Text style={{ color: 'red' }}>{formik.errors.caption}</Text>
      )}

      <TouchableOpacity
        onPress={() => {
          formik.handleSubmit();
          if (formik.values.selectedImage) {
            // Post logic succeeded, navigate to HomeScreen
            navigation.push('HomeScreen');
          }
        }}
        disabled={!formik.values.selectedImage}
      >
        <Text style={[styles.postButton, { opacity: postButtonOpacity }]}>
          Post
        </Text>
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
    bottom: 50,
  },
  captionInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    width: '100%',
    bottom: 50,
  },
  selectedImage: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
    bottom: 50,
  },
  selectImageText: {
    color: 'blue',
    fontSize: 16,
    marginBottom: 16,
    bottom: 50,
  },
  homeButtonOpacity: {
    alignSelf: 'flex-start',
    bottom: 80,
  },
  homeButton: {
    width: 80,
    height: 80,
  },
  postButton: {
    color: 'white',
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    bottom: 40,
    width: 100,
  },
});

export default NewPostScreen;
