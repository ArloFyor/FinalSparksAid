import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Header_A = () => {
  return (
    <View style={styles.container}>
      
        <Image
            style={styles.logo}
            source={require('../../assets/HeaderTexts/HomeScreenText.png')}
        />

        <Image
            style={styles.profilePic}
            source={require('../../assets/SamplePicsAndPosts/ProfilePictures/GrandpaCarl.jpg')}
        />

    </View>
  )
}

const styles = StyleSheet.create({
    
    container: {
        backgroundColor: '#6237CF',
        height: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },

    logo: {
        width: '40%',
        height: '35%',
        resizeMode: 'contain',
        marginTop: 55,
        marginLeft: 5,
    },

    profilePic: {
        flexDirection: "row",
        width: 50,
        height: 50,
        borderRadius: 50,
        borderColor: '#FFBD59',
        top: 20,
        marginRight: 15,
    },
})

export default Header_A