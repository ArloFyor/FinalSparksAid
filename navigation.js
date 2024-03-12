import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import NewPostScreen from './screens/NewPostScreen'
import OpeningScreen from './screens/OpeningScreen'
import LoginScreen from './screens/LoginScreen'
import RegistrationScreenOne from './screens/Registration Screens/RegistrationScreenOne'
import RegistrationScreenBirthday from './screens/Registration Screens/RegistrationScreenBirthday'
import RegistrationScreenGender from './screens/Registration Screens/RegistrationScreenGender'
import RegistrationScreenInterests from './screens/Registration Screens/RegistrationScreenInterests'
import RegistrationScreenEmailAndNumber from './screens/Registration Screens/RegistrationScreenEmailAndNumber'
import RegistrationScreenPassword from './screens/Registration Screens/RegistrationScreenPassword'

const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false,
}

const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='OpeningScreen'
            screenOptions={screenOptions}
        >
            <Stack.Screen name='OpeningScreen' component={OpeningScreen}  />
            <Stack.Screen name='HomeScreen' component={HomeScreen}  />
            <Stack.Screen name='NewPostScreen' component={NewPostScreen}  />
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

export default SignedInStack