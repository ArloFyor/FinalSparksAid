import { View, SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header_A from '../components/home/Header_A'
import Suggested_Activities from '../components/home/Suggested_Activities'
import Post from '../components/home/Post'
import { POSTS } from '../data/posts'

const HomeScreen = () => {
  return (
    <SafeAreaView style = {styles.container}>
        <Header_A/>
        <Suggested_Activities/>
        <ScrollView>
            {POSTS.map((post, index) => (
                <Post post={post} key={index} />                
            ))}

        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5DC',
        flex: 1,
    },
})

export default HomeScreen