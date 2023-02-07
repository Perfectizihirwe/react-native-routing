import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {View ,Text} from "react-native";
import { Cardd } from "../components/cardd";
export const OriginScreen = ()=>{
    return (
       
            <View style={{backgroundColor:"black",width:"100%"}}>
                <Cardd/>
               
            </View>
        
    )
}