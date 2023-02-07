import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { useSelector , useDispatch } from "react-redux";
import { increment ,decrement } from "./CounterSlice";

export function Counter(){
    const count = useSelector((state) => state.counter.value)
    const Dispatch = useDispatch()
    return(
        <View>
            <View>
                <Button onPress= {() => Dispatch(increment())} >
                    increment
                </Button>
                <Text>{count}</Text>
                <Button onPress={() => Dispatch(decrement())}>decrement</Button>
            </View>
        </View>
    )
}