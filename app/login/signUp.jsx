import { View, Text, StyleSheet, Touchable, TouchableOpacity, ToastAndroid, Alert } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import Colors from '../../constant/Colors'
import { useRouter } from 'expo-router'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../config/FirebaseConfig'



export default function signUp() {
    const router = useRouter();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [userName, setUserName]=useState();

 
    const OnCreateAccount=()=>{
        if(!email || !password || !userName){
          ToastAndroid.show('Please enter the details properly',ToastAndroid.BOTTOM );
          Alert.alert('Please enter the details properly')
          return;
        }
        
        createUserWithEmailAndPassword(auth, email, password)
        .then(async(userCredential) => {
          // Signed up 
          const user = userCredential.user;
          await updateProfile(user,{
            displayName:userName
          })
          await setLocalStorage('userDetail',user);
          router.replace('(tabs)')
          // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            if(errorCode=='auth/email-already-in-use'||errorCode=='auth/invalid-email'){
              ToastAndroid.show('Email already exists',ToastAndroid.BOTTOM)
              Alert.alert('Email already exists')

            }
            // ..
        });

    }
  
  
    return (
   <View style={styles.container}>
        <View>
           <Text style = {styles.topHeading}>Create New Account</Text>
        </View>
   
         <View>
           <Text style={styles.smallText}>Full Name</Text>  
           <TextInput placeholder='Full Name' style={styles.textInput} onChangeText={(value) => {setUserName(value)}}/>
         </View>

         <View>
           <Text style={styles.smallText}>Email</Text>  
           <TextInput placeholder='Email' style={styles.textInput}
           onChangeText={(value) => setEmail(value)}
           />
         </View>
   
         <View>
           <Text style={styles.smallText}>Password</Text>
           <TextInput placeholder='Password' secureTextEntry={true} style={styles.textInput}
           onChangeText={(value) => setPassword(value)}
           />
         </View>
   
         <View>
           <TouchableOpacity style = {styles.button}
           onPress={OnCreateAccount}
           >
             <Text style = {styles.buttonText}>Create</Text>
           </TouchableOpacity>
   
           <TouchableOpacity style = {styles.buttonCreate} onPress={() => router.replace('login/signIn')}>
              <Text style = {styles.buttonTextCreate}>Have an Account?Sign In</Text>
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