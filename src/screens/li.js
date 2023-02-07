import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {View ,Text} from "react-native";
import { Carde } from "../components/Carde";

export const LiScreen = ()=>{
    return (
     
       <View style={{backgroundColor:"black",width:"100%"}}>
        <Carde/>
     </View>
    )
}