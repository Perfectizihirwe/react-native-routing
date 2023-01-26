import React from "react";
import { View, Text } from "react-native";
import { Button } from "../../components/button/button";
import { SafeAreaView } from "react-native-safe-area-context";

export const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Home Screen</Text>
        <Button
          title={"Go to profile"}
          action={() => navigation.navigate("Profile")}
        />
      </View>
    </SafeAreaView>
  );
};
