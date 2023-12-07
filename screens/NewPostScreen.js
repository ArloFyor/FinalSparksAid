import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const placeholderImage = require('../assets/SamplePicsAndPosts/ProfilePictures/placeholderProfile.png');

const NewPostScreen = () => {
  const [postButtonOpacity, setPostButtonOpacity] = useState(0.5);

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

  function handlePost() {
    if (formik.values.selectedImage === null) {
      // Display an alert message if no image is selected
      return;
    }

    console.log('Caption:', formik.values.caption);
    console.log('Selected Image:', formik.values.selectedImage);

    // Add logic to send data to your server or perform other actions.

    // Clear formik state
    formik.resetForm();

    // Reset button opacity after posting
    setPostButtonOpacity(0.5);
  }

  // Update button opacity when selectedImage changes
  React.useEffect(() => {
    setPostButtonOpacity(formik.values.selectedImage ? 1 : 0.5);
  }, [formik.values.selectedImage]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.homeButtonOpacity} onPress={() => console.log('Home Button has been pressed!')}>
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

      <TouchableOpacity onPress={formik.handleSubmit} disabled={!formik.values.selectedImage}>
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
  },
  captionInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    width: '100%',
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
  },
});

export default NewPostScreen;
