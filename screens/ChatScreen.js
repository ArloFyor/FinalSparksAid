import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import {
  StyleSheet,
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

const ChatScreen = ({ navigation, route }) => {
  const [messages, setMessages] = useState([]);
  const [userAvatar, setUserAvatar] = useState(''); // State for storing the avatar

  const { chatRoomID, companionProfilePicture, companionName } = route.params

  useLayoutEffect(() => {
    const chatRoomRef = doc(collection(db, 'chatRooms'), chatRoomID)
    const chatCollection = collection(chatRoomRef, 'chats')
    const q = query(chatCollection, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, snapshot => {
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
    const chatRoomRef = doc(collection(db, 'chatRooms'), chatRoomID)
    const chatCollection = collection(chatRoomRef, 'chats')

    addDoc(chatCollection, {
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  return (
    <>
      <ChatHeader navigation={navigation} profilePicture={companionProfilePicture} companionName={companionName}/>
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
