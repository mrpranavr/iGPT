import { View, Text } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles'
import { Stack } from 'expo-router'
import HeaderDropDown from '@/components/HeaderDropDown'

const Dalle = () => {
  return (
    <View style={defaultStyles.pageContainer}>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <HeaderDropDown 
              title="Dall-E" 
              onSelect={(key) => {}} 
              items= {[
                {key: 'share', title: 'Share GPT', icon: 'square.and.arrow.up'},
                {key: 'details', title: 'See Details', icon: 'info.circle'},
                {key: 'keep', title: 'Keep in Sidebar', icon: 'pin'},
              ]}
            />
          ),
        }}
      />
    </View>
  )
}

export default Dalle