import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

const ProfileBody = () => {
  return (
    <View style={styles.container}>
        <ScrollView>
            <Image style={styles.profilePicture} source={require('../../assets/SamplePicsAndPosts/ProfilePictures/GrandpaCarl.jpg')} />
            <Text style={styles.userName}>Carl</Text>
            <View style={styles.userInfoContainer}>

                <View style={styles.userInfoContainer2}>
                    <Text style={styles.userInfoHead}>Birth Date</Text>
                    <Text style={styles.userInfo}>09/19/2003</Text>
                </View>

                <View style={styles.userInfoContainer2}>
                    <Text style={styles.userInfoHead}>Age</Text>
                    <Text style={styles.userInfo}>70</Text>
                </View>

                <View style={styles.userInfoContainer2}>
                    <Text style={styles.userInfoHead}>Gender</Text>
                    <Text style={styles.userInfo}>Male</Text>
                </View>
            </View>

            <Text style={{marginLeft: 8, marginTop: 30, fontSize: 22, fontWeight: '500', color: '#6237CF',}}>My Memories</Text>

        </ScrollView>
    </View>
  )
}

export default ProfileBody

const styles = StyleSheet.create({

    userInfoContainer:{
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        right: 5
    },

    userInfoContainer2:{
        alignItems: 'center',
        right: 5
    },

    userInfoHead:{
        marginTop: 15,
        fontSize: 20,
        color: '#6237CF',
        fontFamily: 'serif',
        fontWeight: '400',
    },

    
    userInfo:{
        marginTop: 5,
        fontSize: 18,
        color: 'black',
        fontFamily: 'serif',
        fontWeight: '400',
    },

    profilePicture: {
        borderRadius: 50,
        width: 130,
        height: 130,
        marginTop: 30,
        left: 5,
        alignSelf: 'center'
    },

    userName: {
        marginTop: 13,
        fontSize: 22,
        fontWeight: '500',
        alignSelf: 'center',
        color: '#6237CF',
        left: 5,
    }
})