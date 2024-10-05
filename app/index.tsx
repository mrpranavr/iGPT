import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AnimatedIntro from '@/components/AnimatedIntro'
import BottomLoginSheet from '@/components/BottomLoginSheet'

export default function index() {
  return (
    <View
      style={{
        flex: 1
      }}
    >
      <AnimatedIntro />
      <BottomLoginSheet />
    </View>
  )
}

const styles = StyleSheet.create({})