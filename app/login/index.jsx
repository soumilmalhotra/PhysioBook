import { View,StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../constant/Colors'
import { useRouter } from 'expo-router'

export default function LoginScreen() {

  const router = useRouter();
  return (
    <View>
      <View style={{
        display:'flex',
        alignItems:'center',
        marginTop:40
      }}>
        <Image source={require('./../../assets/images/Home.png')}
        style={styles.image}
        />
      </View>
      <View style={{
        display:'flex',
        alignItems: 'center',
        padding:25,
        backgroundColor:Colors.PRIMARY,
        height:'100%',
         
      }}>
        <Text style ={{
          fontSize:30,
          fontWeight:'bold',
          color:'white',
          textAlign:'center'
        }}>
          Stay on Track, Stay Healthy!
        </Text>
        <Text style ={{
          marginTop:20,
          fontSize:17,
          color:'white',
          textAlign:'center'
        }}>Book Your Physiotherapy Sessions,Track Your Meds, Eat healty and Stay Consistent</Text>

        <TouchableOpacity 
        onPress={()=> router.push('login/signIn')}
        style={styles.button}>
          <Text style={{
            textAlign:'center',
            fontSize:17,
            color:Colors.PRIMARY,            
            }}>Continue</Text>
        </TouchableOpacity>
          <Text
          style={{
            color:'white',
            marginTop:4,
            
          }}
          >Note: By Clicking Continue button, you will agree with our terms and conditions</Text>

      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  image:{
    width:210,
    height:450,
    borderRadius:20,
  },
  button:{
    padding:15,
    borderRadius:25,
    backgroundColor:'white',
    marginTop:27,
    width:'100%',


  
  }
})