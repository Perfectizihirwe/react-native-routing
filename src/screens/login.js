import React from "react";
import { View, Text } from "react-native";
import { Button } from "../components/button/button";
import { SafeAreaView } from "react-native-safe-area-context";

export const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Login Screen</Text>
        <Button
          title="Navigate to SignUp"
          action={() => navigation.navigate("MainNavigation")}
        />
      </View>
    </SafeAreaView>
  );
};
