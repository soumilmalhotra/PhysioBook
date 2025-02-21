import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

export default function HomePage() {
  return (
    <View>
      <Text>HomePage</Text>
      <Redirect href={'login'}/>
    </View>
  )
}