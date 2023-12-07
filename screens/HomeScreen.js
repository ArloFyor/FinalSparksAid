import { View, SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header_A from '../components/home/Header_A'
import Suggested_Activities from '../components/home/Suggested_Activities'
import Post from '../components/home/Post'
import BottomTabs_A from '../components/home/BottomTabs_A'
import { POSTS } from '../data/posts'

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header_A />
        <Suggested_Activities navigation={navigation} />
        {POSTS.slice().reverse().map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs_A navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5DC',
    flex: 1,
  },
});

export default HomeScreen;
