import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'

const RootLayoutNav = () => { 
  return (
    <Stack>
      <Stack.Screen name='(drawer)' options={{ headerShown: false }}/>
    </Stack>
  )
}

export default RootLayoutNav