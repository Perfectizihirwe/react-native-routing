import React from "react";
import { View, Text } from "react-native";
import { Button } from "../components/button/button";

export const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button
        title="Navigate to SignUp"
        action={() => navigation.navigate("MainNavigation")}
      />
    </View>
  );
};
