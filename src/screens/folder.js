import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {LiScreen,DoScreen} from "./index"
import { View,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, AntDesign, Feather, Fontisto, Ionicons } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();
const {Navigator, Screen} = Tab;
export const FolderScreen =()=>{
    return(
      <View style={{flex:1}}>
      <SafeAreaView>
        <View style={{flexDirection:"row",justifyContent:"space-between",backgroundColor:"black"}}>
<View style={{flexDirection:"row",paddingLeft:10,marginTop:2,paddingTop:5}}>

      <View style={{backgroundColor:"black",padding:12,borderRadius:5}}>
      <Entypo name="eye" size={30} color="gold"/>
</View>
<View style={{backgroundColor:"gold",padding:13,borderRadius:5}}>
  <Text style={{color:"black",fontWeight:"bold",fontSize:20}}>Watch</Text>
</View>
     </View>
    
     </View>
     </SafeAreaView>
        <Navigator
        screenOptions={{
          
          tabBarPressColor: "#ffd131",
          tabBarActiveTintColor: "#ffd131",
          tabBarInactiveTintColor: "white",
          tabBarLabelStyle:{
            fontWeight:"bold",
          },
          
          tabBarContentContainerStyle: { backgroundColor: "black" },
          tabBarIndicatorStyle:{
            width:5,
            padding:2,
            borderRadius:3,
            backgroundColor:"gold",
            borderBottomWidth:2,
            padding:2,
            
            
          },
          headerStyle: {
            marginTop:30,
          },
        }}
      >
     
        <Screen name="Lists" component={LiScreen} />
        <Screen name="Downloads" component={DoScreen }/>
    
        
</Navigator>
</View>
    )
}