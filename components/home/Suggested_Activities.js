import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'

const Suggested_Activities = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.containerText}>Suggested Activities</Text>
        <View style={styles.containerDirectory}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity onPress={() => navigation.push('ChatBotScreen')}>
                    <Image style={styles.directory} source={require('../../assets/HomeScreenAssets/SuggestedActivities_1.png')}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.push('NewProfilePictureScreen')}>
                    <Image style={styles.directory} source={require('../../assets/HomeScreenAssets/SuggestedActivities_2.png')}/> 
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.push('CompanionScreen')}>
                    <Image style={styles.directory} source={require('../../assets/HomeScreenAssets/SuggestedActivities_3.png')}/> 
                </TouchableOpacity>
            </ScrollView>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    
    container: {
        marginHorizontal: 15,
    },

    containerDirectory: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-around",
        top: 45,
    },

    directory: {
        resizeMode: "contain",
        height: 160,
        width: 160,
        bottom: 25,
        marginHorizontal: 2,
    },
    
    containerText: {
        fontSize: 21,
        position: "absolute",
        fontFamily: 'serif',
        top: 10,
    },
})

export default Suggested_Activities