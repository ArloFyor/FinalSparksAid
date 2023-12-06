import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 20, marginTop: 8 }}>
      <Divider width={1} orientation='vertical' />
      <PostHeader post={post} />
      <PostImage post={post} />
    </View>
  );
};

const PostHeader = ({ post }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={post.profile_picture} style={styles.profilePicture} />
        <Text style={{ marginLeft: 8, fontSize: 15, fontFamily: 'serif', marginTop: 5 }}>{post.user}</Text>
      </View>
      <Text style={{ fontWeight: 'bold', marginRight: 10 }}>...</Text>
    </View>
  );
};

const PostImage = ({ post }) => {
  return (
    <View style={{ width: '100%', height: 450, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={post.imageURL}
        style={{ height: '100%', width: '100%', resizeMode: 'cover', aspectRatio: 0.9 }}
      />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  profilePicture: {
    width: 40,
    height: 40,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 20, // to make it a circular image (half of width and height)
    borderWidth: 1.6,
    borderColor: '#FCC153',
  },
});
