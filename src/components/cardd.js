import React from "react";
import { useEffect } from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {View ,Text,Image, ScrollView,} from "react-native";
import axios from "axios";
export const Cardd=({key})=>{
    const [lista,setlista] = React.useState([])

     useEffect(() => {
        listaapi()
     }, [])

    const listaapi = () =>{
        axios({
            method:'get',
            url:'https://api.themoviedb.org/3/movie/top_rated?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US&page=1'
        }).then((data)=>{
            console.log(data.data)
            setlista(data.data.results)
        }).catch((err)=>{
            console.log(err)
        })
    }



    return (
        <View>
        <Text style={{fontWeight:"bold",color:"white",fontSize:22,padding:10}}> Top Rated </Text>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <ScrollView >
            {lista.map((item)=>{
                return(
                    <View style={{flexDirection:"row",marginBottom:10}}>
                    <View>

                        <Image source={{uri:`https://image.tmdb.org/t/p/w500/${item.poster_path}`}}
                        style={{width:160,height:130,paddingLeft:20,marginRight:10,borderRadius:8}} 
                        imageStyle={{borderRadius:2}} />
                     
                    </View>



<View>
                        <Text style={{color:"white",fontSize:17,width:160}}>
                            {item.title}
                            {item.key}
                        </Text>
                        <Text style={{color:"gold",fontSize:12}}>
                            {item.release_date}
                            {item.key}
                        </Text>
                        <Text style={{color:"grey",fontSize:10}}>
                            {item.overview}
                        </Text>
                        </View>

                       
                        </View>
                    
                
                )
            })}
            </ScrollView>
            </View>
            </View>

    )
}