import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SignedInStack, SignedOutStack } from './navigation'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

const AuthNavigation = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const userHandler = user => {
    setCurrentUser(user)
    setIsLoading(false)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => userHandler(user))
    return () => unsubscribe()
  }, [])

  if (isLoading) {
    return <View><Text>Loading...</Text></View>
  }

  return <>{ currentUser ? <SignedInStack/> : <SignedOutStack/> }</>
}

export default AuthNavigation