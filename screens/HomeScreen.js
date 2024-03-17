import { View, SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header_A from '../components/home/Header_A'
import Suggested_Activities from '../components/home/Suggested_Activities'
import Post from '../components/home/Post'
import BottomTabs_A from '../components/home/BottomTabs_A'
import { POSTS } from '../data/posts'
import { collectionGroup, onSnapshot, query, orderBy, limit, doc, collection, getDocs, getDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([])
  const [companionData, setCompanionData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const userEmail = auth.currentUser.email;
      const sanitizedEmail = userEmail.replace(/\./g, '_');
      const userDocRef = doc(db, 'users', sanitizedEmail);
      const companionCollectionRef = collection(userDocRef, 'companions');

      try {
        const snapshot = await getDocs(companionCollectionRef);
        const companionEmails = snapshot.docs.map(doc => doc.data().email);
        const companionPosts = await fetchCompanionPosts(companionEmails);
        setCompanionData(companionPosts);
      } catch (error) {
        console.error('Error fetching companion data:', error);
      }
    };

    fetchData();
  }, []);

  const fetchCompanionPosts = async (companionEmails) => {
    let companionPosts = [];

    for (const email of companionEmails) {
      const postDocRef = collection(db, 'users', email.replace(/\./g, '_'), 'posts');
      const postDocSnapshot = await getDocs(postDocRef);
      const userData = postDocSnapshot.docs.map(doc => doc.data());
      companionPosts = companionPosts.concat(userData);
    }

    return companionPosts;
  };

  useEffect(() => {
    if (auth.currentUser) {
      const userEmail = auth.currentUser.email;
      const sanitizedEmail = userEmail.replace(/\./g, '_');
      const userDocRef = doc(db, 'users', sanitizedEmail);
      const postsCollectionRef = collection(userDocRef, 'posts');
      const q = query(postsCollectionRef, orderBy('createdAt', 'desc'), limit(14));

      const unsubscribe = onSnapshot(q, snapshot => {
        setPosts(snapshot.docs.map(doc => doc.data()));
      });

      return () => unsubscribe();
    }
  }, []);

  // Combine, sort, and limit posts to 14
  const combinedPosts = [...companionData, ...posts]
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 14);

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Header_A />
          <Suggested_Activities navigation={navigation} />
    
          {/* Render combined, sorted, and limited posts */}
          {combinedPosts
            .filter(post => post.enabled !== 'disabled') // Filter out posts where 'enabled' is 'disabled'
            .map((post, index) => (
              <Post post={post} key={index} />
            ))
          }
    
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
