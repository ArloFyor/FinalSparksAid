import { View, SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header_A from '../components/home/Header_A'
import Suggested_Activities from '../components/home/Suggested_Activities'
import Post from '../components/home/Post'
import BottomTabs_A from '../components/home/BottomTabs_A'
import { POSTS } from '../data/posts'
import { collectionGroup, onSnapshot, query, orderBy, limit, doc, collection, getDocs, getDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'

//const postsCollectionRef = collectionGroup(db, 'posts')

const HomeScreen = ({navigation}) => {
  const [posts, setPosts] = useState([])
  const userEmail = auth.currentUser.email;
  const sanitizedEmail = userEmail.replace(/\./g, '_');

  const [companionEmails, setCompanionEmails] = useState([]);
  const [companionData, setCompanionData] = useState([]);

  useEffect(() => {
    const fetchCompanionEmails = async () => {
      const userEmail = auth.currentUser.email;
      const sanitizedEmail = userEmail.replace(/\./g, '_');
      const userDocRef = doc(db, 'users', sanitizedEmail);
      const companionCollectionRef = collection(userDocRef, 'companions');

      const companionEmails = [];
      try {
        const snapshot = await getDocs(companionCollectionRef);
        snapshot.forEach((doc) => {
          companionEmails.push(doc.data().email);
        });
      } catch (error) {
        console.error('Error fetching companion emails:', error);
      }

      setCompanionEmails(companionEmails);
      fetchCompanionData(companionEmails);
    };

    fetchCompanionEmails();
  }, []);

  const fetchCompanionData = async (companionEmails) => {
    const userDocRef = doc(db, 'users', auth.currentUser.email.replace(/\./g, '_'));
    const companionsQuery = query(collection(userDocRef, 'companions')),
      companionsSnapshot = await getDocs(companionsQuery);
  
    const companionDocs = companionsSnapshot.docs.map((doc) => doc.data());
  
    const companionPosts = [];
    for (const companion of companionDocs) {
      const companionEmail = companion.email;
  
      if (companionEmails.includes(companionEmail)) {
        const postDocRef = collection(db, 'users', companionEmail.replace(/\./g, '_'), 'posts');
        const postDocSnapshot = await getDocs(postDocRef);
        const userData = postDocSnapshot.docs.map(doc => doc.data());
  
        companionPosts.push(...userData);
      }
    }
  
    setCompanionData(companionPosts);
  };

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
        {companionData.map((companionData,index) => (
                    <Post post={companionData} key={index}/>
                ))}

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
