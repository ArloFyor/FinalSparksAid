import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react'
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import { collection, addDoc, orderBy, query, onSnapshot } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { useNavigation } from '@react-navigation/native'
import ChatHeader from '../components/chat/ChatHeader'

const ChatScreen = ({navigation}) => {
  const [messages, setMessages] = useState([])

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
    <ChatHeader navigation={navigation}/>
    <GiftedChat
      messages={messages} // No need to reverse
      onSend={messages => onSend(messages)}
      user={{
        _id: auth?.currentUser?.email,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7_VjjrJSV5MRdER99hM6aPOZNzLrapPQ7IA&usqp=CAU',
      }}
      messagesContainerStyle={{
        backgroundColor: '#F5F5DC',
      }}
    />
    </>
  )
}

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
