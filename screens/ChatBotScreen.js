import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import ChatBotHeader from '../components/chat/ChatBotHeader';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { dialogFlowConfig } from '../dialogFlow';
import { matchAndRespond } from '../responses';

const ChatBotScreen = ({navigation}) => {
  const [messages, setMessages] = useState([]);
  const [userAvatar, setUserAvatar] = useState('');

  const botAvatar = require('../assets/SamplePicsAndPosts/ProfilePictures/chatBotPicture.png');

  const BOT = {
    _id: 2,
    name: 'SparksAid',
    avatar: botAvatar
  }

  {/*Dialog Flow Config*/}
  /*
  useEffect(() => {
    Dialogflow_V2.setConfiguration(
      dialogFlowConfig.client_email,
      dialogFlowConfig.private_key,
      dialogFlowConfig.project_id,
      dialogFlowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
    );
  }, []); */

  {/*Fetches the User's Profile Picture/Avatar*/}
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

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: ('Hello there! \nHow are you doing?'),
        createdAt: new Date(),
        user: BOT,
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    const [userMessage] = messages;
  
    // Check if user message matches the FEELING_REGEX pattern
    const responseText = matchAndRespond(userMessage.text.toLowerCase()); // Capture the matched feeling text
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, [
        {
          _id: Math.round(Math.random() * 1000000),
          text: responseText, // Respond with captured feeling
          createdAt: new Date(),
          user: BOT,
        },
        ...messages,
      ]),
    ); 
  }, []);
  

  const onQuickReply = useCallback((quickReply = []) => {
    const createdAt = new Date();
  
    if (quickReply.length) {
      // Handle both single and multiple quickReply
      const replyText = quickReply.length === 1
        ? quickReply[0].title // Assuming "title" is the property for reply text
        : quickReply.map(reply => reply.title).join(', ');
  
      onSend([
        {
          createdAt,
          _id: Math.round(Math.random() * 1000000),
          text: replyText,
          user: BOT, // Assuming "user" is defined elsewhere
        },
      ]);
    } else {
      console.warn('Quick Reply param is not set correctly');
    }
  }, []);
  

  

  return (
    <>
      <ChatBotHeader navigation={navigation} />
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        onQuickReply={quickReply => onQuickReply(quickReply)}
        user={{
          _id: 1,
          avatar: userAvatar,
        }}
        messagesContainerStyle={{
          backgroundColor: '#F5F5DC',
        }}
      />
    </>
  );
};

export default ChatBotScreen;

const styles = StyleSheet.create({});
