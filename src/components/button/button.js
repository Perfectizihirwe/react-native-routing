import React from "react";
import { Pressable, Text } from "react-native";
import { Styles } from "./style";

export const Button = ({ title, action }) => {
  return (
    <Pressable style={Styles.container} onPress={action}>
      <Text>{title}</Text>
    </Pressable>
  );
};
