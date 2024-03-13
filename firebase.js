// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmtoAqCGjhqonn1wMjU_Mu5iBe9nayGBI",
  authDomain: "rn-sparksaid.firebaseapp.com",
  projectId: "rn-sparksaid",
  storageBucket: "rn-sparksaid.appspot.com",
  messagingSenderId: "669640594251",
  appId: "1:669640594251:web:7a40562dae90a869cccece",
  measurementId: "G-1GHT7HXY70"
};

// Initialize Firebase with persistence
const app = (getApps().length === 0 ? initializeApp(firebaseConfig) : getApp());
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// Firestore
const db = getFirestore(app);

export { auth, db };