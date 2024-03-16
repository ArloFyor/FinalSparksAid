import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import ChatBotHeader from '../components/chat/ChatBotHeader';
import { auth } from '../firebase';

const ChatBotScreen = ({navigation}) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'How are you doing?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'SparksAid',
          avatar: require('../assets/SamplePicsAndPosts/ProfilePictures/chatBotPicture.png'),
        },
      },
      {
        _id: 2,
        text: ('Hello there!'),
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'SparksAid',
          avatar: require('../assets/SamplePicsAndPosts/ProfilePictures/chatBotPicture.png'),
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <>
    <ChatBotHeader navigation={navigation}/>
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
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
