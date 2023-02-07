import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import {SafeAreaView} from "react-native-safe-area-context"
import { useSelector , useDispatch } from "react-redux";
import { increment ,decrement } from "./CounterSlice";

export function Counter(){
    const count = useSelector((state) => state.counter.value)
    const Dispatch = useDispatch()
    return(
        <SafeAreaView>
        <View>
            <View>
                <TouchableOpacity>
                <Button title={'increment'}  onPress= {() => Dispatch(increment())} />
                  </TouchableOpacity> 
                
                <Text>{count}</Text>
                <TouchableOpacity>
                <Button  title='decrement' onPress={() => Dispatch(decrement())}/>
                  </TouchableOpacity>
                  
            </View>
        </View>
        </SafeAreaView>
    )
}