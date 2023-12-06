import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

const Post = ({post}) => {
  return (
    <View style = {{marginBottom: 30}}>
      <Divider width={1} orientation='vertical'/>
      <Text>Post</Text>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({

})