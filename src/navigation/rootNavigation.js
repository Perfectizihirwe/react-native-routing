import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./appNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

const RootNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigation;
