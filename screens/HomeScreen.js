import { View, SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header_A from '../components/home/Header_A'
import Suggested_Activities from '../components/home/Suggested_Activities'
import Post from '../components/home/Post'
import BottomTabs_A from '../components/home/BottomTabs_A'
import { POSTS } from '../data/posts'
import { collectionGroup, onSnapshot, query, orderBy, limit, doc, collection } from 'firebase/firestore'
import { auth, db } from '../firebase'

//const postsCollectionRef = collectionGroup(db, 'posts')

const HomeScreen = ({navigation}) => {
  const [posts, setPosts] = useState([])
  const userEmail = auth.currentUser.email;
  const sanitizedEmail = userEmail.replace(/\./g, '_');

  const userDocRef = doc(db, 'users', sanitizedEmail)
  const postsCollectionRef = collection(userDocRef, 'posts')

  useEffect(() => {
    // Check if user is logged in
    if (auth.currentUser) {
      const q = query(postsCollectionRef, orderBy('createdAt', 'desc'), limit(14))
      const unsubscribe = onSnapshot(q, snapshot => {
        setPosts(snapshot.docs.map(doc => doc.data()))
      })

      // Clean up the listener when the component unmounts
      return () => unsubscribe()
    }
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header_A />
        <Suggested_Activities navigation={navigation} />

        {/*Posts on the Home Screen*/}
        {posts.map((post,index) => (
                    <Post post={post} key={index}/>
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
