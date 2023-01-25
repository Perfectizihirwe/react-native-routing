import React from "react";
import { View, Text } from "react-native";
import { Button } from "../../components/button/button";

export const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title={"Go to profile"}
        action={() => navigation.navigate("Profile")}
      />
    </View>
  );
};
