import { AntDesign, Feather, FontAwesome,Fontisto,Entypo } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";
import {TextInput} from "react-native-paper";
import {SafeAreaView} from "react-native-safe-area-context";


export const SignupScreen =({navigation})=>{
    return(
      <SafeAreaView >
    <View style={{padding:15,backgroundColor:"#27272a",height:"100%"}}>
    <View style={{flexDirection:"row",alignSelf:"center",marginTop:25}}>
        <View style={{backgroundColor:"black",padding:12,borderRadius:5}}>
        <Entypo name="eye" size={30} color="gold"/>
</View>
<View style={{backgroundColor:"gold",padding:13,borderRadius:5}}>
    <Text style={{color:"black",fontWeight:"bold",fontSize:20}}>Watch</Text>
</View>
       </View>
       <View style={{marginTop:13}}>
        <Text style={{color:"white",alignSelf:"center"}}>
            Sign up to discover all our movies and enjoy  
            </Text>
            <Text style={{color:"white",alignSelf:"center"}}>
            our features 
        </Text>
       </View>
        <View style={{marginTop:34}}>     
        <View style={{color:"white",padding:2 ,flexDirection:"row",justifyContent:"space-between"}} >
      <TextInput underlineColor="grey" textColor="white" activeUnderlineColor="gold" label={'email'}    style={{color:"gold",fontSize:20,width:"96%",backgroundColor:"#27272a"}}/>
      <AntDesign name="mail" size={20} color="gold" />
    </View>
    <View style={{color:"white",borderColor:"grey",padding:2,marginTop:8,flexDirection:"row",justifyContent:"space-between"}} >
      <TextInput textColor="white" activeUnderlineColor="gold" underlineColor="grey" label={'password'}  secureTextEntry={true}

       style={{color:"gold",fontSize:20,backgroundColor:"#27272a",width:"96%"}}/>
      <Feather name="lock"size={20} color="gold" />
    </View>
    <View style={{color:"white",padding:2,marginTop:8,flexDirection:"row",justifyContent:"space-between"}} >
      <TextInput underlineColor="grey" textColor="white" activeUnderlineColor="gold" label={'confirm password'} secureTextEntry={true} style={{color:"gold",fontSize:20,backgroundColor:"#27272a",width:"96%"}}/>
      <Feather name="lock"size={20} color="gold" />
    </View></View>
   
   
   <View style={{backgroundColor:"gold",padding:6,marginTop:50}}>
    <Pressable onPress={() => navigation.navigate("Login")}>
      <Text style={{alignSelf:"center",fontSize:18,fontWeight:"bold"}}>Sign up</Text>
    </Pressable>
   </View>
   <View style={{flexDirection:"row",marginTop:10}}>
    <Text style={{color:"white"}}> By signing up i accept</Text>
    <Text style={{color:"gold"}}> terms of use</Text>
    <Text style={{color:"white"}}> and</Text>
    <Text style={{color:"gold"}}> privacy policy</Text>
   </View>
   <Text style={{color:"white",alignSelf:"center",marginTop:10}}> Or simply sign up with</Text>
   <View style={{backgroundColor:"black",padding:9,marginTop:20}}>
    <Pressable onPress={() => navigation.navigate("Login")}>
      
      <Text style={{alignSelf:"center",fontSize:18,fontWeight:"bold",color:"white"}}><AntDesign name="apple1" size={17} color="white"/> Sign up with apple</Text>
    </Pressable>
   </View>
   <View style={{backgroundColor:"white",padding:9,marginTop:20}}>
    <Pressable onPress={() => navigation.navigate("Login")}>
      
      <Text style={{alignSelf:"center",fontSize:18,fontWeight:"bold",color:"black"}}><AntDesign name="google" size={17} color="green"/> Sign up with google</Text>
    </Pressable>
   </View>
   <View style={{flexDirection:"row",marginTop:10,alignSelf:"center"}}>
    <Text style={{color:"white"}}> Already have an account? </Text>
    <Pressable onPress={() => navigation.navigate("Login")}>
    <Text style={{color:"gold"}}> sign in</Text>
    </Pressable>
    </View>
    </View>
</SafeAreaView>
    )
}