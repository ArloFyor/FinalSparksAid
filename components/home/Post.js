import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

const Post = ({post}) => {
  return (
    <View style={{marginBottom: 20, marginTop: 8}}>
      <Divider width={1} orientation='vertical'/>
      <PostHeader post={post} />
    </View>
  )
}

const PostHeader = ({post}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center'}}>
      <View style = {{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={post.profile_picture} style={styles.profilePicture} />
        <Text style={{ marginLeft: 6, fontWeight: 600, fontSize: 15, marginTop: 4 }}>{post.user}</Text>
      </View>
    </View>
  );
}

export default Post

const styles = StyleSheet.create({
  profilePicture: {
    width: 40,
    height: 40,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 50, // to make it a circular image
    borderWidth: 1.6,
    borderColor: '#FCC153',
  },
});
