import { View, Text, StyleSheet, Touchable, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { TextInput } from 'react-native'
import Colors from '../../constant/Colors'
import { useRouter } from 'expo-router'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setLocalStorage } from '../../service/storage'

export default function SignIn() {
  const router= useRouter();
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
const auth = getAuth();
const OnSignInClick=()=>{

  if(!email||!password){
    Alert.alert('Please enter the details.')
    return;
  }

    signInWithEmailAndPassword(auth, email, password)
      .then(async(userCredential) => {
        // Signed in 
        const user = userCredential.user;
        await setLocalStorage('userDetail',user);
        router.replace('(tabs)')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if(errorCode =='auth/invalid-credential'){
          Alert.alert('Invalid email or password.')
        }
      });
}
  return (
    <View style={styles.container}>
     <View>
        <Text style = {styles.topHeading}>Let's Sign You In</Text>
        <Text style = {styles.subText}>Welcome Back</Text>
        <Text style = {styles.subText}>You've been missed!</Text>
     </View>

      <View>
        <Text style={styles.smallText}>Email</Text>
        <TextInput placeholder='Email' style={styles.textInput} onChangeText={(value) => setEmail(value) } />
      </View>

      <View>
        <Text style={styles.smallText} >Password</Text>
        <TextInput placeholder='Password' secureTextEntry={true} style={styles.textInput} onChangeText={(value) => setPassword(value) }/>
      </View>

      <View>
        <TouchableOpacity style = {styles.button} onPress={OnSignInClick}>
          <Text style = {styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.buttonCreate} onPress={()=> router.replace('login/signUp')}>
           <Text style = {styles.buttonTextCreate}>Create Account</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}


const styles = StyleSheet.create({
  container:{
      display:'flex',
      marginLeft:20,
      marginTop:40,
      padding :25
  },
  topHeading:{
    fontSize:25,
    fontWeight:'bold',
  },
  subText:{
    color:Colors.GRAY,
    fontSize:25,
    fontWeight:'bold',
    marginTop:10,
  },
  textInput:{
    borderWidth:1,
    borderRadius:7,
    padding:11,
    marginTop:5,
    backgroundColor:'white',
  },
  smallText:{
    marginTop:15,
    fontSize:12
  },
  button:{
    padding:15,
    borderRadius:7,
    borderWidth:1,
    marginTop:35,
    backgroundColor: Colors.PRIMARY,
    borderColor:'white',
  },
  buttonCreate:{
    padding:15,
    borderRadius:7,
    borderWidth:1,
    marginTop:35,
    backgroundColor:'white',
    borderColor:Colors.PRIMARY,
  },
  buttonText:{
    textAlign:'center',
    color:'white',
    
  },
  buttonTextCreate:{
    textAlign:'center',
    color:Colors.PRIMARY,
    
  }
})