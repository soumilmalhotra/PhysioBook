import { Tabs, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import {auth} from '../../config/FirebaseConfig'
import { onAuthStateChanged } from 'firebase/auth';
import {getLocalStorage} from '../../service/storage'

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router= useRouter();
//   const[authenticated,setAuthentication] = useState(null)
//   onAuthStateChanged(auth, (user) => {

//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     // ...
//   } else {
//     setAuthentication(false);
//     // User is signed out
//     // ...
//   }
// });

// useEffect(() => {
//   if(authenticated == false){
//     router?.push('/login')
//   } 
// }, [authenticated])

  useEffect(() => {
    GetUserDetail()  
  }, [])
  
const GetUserDetail =async()=>{
  const userInfo= await getLocalStorage('userDetail');
  if(!userInfo){
    router.replace('/login')
  }
}

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} /> ,
        }}
      />
      
    </Tabs>
  );
}
