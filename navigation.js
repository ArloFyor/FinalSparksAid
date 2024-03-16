import { View, Text } from 'react-native'
import React from 'react'
import { auth } from './firebase'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import NewPostScreen from './screens/NewPostScreen'
import NewProfilePictureScreen from './screens/NewProfilePictureScreen'
import OpeningScreen from './screens/OpeningScreen'
import LoginScreen from './screens/LoginScreen'
import RegistrationScreenOne from './screens/Registration Screens/RegistrationScreenOne'
import RegistrationScreenBirthday from './screens/Registration Screens/RegistrationScreenBirthday'
import RegistrationScreenGender from './screens/Registration Screens/RegistrationScreenGender'
import RegistrationScreenInterests from './screens/Registration Screens/RegistrationScreenInterests'
import RegistrationScreenEmailAndNumber from './screens/Registration Screens/RegistrationScreenEmailAndNumber'
import RegistrationScreenPassword from './screens/Registration Screens/RegistrationScreenPassword'
import ProfileScreen from './screens/ProfileScreen'
import CompanionScreen from './screens/CompanionScreen'
import AddCompanionScreen from './screens/AddCompanionScreen'
import ChatScreen from './screens/ChatScreen'
import ChatBotScreen from './screens/ChatBotScreen'
import MessagesScreen from './screens/MessagesScreen'

const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false,
}

export const SignedOutStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='OpeningScreen'
            screenOptions={screenOptions}
        >
            <Stack.Screen name='OpeningScreen' component={OpeningScreen}  />
            <Stack.Screen name='HomeScreen' component={HomeScreen}  />
            <Stack.Screen name='LoginScreen' component={LoginScreen}  />
            <Stack.Screen name='RegistrationScreenOne' component={RegistrationScreenOne}  />
            <Stack.Screen name='RegistrationScreenBirthday' component={RegistrationScreenBirthday}  />
            <Stack.Screen name='RegistrationScreenGender' component={RegistrationScreenGender}  />
            <Stack.Screen name='RegistrationScreenInterests' component={RegistrationScreenInterests}    />
            <Stack.Screen name='RegistrationScreenEmailAndNumber' component={RegistrationScreenEmailAndNumber}  />
            <Stack.Screen name='RegistrationScreenPassword' component={RegistrationScreenPassword}  />
        </Stack.Navigator>
    </NavigationContainer>
)

export const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='HomeScreen'
            screenOptions={screenOptions}
        >
            <Stack.Screen name='OpeningScreen' component={OpeningScreen}  />
            <Stack.Screen name='HomeScreen' component={HomeScreen}  />
            <Stack.Screen name='NewPostScreen' component={NewPostScreen}  />
            <Stack.Screen name='NewProfilePictureScreen' component={NewProfilePictureScreen}    />
            <Stack.Screen name='ProfileScreen' component={ProfileScreen}    />
            <Stack.Screen name='CompanionScreen' component={CompanionScreen}    />
            <Stack.Screen name='AddCompanionScreen' component={AddCompanionScreen} />
            <Stack.Screen name='ChatScreen' component={ChatScreen}  />
            <Stack.Screen name='ChatBotScreen' component={ChatBotScreen}    />
            <Stack.Screen name='MessagesScreen' component={MessagesScreen}  />

        </Stack.Navigator>
    </NavigationContainer>
)
