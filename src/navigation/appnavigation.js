import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { GetScreen, LoginScreen, SignupScreen ,Bottoms} from "../screens/index";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const { Navigator, Screen } = Stack;

export const AppNavigation = () => {
    return(
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name="Welcome" component={GetScreen} />
      <Screen  name="Signup" component={SignupScreen} />
      <Screen name="Login" component={LoginScreen}/>
      <Screen  name="home" component={Bottoms}/>
     
    
        </Navigator>
    )
}
