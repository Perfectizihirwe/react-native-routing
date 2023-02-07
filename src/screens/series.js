import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {View ,Text} from "react-native";

export const SerieScreen = ()=>{
    return (
<View style={{backgroundColor:"#27272a",height:"100%",padding:10}}>
    <View style={{backgroundColor:"white", padding:10,borderRadius:14,justifyContent:"center",alignContent:"center",height:300,marginTop:100}}>
<View style={{flexDirection:"row"}}>
       <Text style={{fontSize:30,fontWeight:"bold"}}>
        COMING SOON
        </Text>
        <Text style={{fontSize:30,fontWeight:"bold",color:"gold"}}> >>> </Text>
        </View>
    </View>
</View>
        
    )
}