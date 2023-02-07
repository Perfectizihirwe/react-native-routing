import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {View ,Text, TextInput} from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
import { Cardc } from "../components/Cardc";
import { Cardb } from "../components/Cardb";
export const SearchScreen = ()=>{
    return (
        <SafeAreaView>
            <View style={{backgroundColor:"#27272a",height:"100%",padding:10}}>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <View>
                <Text style={{color:"white",fontWeight:"bold",fontSize:30,marginTop:20}}> Search </Text>
                </View>
            <View style={{flexDirection:"row",marginLeft:10,marginTop:12}}>
        <View style={{backgroundColor:"black",padding:12,borderRadius:5}}>
        <Entypo name="eye" size={30} color="gold"/>
</View>
<View style={{backgroundColor:"gold",padding:13,borderRadius:5}}>
    <Text style={{color:"black",fontWeight:"bold",fontSize:20}}>Watch</Text>
</View>
       </View>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",backgroundColor:"#5e6162",padding:6,marginTop:2,marginBottom:13}}>
                    <TextInput placeholder="Type title, categories, years etc" style={{color:"white",fontSize:14}}/>
                    <Feather name="search" size={24} color="gold"/>
                </View>
                <View>
                <Cardc/>
                </View>
            </View>
        </SafeAreaView>
    )
}