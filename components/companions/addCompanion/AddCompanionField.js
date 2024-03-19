import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Alert } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import { auth, db } from '../../../firebase';
import { collection, doc, addDoc, where, query, getDocs } from 'firebase/firestore';


const registrationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required').test(
    'email-exists',
    'Entered email does not exist in the system.',
    async (value) => {
      const userExists = await checkUserExists(value);
      return userExists;
    }
  ),
});

const checkUserExists = async (email) => {
  const usersRef = collection(db, 'users');
  const q = query(usersRef, where('email', '==', email));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => doc.data());
}

const saveRecord = async (email_address) => {
  const userEmail = auth.currentUser?.email;
  if (!userEmail) return;

  const sanitizedEmail = userEmail.replace(/\./g, '_');
  const userDocRef = doc(db, 'users', sanitizedEmail);
  const companionCollectionRef = collection(userDocRef, 'companions');

  const userExists = await checkUserExists(email_address);

  if (userEmail === email_address) {
    Alert.alert(
      'Invalid Email',
      'You cannot add your own email address as a companion.',
      [
        { text: 'Cancel', style: 'cancel' },
      ],
      { cancelable: false }
    );
    return;
  }

  if (userExists.length > 0) {
    const companionDocRef = query(companionCollectionRef, where('email', '==', email_address));
    const companionDocSnapshot = await getDocs(companionDocRef);

    if (!companionDocSnapshot.empty) {
      Alert.alert(
        'Duplicate Email',
        'The email address you have entered has already been added as a companion.',
        [
          { text: 'Cancel', style: 'cancel' },
        ],
        { cancelable: false }
      );
      return;
    }

    try {
      const docRef = await addDoc(companionCollectionRef, {
        email: email_address,
      });
      if (docRef) console.log("Document saved correctly",docRef.id);

      //Add the companion user on the current user's side
      const sanitizedCompanionEmail = email_address.replace(/\./g, '_');
      const companionUserDocRef = doc(db, 'users', sanitizedCompanionEmail);
      const currentUserCompanionCollectionRef = collection(companionUserDocRef, 'companions');

      const docRef2 = await addDoc(currentUserCompanionCollectionRef, {
        email: userEmail,

      
      });
      if (docRef2) console.log("Document saved correctly on Companion Side: ",docRef2.id);

    } catch (error) {
      console.log(error.message);
    }
  } else {
    // User with entered email does not exist, display message and prevent adding
    Alert.alert(
      'Email Not Found',
      'The email address you entered does not exist in the system. Addition canceled.',
      [
        { text: 'OK', style: 'cancel' },
      ]
    );
    return;
  }
}

const AddCompanionField = ({navigation}) => {
  const handleSubmit = (values, { resetForm }) => {
    if (values.email.toLowerCase() === auth.currentUser.email) {
      Alert.alert(
        'Error',
        'You cannot add your own email.',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Proceed'},
        ],
        { cancelable: false }
      );
    } else {
      saveRecord(values.email)
    }
    resetForm()
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={handleSubmit}
        validationSchema={registrationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid, dirty }) => (
          <>
            <View style={styles.input}>
              <TextInput
                placeholder='Email'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {errors.email && touched.email && <Text style={styles.errorText}>{errors.email}</Text>}
            </View>

            <TouchableOpacity
              style={[styles.proceedButton, (!isValid || !dirty) && styles.disabledButton]}
              onPress={handleSubmit}
              disabled={!isValid || !dirty}
            >
              <Image
                style={styles.proceedImage}
                source={require('../../../assets/LoginAndRegistrationAssets/addButton.png')}
              />
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  )
}

export default AddCompanionField

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
},
input: {
    width: 320,
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingTop: 5,
    paddingLeft: 10,
    backgroundColor: 'white',
},
proceedButton: {
    alignSelf: 'center',
    top: 30,
},
disabledButton: {
    opacity: 0.5,
},
proceedImage: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
},
errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    right: 10,
    bottom: 52
},
})