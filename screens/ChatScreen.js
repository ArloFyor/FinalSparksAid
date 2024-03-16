import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
  getDoc,
  doc
} from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import ChatHeader from '../components/chat/ChatHeader';

const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const [userAvatar, setUserAvatar] = useState(''); // State for storing the avatar

  useLayoutEffect(() => {
    const collectionRef = collection(db, 'chats');
    const q = query(collectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, snapshot => {
      console.log('snapshot');
      setMessages(
        snapshot.docs.map(doc => ({
          _id: doc.id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }))
      );
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchUserAvatar = async () => {
      const userEmail = auth.currentUser.email;
      const sanitizedEmail = userEmail.replace(/\./g, '_');
      const userDocRef = doc(db, 'users', sanitizedEmail);
      const docSnap = await getDoc(userDocRef);
      if (docSnap.exists) {
        const userData = docSnap.data();
        const profilePicture = userData?.profile_picture;
        setUserAvatar(profilePicture);
      } else {
        console.error('User document does not exist');
      }
    };
    fetchUserAvatar();
  }, [auth.currentUser]); // Re-fetch when user changes

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));

    const { _id, createdAt, text, user } = messages[0];
    addDoc(collection(db, 'chats'), {
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  return (
    <>
      <ChatHeader navigation={navigation} />
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: auth?.currentUser?.email,
          avatar: userAvatar, // Use the fetched avatar
        }}
        messagesContainerStyle={{
          backgroundColor: '#F5F5DC',
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12
  },
  
  sendText: {
    fontSize: 16,
    color: 'gray'
  }
})

export default ChatScreen
