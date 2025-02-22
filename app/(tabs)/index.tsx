import { View, Text,Image } from 'react-native'
import React from 'react'
import Header from '../../components/Header'

export default function HomePage() {
  return (
    <View
    style={{
      paddingTop:35,
      backgroundColor:'white',
      height:'100%'
    }}
    >
      <Header/>
    </View>
  )
}