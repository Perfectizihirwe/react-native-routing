import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  GetScreen,
  LoginScreen,
  SignupScreen,
  Bottoms,
  MovieDetail,
} from "../screens/index";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getItemAsync } from "expo-secure-store";
const Stack = createNativeStackNavigator();
import {
  storeToken,
  login as storeLoginData,
} from "../features/authenticationSlice";

const { Navigator, Screen } = Stack;

export const AppNavigation = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.auth.isLoggedIn);
  console.log(login, "Login state from redux");

  useEffect(() => {
    getItemAsync("userToken").then((res) => {
      console.log(res, "data from storage");
      dispatch(storeToken(res));
    });
    getItemAsync("userInformation").then((res) => {
      console.log(res);
      dispatch(storeLoginData(res));
    });
  }, []);

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {login == true ? (
        <>
          <Screen name="home" component={Bottoms} />
          <Screen name="detail" component={MovieDetail} />
        </>
      ) : (
        <>
          <Screen name="Login" component={LoginScreen} />
          <Screen name="Welcome" component={GetScreen} />
          <Screen name="Signup" component={SignupScreen} />
        </>
      )}
    </Navigator>
  );
};
