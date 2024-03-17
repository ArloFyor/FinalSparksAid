import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { Divider } from 'react-native-elements';
import { auth, db } from '../../firebase';
import { addDoc, doc, collection, Timestamp } from 'firebase/firestore';

const PostFooterIcons = [
  {
    name: 'Heart',
    imageURL: require('../../assets/Buttons/inactive_heartButton.png'),
    isActive: false,
  },
  {
    name: 'Comment',
    imageURL: require('../../assets/Buttons/comment_Button.png'),
    isActive: false,
  },
];

const Post = ({ post }) => {
  const [showComments, setShowComments] = useState(false);
  const [postFooterIconsState, setPostFooterIcons] = useState(PostFooterIcons);

  const handleToggleIcon = (index) => {
    const newPostFooterIcons = [...postFooterIconsState];
    newPostFooterIcons[index].isActive = !newPostFooterIcons[index].isActive;
    setPostFooterIcons(newPostFooterIcons);
  };

  return (
    <View style={{ marginBottom: 20, marginTop: 8 }}>
      <Divider width={1} orientation='vertical' />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10, top: 5 }}>
        <PostFooter postFooterIcons={postFooterIconsState} onToggleIcon={handleToggleIcon} post={post} />
        <Caption post={post} />
        <TouchableOpacity>
          <CommentSection post={post} />
        </TouchableOpacity>
        {showComments && <Comments post={post} />}
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={{ uri: post.profile_picture }} style={styles.profilePicture} />
        <Text style={{ marginLeft: 8, fontSize: 15, fontFamily: 'serif', marginTop: 5 }}>{post.username}</Text>
      </View>
      <Text style={{ fontWeight: 'bold', marginRight: 10 }}>...</Text>
    </View>
  );
};

const PostImage = ({ post }) => {
  return (
    <View style={{ width: '100%', height: 450, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={{ uri: post.imageURL }}
        style={{ height: '100%', width: '100%', resizeMode: 'cover', aspectRatio: 0.9 }}
      />
    </View>
  );
};

const PostFooter = ({ postFooterIcons, onToggleIcon, post }) => {


  async function saveRecord(post) {
    const userEmail = auth.currentUser?.email;
    const sanitizedEmail = userEmail.replace(/\./g, '_');
  
    const userDocRef = doc(db, 'users', sanitizedEmail);
    const postCollectionRef = collection(userDocRef, 'posts');
  
    try {
      const docRef = await addDoc(postCollectionRef, {
        imageURL: post.imageURL,
        createdAt: Timestamp.fromDate(new Date()),
        caption: post.caption,
        username: post.username,
        profile_picture: post.profile_picture,
        project_id: postCollectionRef.id,
        owner_uid: auth.currentUser.uid,
        owner_email: auth.currentUser.email,
        enabled: 'disabled', // Set to true or another appropriate value
        likes_by_users: post.likes_by_users || [], // Initialize as an empty array if not present
        comments: post.comments || [], // Initialize as an empty array if not present
      });
      console.log("document saved correctly", docRef.id);
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleProceed = () => {
    saveRecord(post);
  };

  return (
    <View style={{ flexDirection: 'row', right: 5 }}>
      {postFooterIcons.map((icon, index) => (
        <Icon
          key={index}
          imgStyle={[styles.footerIcon, index !== 0 && { marginLeft: 5 }]} // Add marginRight to all icons except the first one
          imgURL={icon.isActive && index === 0 ? require('../../assets/Buttons/active_heartButton.png') : icon.imageURL}
          onPress={() => {
            // Only trigger console.log("Peko") when the icon at index 0 is pressed
            if (index === 0) {
              Alert.alert(
                'Save Post?',
                'Would you like to save this post in your profile?',
                [
                  { text: 'Cancel', style: 'cancel' },
                  { text: 'Proceed', onPress: handleProceed },
                ],
                { cancelable: false }
              );

              onToggleIcon(index);
            }
            onToggleIcon(index);
          }}
        />
      ))}
    </View>
  );
};


const Icon = ({ imgStyle, imgURL, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={imgStyle} source={imgURL} />
    </TouchableOpacity>
  );
};

const Caption = ({ post }) => {
  return (
    <View style={{ marginTop: 8 }}>
      <Text>
        <Text style={{ fontWeight: 600, fontSize: 16 }}>{post.username}</Text>
        <Text style={{ fontSize: 16 }}>: {post.caption}</Text>
      </Text>
    </View>
  );
};

const CommentSection = ({ post }) => {
  const numberOfComments = post.comments?.length || 0;

  return (
    <View style={{ marginTop: 5 }}>
      {!!post.comments && numberOfComments > 0 && (
        <Text style={{ color: 'gray' }}>
          {numberOfComments > 4
            ? 'View most recent comments'
            : `View ${numberOfComments} comment${numberOfComments !== 1 ? 's' : ''}`}
        </Text>
      )}
    </View>
  );
};

const Comments = ({ post }) => {
  const lastFourComments = post.comments?.slice(-4);

  return (
    <>
      {lastFourComments?.map((comment, index) => (
        <View key={index} style={{ flexDirection: 'row', marginTop: 5 }}>
          <Text>
            <Text style={{ fontWeight: 700 }}>{comment.user} </Text>
            {comment.comment}
          </Text>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  profilePicture: {
    width: 40,
    height: 40,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 20,
    borderWidth: 1.6,
    borderColor: '#FCC153',
  },

  footerIcon: {
    width: 35,
    height: 35,
  },
});

export default Post;
