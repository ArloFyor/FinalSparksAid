// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";

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

// Storage
const storage = getStorage();

// Storage Ref
const storageRef = ref(storage);

export { auth, db, storage, storageRef };